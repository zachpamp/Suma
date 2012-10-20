/**
 * Central application for chart display.
 *
 * @author  Bret Davidson <bret_davidson@ncsu.edu>
 *
 * @property {object} filters Instantiated filter module
 * @property {object} chart Instantiated time series chart
 */
(function (ReportFilters, TimeSeries, BarChart) {
    var App = {
        filters: undefined,
        mainChart: undefined,
        suppChart: undefined,
        updateListeners: undefined,
        counts: undefined,
        params: undefined,
        /**
         * Initializes app
         *
         * @this {App}
         */
        init: function () {
            // Insert default dates
            this.insertDefaultDates();

            // Insert filter select boxes
            this.insertFilters();

            // Bind events (AJAX Call)
            this.bindEvents();
        },
        /**
         * Inserts default dates into form
         */
        insertDefaultDates : function () {
            // Create dates for default date display
            var now = moment().format('YYYY-MM-DD'),
                then = moment().subtract('months', 6).format('YYYY-MM-DD');

            // Insert default dates into DOM
            $('#sdate').val(then);
            $('#edate').val(now);
        },
        /**
         * Initializes and inserts secondary filters
         */
        insertFilters: function () {
            // Create options object for filters
            var filterOptions = {
                url: '../../lib/php/reportFilters.php',
                triggerForm: '#initiatives',
                filterForm: '#secondary-filters',
                locationsTemplate: '#locations-template',
                activitiesTemplate: '#activities-template',
                locationsSelect: '#locations',
                activitiesSelect: '#activities'
            };

            // Initialize filters
            if (this.filters === undefined) {
                this.filters = new ReportFilters(filterOptions);
            }

            this.filters.init();
        },
        /**
         * Binds events for datepicker and data AJAX call.
         */
        bindEvents: function () {
            var self = this;

            // Initialize datepicker
            $('#sdate').datepicker({'format': 'yyyy-mm-dd', 'autoclose': 'true'});
            $('#edate').datepicker({'format': 'yyyy-mm-dd', 'autoclose': 'true'});

            // Event handler to initialize AJAX call
            $('body').on('submit', '#chartFilters', function (e) {
                var input = $(this).serializeArray();
                // Save params for annotation later
                self.params = input;

                $.when(self.getData(input))
                    .then(function (data) {
                        var counts = self.processData(data);

                        if (counts) {
                            self.drawChart(counts);
                            self.counts = counts;
                            self.drawTable(counts);
                        } else {
                            self.noData();
                        }
                    }, function (e) {
                        $('#ajax-error').show();
                    });

                e.preventDefault();
            });

            // Live Filters
            $('#main-chart-avgsum').on('click', function (e) {
                var mainState,
                    locState,
                    avgState;

                mainState = e.target.value;
                locState = $('#supp-chart-locact > .active')[0].value;
                avgState = $('#supp-chart-avgsum > .active')[0].value;

                self.updateMainChart(self.counts, mainState, locState, avgState);
            });

            $('#supp-chart-locact').on('click', function (e) {
                var mainState,
                    locState,
                    avgState;

                mainState = $('#main-chart-avgsum > .active')[0].value;
                locState = e.target.value;
                avgState = $('#supp-chart-avgsum > .active')[0].value;

                self.updateSuppChart(self.counts, mainState, locState, avgState);
            });

            $('#supp-chart-avgsum').on('click', function (e) {
                var mainState,
                    locState,
                    avgState;

                mainState = $('#main-chart-avgsum > .active')[0].value;
                locState = $('#supp-chart-locact > .active')[0].value;
                avgState = e.target.value;

                self.updateSuppChart(self.counts, mainState, locState, avgState);
            });

            // Image Download
            $("#main-download, #supp-download").on("click", function (e) {
                var linkId = "#" + this.id,
                    chartId = "#" + $(this).attr('data-chart-div');

                self.downloadPNG(linkId, chartId);
            });
        },
        annotateUI: function () {
            var actId,
                activities = {},
                context,
                data       = {},
                html,
                initName   = $("#initiatives option:selected").text(),
                locations  = {},
                source,
                template;

            _.each(this.params, function (element, index) {
                data[element.name] = element.value;
            });

            _.each(this.filters.activities, function (element, index) {
                activities[element.id] = element.title;
            });

            _.each(this.filters.locations, function (element, index) {
                locations[element.id] = element.title;
            });

            data.id = initName;

            if (data.locations !== 'all') {
                data.locations = locations[data.locations];
            }

            if (data.activities !== 'all') {
                actId = data.activities.split('-');
                actId = actId[1];
                data.activities = activities[actId];
            }


            source   = $('#main-annotation-template').html();
            template = Handlebars.compile(source);
            context  = data;
            html     = template(context);

            $('#main-annotation').empty();
            $('#main-annotation').append(html);

        },
        /**
         * Method to convert SVG to downloadable PNG
         * @param  string linkId  CSS ID of the link clicked to call method
         * @param  string chartId Contents of data-property with CSS ID of source SVG wrapper div
         */
        downloadPNG: function (linkId, chartId) {
            var canvas,
                img,
                svg;

            // Get svg markup from chart
            svg = $(chartId).html();

            // Insert invisible canvas
            $('body').append('<canvas id="canvas" style="display:none"></canvas>');

            // Insert chart into invisible canvas
            canvg(document.getElementById('canvas'), svg);

            // Retrieve contents of invisible canvas
            canvas = document.getElementById('canvas');

            // Convert canvas to data
            img = canvas.toDataURL("image/png");

            // Update href to use data:image
            $(linkId).attr('href', img);
        },
        /**
         * AJAX call to retrieve data
         *
         * @param  {array} input
         * @return {object} Returns a jQuery promise object
         */
        getData: function (input) {
            return $.ajax({
                url: 'results.php',
                data: input,
                dataType: 'json',
                // These are a hot mess and need to be optimized
                beforeSend: function () {
                    var text = $('#submit').data('loading-text');
                    $('#submit').addClass('disabled').val(text);
                    $('#submit').attr('disabled', 'true');
                    $('svg').remove();
                    $('.alert').hide();
                    $('#loading').show();
                    $('#supplemental-charts').hide();
                    $('#main-chart-header').css('visibility', 'hidden');
                },
                success: function () {
                    $('#supplemental-charts').show();
                    $('#main-chart-header').css('visibility', 'visible');
                },
                complete: function () {
                    var text = $('#submit').data('default-text');
                    $('#submit').removeClass('disabled').val(text);
                    $('#submit').removeAttr('disabled');
                    $('#loading').hide();
                }
            });
        },
        /**
         * Sort ascending according to date, meant to be used with
         * native arr.sort() method.
         *
         * @param  {object} a
         * @param  {object} b
         * @return {integer}
         */
        sortData: function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        },
        /**
         * Display error message
         */
        noData: function () {
            $('#no-data').show();
            $('#submit').removeAttr('disabled');
            $('#supplemental-charts').hide();
            $('#main-chart-header').css('visibility', 'hidden');
        },
        /**
         * Process response from AJAX call
         *
         * @param  {object} response
         * @return {array}
         */
        processData: function (response) {
            var self = this,
                counts,
                locations,
                activities,
                testLength;

            if (!response.locationsSum) {
                return false;
            }

            console.log('from app.js', response);
            // Convert response into arrays of objects
            counts = {};

            // Get location/activity data from filters object
            locations = this.filters.locations;
            activities = this.filters.activities;

            // Total Sum
            counts.total = [{
                total : response.total
            }];

            // Locations Sum
            counts.locationsSum = [];
            counts.locationsPct = [];
            _.each(response.locationsSum, function (element, index) {
                var locDict,
                    newObj,
                    pctObj;

                locDict = _.filter(locations, function (ele) {
                    //console.log('test', element, index, parent, locations)
                    return ele.id === parseInt(index, 10);
                });

                newObj = {
                    id    : index,
                    name  : locDict[0].title,
                    depth : locDict[0].depth,
                    rank  : locDict[0].rank,
                    parent: locDict[0].parent,
                    count : element,
                    percent: parseInt((element / response.total * 100).toFixed(2), 10)
                };

                pctObj = {
                    id    : index,
                    name  : locDict[0].title,
                    depth : locDict[0].depth,
                    rank  : locDict[0].rank,
                    parent: locDict[0].parent,
                    count : newObj.percent
                };

                counts.locationsSum.push(newObj);
                counts.locationsPct.push(pctObj);
            });

            // Locations Avg Sum
            counts.locationsAvgSum = [];
            _.each(response.locationsAvgSum, function (element, index) {
                var locDict,
                    newObj;

                locDict = _.filter(locations, function (parent) {
                    return parent.id === parseInt(index, 10);
                });

                newObj = {
                    id    : index,
                    name  : locDict[0].title,
                    depth : locDict[0].depth,
                    rank  : locDict[0].rank,
                    parent: locDict[0].parent,
                    count : element
                };
                counts.locationsAvgSum.push(newObj);
            });

            //Locations Avg Avg
            counts.locationsAvgAvg = [];
            delete response.locationsAvgAvg.averages;
            delete response.locationsAvgAvg.days;

            _.each(response.locationsAvgAvg, function (element, index) {
                var locDict,
                    newObj;

                locDict = _.filter(locations, function (parent) {
                    return parent.id === parseInt(index, 10);
                });

                newObj = {
                    id    : index,
                    name  : locDict[0].title,
                    depth : locDict[0].depth,
                    rank  : locDict[0].rank,
                    parent: locDict[0].parent,
                    count : element
                };
                counts.locationsAvgAvg.push(newObj);
            });

            // Activities Sum
            counts.activitiesSum = [];
            counts.activitiesPct = [];
            _.each(response.activitiesSum, function (element, index) {
                var actDict,
                    newObj,
                    pctObj;

                actDict = _.filter(activities, function (act, i) {
                    return act.id === parseInt(index, 10) && act.type === 'activity';
                });

                if (actDict.length > 0) {
                    newObj = {
                        id    : index,
                        name  : actDict[0].title,
                        depth : actDict[0].depth,
                        rank  : actDict[0].rank,
                        activityGroup: actDict[0].activityGroup,
                        count : element,
                        percent: parseInt((element / response.total * 100).toFixed(2), 10)
                    };

                    pctObj = {
                        id    : index,
                        name  : actDict[0].title,
                        depth : actDict[0].depth,
                        rank  : actDict[0].rank,
                        activityGroup: actDict[0].activityGroup,
                        count : newObj.percent
                    };
                } else {
                    newObj = {
                        id    : index,
                        name  : 'No Activity',
                        depth : undefined,
                        rank  : undefined,
                        activityGroup: undefined,
                        count : element,
                        percent: parseInt((element / response.total * 100).toFixed(2), 10)
                    };

                    pctObj = {
                        id    : index,
                        name  : 'No Activity',
                        depth : undefined,
                        rank  : undefined,
                        activityGroup: undefined,
                        count : newObj.percent
                    };
                }

                counts.activitiesSum.push(newObj);
                counts.activitiesPct.push(pctObj);
            });

            // Activities Avg Sum
            counts.activitiesAvgSum = [];
            _.each(response.activitiesAvgSum, function (element, index) {
                var actDict,
                    newObj;

                actDict = _.filter(activities, function (act, i) {
                    return act.id === parseInt(index, 10) && act.type === 'activity';
                });

                if (actDict.length > 0) {
                    newObj = {
                        id    : index,
                        name  : actDict[0].title,
                        depth : actDict[0].depth,
                        rank  : actDict[0].rank,
                        activityGroup: actDict[0].activityGroup,
                        count : element
                    };
                } else {
                    newObj = {
                        id    : index,
                        name  : 'No Activity',
                        depth : undefined,
                        rank  : undefined,
                        activityGroup: undefined,
                        count : element
                    };
                }
                counts.activitiesAvgSum.push(newObj);
            });

            // Activities Avg Avg
            counts.activitiesAvgAvg = [];
            delete response.activitiesAvgAvg.averages;
            delete response.activitiesAvgAvg.days;

            _.each(response.activitiesAvgAvg, function (element, index) {
                var actDict,
                    newObj;

                actDict = _.filter(activities, function (act, i) {
                    return act.id === parseInt(index, 10) && act.type === 'activity';
                });

                if (actDict.length > 0) {
                    newObj = {
                        id    : index,
                        name  : actDict[0].title,
                        depth : actDict[0].depth,
                        rank  : actDict[0].rank,
                        activityGroup: actDict[0].activityGroup,
                        count : element
                    };
                } else {
                    newObj = {
                        id    : index,
                        name  : 'No Activity',
                        depth : undefined,
                        rank  : undefined,
                        activityGroup: undefined,
                        count : element
                    };
                }
                counts.activitiesAvgAvg.push(newObj);
            });

            // Period Sum
            counts.periodSum = [];
            _.each(response.periodSum, function (element, index) {
                var newObj = {
                    date: index,
                    count: element.count
                };

                counts.periodSum.push(newObj);
            });

            // Period Avg
            counts.periodAvg = [];
            _.each(response.periodAvg, function (element, index) {
                var newObj = {
                    date: index,
                    count: element.count
                };

                counts.periodAvg.push(newObj);
            });

            // Day of Week Summary
            counts.dayOfWeekSummary = [];
            _.each(response.dayOfWeekSummary, function (element, index) {
                var newObj = {
                    day: index,
                    count: element
                };

                counts.dayOfWeekSummary.push(newObj);
            });

            // Month Summary
            counts.monthSummary = [];
            _.each(response.monthSummary, function (element, index) {
                var newObj = {
                    day: index,
                    count: element
                };

                counts.monthSummary.push(newObj);
            });

            // Year Summary
            counts.yearSummary = [];
            _.each(response.yearSummary, function (element, index) {
                var newObj = {
                    year: index,
                    count: element
                };

                counts.yearSummary.push(newObj);
            });

            // Check if counts is large enough to display meaningfully
            testLength = _.unique(_.pluck(_.values(counts.periodSum), 'count'));

            if (testLength.length === 1) {
                return false;
            }

            // Sort period arrays by date
            counts.periodSum.sort(self.sortData);
            counts.periodAvg.sort(self.sortData);

            console.log('counts', counts);
            return counts;
        },
        /**
         * Draw chart
         *
         * @param  {array} counts
         */
        drawChart: function (counts) {
            var self = this,
                avgState,
                locState,
                mainState;

            if (!this.mainChart) {
                this.mainChart = new TimeSeries();
            }

            if (!this.suppChart) {
                this.suppChart = new BarChart();
            }

            // Get states from DOM
            mainState = $('#main-chart-avgsum > .active')[0].value;
            locState = $('#supp-chart-locact > .active')[0].value;
            avgState = $('#supp-chart-avgsum > .active')[0].value;

            self.updateMainChart(counts, mainState, locState, avgState);

        },
        /**
         * Update primary chart
         * @param  {array} counts
         * @param  {string} mainState
         * @param  {string} locState
         * @param  {string} avgState
         */
        updateMainChart: function (counts, mainState, locState, avgState) {
            var self = this,
                data;

            // Select Data Source
            if (mainState === 'sum') {
                data = counts.periodSum;
            } else {
                data = counts.periodAvg;
            }

            // Update Main Chairt
            $('#chart1 > svg').remove();
            d3.select("#chart1")
                .datum(data)
                .call(this.mainChart);

            // Update Supplemental Chart
            self.updateSuppChart(counts, mainState, locState, avgState);

            // Update annotation on UI
            self.annotateUI();
        },
        /**
         * Update secondary chart
         * @param  {array} counts
         * @param  {string} mainState
         * @param  {string} locState
         * @param  {string} avgState
         */
        updateSuppChart: function (counts, mainState, locState, avgState) {
            var data,
                actAvg,
                actPct,
                actSum,
                locAvg,
                locPct,
                locSum;

            // Set sum data
            locSum = counts.locationsSum;
            actSum = counts.activitiesSum;

            // Set pct data
            locPct = counts.locationsPct;
            actPct = counts.activitiesPct;

            // Set avg data
            if (mainState === 'sum') {
                locAvg = counts.locationsAvgSum;
                actAvg = counts.activitiesAvgSum;
            } else {
                locAvg = counts.locationsAvgAvg;
                actAvg = counts.activitiesAvgAvg;
            }

            // Set data to send to chart based on state of main and supplement charts
            if ((locState === 'locations') && (avgState === 'sum')) {
                data = locSum;
            } else if ((locState === 'locations') && (avgState === 'avg')) {
                data = locAvg;
            } else if ((locState === 'locations') && (avgState === 'pct')) {
                data = locPct;
            } else if ((locState === 'activities') && (avgState === 'sum')) {
                data = actSum;
            } else if ((locState === 'activities') && (avgState === 'avg')) {
                data = actAvg;
            } else if ((locState === 'activities') && (avgState === 'pct')) {
                data = actPct;
            }

            d3.select("#chart2")
                .datum(data)
                .call(this.suppChart);
        },
        drawTable: function (counts) {
            //console.log('testing', counts);

            this.buildTemplate(counts.total, '#total-sum-table', '#total-data');
            this.buildTemplate(counts.locationsSum, '#locations-sum-table', '#locations-data');
            this.buildTemplate(counts.activitiesSum, '#activities-sum-table', '#activities-data');
        },
        buildTemplate: function (items, templateId, elementId) {
            var html,
                json,
                template;

            // Insert list into object for template iteration
            json = {items: items};

            // Retrieve template from index.php (in script tag)
            html = $(templateId).html();

            // Compile template
            template = Handlebars.compile(html);

            // Template helper to convert depth to emdash
            // Handlebars.registerHelper('indent', function (depth) {
            //     var indent = '';
            //     while (depth > 0) {
            //         depth -= 1;
            //         indent += '&mdash;';
            //     }
            //     return indent;
            // });

            // Populate template with data and insert into DOM
            $(elementId).empty();
            $(elementId).append(template(json));
        }
    };

    // Start app on document ready
    $(document).ready(function () {
        App.init();
    });
}(ReportFilters, TimeSeries, BarChart));