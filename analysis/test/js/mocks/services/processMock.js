'use strict';

// Using Test Initiatve 8-12-2013 to 8-14-2013
angular.module('processMock', [])
  .value('mockLocations', [{
    'title': 'All',
    'id': 'all'
  }, {
    'id': 2,
    'title': 'Tower/Stacks',
    'parent': 1,
    'description': '',
    'rank': 0,
    'depth': 0
  }, {
    'id': 7,
    'title': 'Unity lab',
    'parent': 2,
    'description': '',
    'rank': 0,
    'depth': 1
  }, {
    'id': 8,
    'title': '2nd floor',
    'parent': 2,
    'description': '',
    'rank': 1,
    'depth': 1
  }, {
    'id': 9,
    'title': '3rd floor',
    'parent': 2,
    'description': '',
    'rank': 2,
    'depth': 1
  }, {
    'id': 10,
    'title': '4th floor',
    'parent': 2,
    'description': '',
    'rank': 3,
    'depth': 1
  }, {
    'id': 11,
    'title': '5th floor',
    'parent': 2,
    'description': '',
    'rank': 4,
    'depth': 1
  }, {
    'id': 12,
    'title': '6th floor',
    'parent': 2,
    'description': '',
    'rank': 5,
    'depth': 1
  }, {
    'id': 13,
    'title': '7th floor',
    'parent': 2,
    'description': '',
    'rank': 6,
    'depth': 1
  }, {
    'id': 14,
    'title': '8th floor',
    'parent': 2,
    'description': '',
    'rank': 7,
    'depth': 1
  }, {
    'id': 15,
    'title': '9th floor',
    'parent': 2,
    'description': '',
    'rank': 8,
    'depth': 1
  }, {
    'id': 3,
    'title': 'Ground Floor',
    'parent': 1,
    'description': '',
    'rank': 1,
    'depth': 0
  }, {
    'id': 4,
    'title': 'Lobby and Mezzanine',
    'parent': 1,
    'description': '',
    'rank': 2,
    'depth': 0
  }, {
    'id': 5,
    'title': 'West Wing',
    'parent': 1,
    'description': '',
    'rank': 3,
    'depth': 0
  }, {
    'id': 16,
    'title': 'Technology Sandbox',
    'parent': 5,
    'description': '',
    'rank': 0,
    'depth': 1
  }, {
    'id': 17,
    'title': 'Quiet Reading Room',
    'parent': 5,
    'description': '',
    'rank': 1,
    'depth': 1
  }, {
    'id': 53,
    'title': 'Terrace',
    'parent': 5,
    'description': '',
    'rank': 2,
    'depth': 1
  }, {
    'id': 18,
    'title': 'ConeZone & Creamery',
    'parent': 5,
    'description': '',
    'rank': 3,
    'depth': 1
  }, {
    'id': 19,
    'title': 'WW 1st floor',
    'parent': 5,
    'description': '',
    'rank': 4,
    'depth': 1
  }, {
    'id': 20,
    'title': 'WW 2nd floor',
    'parent': 5,
    'description': '',
    'rank': 5,
    'depth': 1
  }, {
    'id': 6,
    'title': 'East Wing',
    'parent': 1,
    'description': '',
    'rank': 4,
    'depth': 0
  }, {
    'id': 21,
    'title': 'EW 1st floor (Learning Commons)',
    'parent': 6,
    'description': '',
    'rank': 0,
    'depth': 1
  }, {
    'id': 22,
    'title': 'EW 2nd floor',
    'parent': 6,
    'description': '',
    'rank': 1,
    'depth': 1
  }, {
    'id': 23,
    'title': 'Special Collections Reading Room',
    'parent': 6,
    'description': '',
    'rank': 2,
    'depth': 1
  }, {
    'id': 24,
    'title': 'Digital Media Lab',
    'parent': 6,
    'description': '',
    'rank': 3,
    'depth': 1
  }])
  .value('mockActivities', [{
    'title': 'All',
    'id': 'all'
  }, {
    'id': 23,
    'rank': 0,
    'title': 'Test Group',
    'type': 'activityGroup',
    'depth': 0
  }, {
    'id': 63,
    'rank': 0,
    'title': 'Knitting',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 23
  }, {
    'id': 24,
    'rank': 1,
    'title': 'Technology',
    'type': 'activityGroup',
    'depth': 0
  }, {
    'id': 64,
    'rank': 0,
    'title': 'Computer',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 24
  }, {
    'id': 65,
    'rank': 1,
    'title': 'Laptop',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 24
  }, {
    'id': 66,
    'rank': 2,
    'title': 'Tablet',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 24
  }, {
    'id': 1,
    'rank': 2,
    'title': 'Activities',
    'type': 'activityGroup',
    'depth': 0
  }, {
    'id': 1,
    'rank': 0,
    'title': 'Reading',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 1
  }, {
    'id': 2,
    'rank': 1,
    'title': 'Sleeping',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 1
  }, {
    'id': 4,
    'rank': 2,
    'title': 'Computing',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 1
  }, {
    'id': 3,
    'rank': 3,
    'title': 'Collaborating',
    'type': 'activity',
    'depth': 1,
    'activityGroup': 1
  }])
  .value('mockNoActivities', [{
    'title': 'All',
    'id': 'all'
  }])
  .value('mockResponse', {
    'hourSummary': [null, null, null, null, null, null, null, null, 11, null, 8, null, null, null, null, 19, null, null, null, null, null, null, null, null],
    'dailyHourSummary': [
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 10,
        'avg': 10,
        'avgDays': 10
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 8,
        'avg': 8,
        'avgDays': 8
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 11,
        'avg': 11,
        'avgDays': 11
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 9,
        'avg': 9,
        'avgDays': 9
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }]
    ],
    'csv': {
      '2013-08-12': {
        'date': '2013-08-12',
        'total': 10,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 6,
          'Lobby and Mezzanine': 4,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 2,
          'Test Group: Knitting': 2,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 8
        }
      },
      '2013-08-14': {
        'date': '2013-08-14',
        'total': 20,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 10,
          'Lobby and Mezzanine': null,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': 6,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': 4,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': null,
          'Test Group: Knitting': 1,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': 1,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 17
        }
      },
      '2013-08-13': {
        'date': '2013-08-13',
        'total': 8,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': null,
          'Lobby and Mezzanine': 8,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 1,
          'Test Group: Knitting': null,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': 1,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 6
        }
      }
    },
    'activitiesSum': {
      '1': 3,
      '4': 1,
      '63': 3,
      '64': 6,
      '66': 1,
      '_No Activity': 31
    },
    'activitiesAvgAvg': {
      '1': 1,
      '4': 1,
      '63': 1,
      '64': 1.66666666667,
      '66': 1,
      'days': {
        '2013-08-12': {
          'sessions': {
            '21593': {
              '1': 1,
              '63': 1,
              '64': 1,
              '_No Activity': 3
            },
            '21594': {
              '1': 1,
              '63': 1,
              '64': 1,
              '_No Activity': 5
            }
          },
          'activities': {
            '1': {
              'count': 2,
              'divisor': 2
            },
            '63': {
              'count': 2,
              'divisor': 2
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '_No Activity': {
              'count': 8,
              'divisor': 2
            }
          }
        },
        '2013-08-14': {
          'sessions': {
            '21648': {
              '63': 1,
              '64': 1,
              '_No Activity': 5
            },
            '21649': {
              '_No Activity': 5
            },
            '21668': {
              '64': 1,
              '_No Activity': 4
            },
            '21669': {
              '4': 1,
              '_No Activity': 3
            }
          },
          'activities': {
            '4': {
              'count': 1,
              'divisor': 1
            },
            '63': {
              'count': 1,
              'divisor': 1
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '_No Activity': {
              'count': 17,
              'divisor': 4
            }
          }
        },
        '2013-08-13': {
          'sessions': {
            '21616': {
              '1': 1,
              '64': 1,
              '_No Activity': 2
            },
            '21617': {
              '64': 1,
              '66': 1,
              '_No Activity': 4
            }
          },
          'activities': {
            '1': {
              'count': 1,
              'divisor': 1
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '66': {
              'count': 1,
              'divisor': 1
            },
            '_No Activity': {
              'count': 6,
              'divisor': 2
            }
          }
        }
      },
      'averages': {
        '1': {
          'avg': 2,
          'divisor': 2
        },
        '4': {
          'avg': 1,
          'divisor': 1
        },
        '63': {
          'avg': 2,
          'divisor': 2
        },
        '64': {
          'avg': 5,
          'divisor': 3
        },
        '66': {
          'avg': 1,
          'divisor': 1
        },
        '_No Activity': {
          'avg': 27,
          'divisor': 3
        }
      },
      '_No Activity': 9
    },
    'total': 38,
    'yearSummary': {
      '2013': 38
    },
    'monthSummary': {
      '2013': {
        'August': 38
      }
    },
    'weekdaySummary': {
      'Monday': 10,
      'Wednesday': 20,
      'Tuesday': 8
    },
    'periodSum': {
      '2013-08-12': {
        'count': 10
      },
      '2013-08-14': {
        'count': 20
      },
      '2013-08-13': {
        'count': 8
      }
    },
    'locationsSum': {
      '3': 16,
      '4': 12,
      '18': 6,
      '22': 4
    },
    'periodAvg': {
      '2013-08-12': {
        'sessions': {
          '21593': {
            '4': 4
          },
          '21594': {
            '3': 6
          }
        },
        'locations': {
          '3': {
            'count': 6,
            'divisor': 1
          },
          '4': {
            'count': 4,
            'divisor': 1
          }
        },
        'count': 10
      },
      '2013-08-14': {
        'sessions': {
          '21648': {
            '18': 6
          },
          '21649': {
            '3': 5
          },
          '21668': {
            '3': 5
          },
          '21669': {
            '22': 4
          }
        },
        'locations': {
          '3': {
            'count': 10,
            'divisor': 2
          },
          '18': {
            'count': 6,
            'divisor': 1
          },
          '22': {
            'count': 4,
            'divisor': 1
          }
        },
        'count': 15
      },
      '2013-08-13': {
        'sessions': {
          '21616': {
            '4': 3
          },
          '21617': {
            '4': 5
          }
        },
        'locations': {
          '4': {
            'count': 8,
            'divisor': 2
          }
        },
        'count': 4
      }
    },
    'locationsAvgSum': {
      '3': 5.33333333333,
      '4': 4,
      '18': 2,
      '22': 1.33333333333
    },
    'activitiesAvgSum': {
      '1': 1,
      '4': 0.333333333333,
      '63': 1,
      '64': 2,
      '66': 0.333333333333,
      '_No Activity': 10.3333333333
    },
    'locationsAvgAvg': {
      '3': 5.5,
      '4': 4,
      '18': 6,
      '22': 4,
      'days': {
        '2013-08-12': {
          '3': {
            'count': 6,
            'divisor': 1
          },
          '4': {
            'count': 4,
            'divisor': 1
          }
        },
        '2013-08-14': {
          '3': {
            'count': 10,
            'divisor': 2
          },
          '18': {
            'count': 6,
            'divisor': 1
          },
          '22': {
            'count': 4,
            'divisor': 1
          }
        },
        '2013-08-13': {
          '4': {
            'count': 8,
            'divisor': 2
          }
        }
      },
      'averages': {
        '3': {
          'avg': 11,
          'divisor': 2
        },
        '4': {
          'avg': 8,
          'divisor': 2
        },
        '18': {
          'avg': 6,
          'divisor': 1
        },
        '22': {
          'avg': 4,
          'divisor': 1
        }
      }
    }
  })
  .value('mockCalendarProcessedData', {
    'options': [{
      'title': 'Daily Avg',
      'val': 'avg',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 4
      }, {
        'date': '2013-08-14',
        'count': 15
      }]
    }, {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    }],
    'data': {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    }
  })
  .value('mockHourlyProcessedData', {
    'sum': [{
      'day': 1,
      'hour': 1,
      'value': null
    }, {
      'day': 1,
      'hour': 2,
      'value': null
    }, {
      'day': 1,
      'hour': 3,
      'value': null
    }, {
      'day': 1,
      'hour': 4,
      'value': null
    }, {
      'day': 1,
      'hour': 5,
      'value': null
    }, {
      'day': 1,
      'hour': 6,
      'value': null
    }, {
      'day': 1,
      'hour': 7,
      'value': null
    }, {
      'day': 1,
      'hour': 8,
      'value': null
    }, {
      'day': 1,
      'hour': 9,
      'value': null
    }, {
      'day': 1,
      'hour': 10,
      'value': null
    }, {
      'day': 1,
      'hour': 11,
      'value': null
    }, {
      'day': 1,
      'hour': 12,
      'value': null
    }, {
      'day': 1,
      'hour': 13,
      'value': null
    }, {
      'day': 1,
      'hour': 14,
      'value': null
    }, {
      'day': 1,
      'hour': 15,
      'value': null
    }, {
      'day': 1,
      'hour': 16,
      'value': null
    }, {
      'day': 1,
      'hour': 17,
      'value': null
    }, {
      'day': 1,
      'hour': 18,
      'value': null
    }, {
      'day': 1,
      'hour': 19,
      'value': null
    }, {
      'day': 1,
      'hour': 20,
      'value': null
    }, {
      'day': 1,
      'hour': 21,
      'value': null
    }, {
      'day': 1,
      'hour': 22,
      'value': null
    }, {
      'day': 1,
      'hour': 23,
      'value': null
    }, {
      'day': 1,
      'hour': 24,
      'value': null
    }, {
      'day': 2,
      'hour': 1,
      'value': null
    }, {
      'day': 2,
      'hour': 2,
      'value': null
    }, {
      'day': 2,
      'hour': 3,
      'value': null
    }, {
      'day': 2,
      'hour': 4,
      'value': null
    }, {
      'day': 2,
      'hour': 5,
      'value': null
    }, {
      'day': 2,
      'hour': 6,
      'value': null
    }, {
      'day': 2,
      'hour': 7,
      'value': null
    }, {
      'day': 2,
      'hour': 8,
      'value': null
    }, {
      'day': 2,
      'hour': 9,
      'value': null
    }, {
      'day': 2,
      'hour': 10,
      'value': null
    }, {
      'day': 2,
      'hour': 11,
      'value': null
    }, {
      'day': 2,
      'hour': 12,
      'value': null
    }, {
      'day': 2,
      'hour': 13,
      'value': null
    }, {
      'day': 2,
      'hour': 14,
      'value': null
    }, {
      'day': 2,
      'hour': 15,
      'value': null
    }, {
      'day': 2,
      'hour': 16,
      'value': 10
    }, {
      'day': 2,
      'hour': 17,
      'value': null
    }, {
      'day': 2,
      'hour': 18,
      'value': null
    }, {
      'day': 2,
      'hour': 19,
      'value': null
    }, {
      'day': 2,
      'hour': 20,
      'value': null
    }, {
      'day': 2,
      'hour': 21,
      'value': null
    }, {
      'day': 2,
      'hour': 22,
      'value': null
    }, {
      'day': 2,
      'hour': 23,
      'value': null
    }, {
      'day': 2,
      'hour': 24,
      'value': null
    }, {
      'day': 3,
      'hour': 1,
      'value': null
    }, {
      'day': 3,
      'hour': 2,
      'value': null
    }, {
      'day': 3,
      'hour': 3,
      'value': null
    }, {
      'day': 3,
      'hour': 4,
      'value': null
    }, {
      'day': 3,
      'hour': 5,
      'value': null
    }, {
      'day': 3,
      'hour': 6,
      'value': null
    }, {
      'day': 3,
      'hour': 7,
      'value': null
    }, {
      'day': 3,
      'hour': 8,
      'value': null
    }, {
      'day': 3,
      'hour': 9,
      'value': null
    }, {
      'day': 3,
      'hour': 10,
      'value': null
    }, {
      'day': 3,
      'hour': 11,
      'value': 8
    }, {
      'day': 3,
      'hour': 12,
      'value': null
    }, {
      'day': 3,
      'hour': 13,
      'value': null
    }, {
      'day': 3,
      'hour': 14,
      'value': null
    }, {
      'day': 3,
      'hour': 15,
      'value': null
    }, {
      'day': 3,
      'hour': 16,
      'value': null
    }, {
      'day': 3,
      'hour': 17,
      'value': null
    }, {
      'day': 3,
      'hour': 18,
      'value': null
    }, {
      'day': 3,
      'hour': 19,
      'value': null
    }, {
      'day': 3,
      'hour': 20,
      'value': null
    }, {
      'day': 3,
      'hour': 21,
      'value': null
    }, {
      'day': 3,
      'hour': 22,
      'value': null
    }, {
      'day': 3,
      'hour': 23,
      'value': null
    }, {
      'day': 3,
      'hour': 24,
      'value': null
    }, {
      'day': 4,
      'hour': 1,
      'value': null
    }, {
      'day': 4,
      'hour': 2,
      'value': null
    }, {
      'day': 4,
      'hour': 3,
      'value': null
    }, {
      'day': 4,
      'hour': 4,
      'value': null
    }, {
      'day': 4,
      'hour': 5,
      'value': null
    }, {
      'day': 4,
      'hour': 6,
      'value': null
    }, {
      'day': 4,
      'hour': 7,
      'value': null
    }, {
      'day': 4,
      'hour': 8,
      'value': null
    }, {
      'day': 4,
      'hour': 9,
      'value': 11
    }, {
      'day': 4,
      'hour': 10,
      'value': null
    }, {
      'day': 4,
      'hour': 11,
      'value': null
    }, {
      'day': 4,
      'hour': 12,
      'value': null
    }, {
      'day': 4,
      'hour': 13,
      'value': null
    }, {
      'day': 4,
      'hour': 14,
      'value': null
    }, {
      'day': 4,
      'hour': 15,
      'value': null
    }, {
      'day': 4,
      'hour': 16,
      'value': 9
    }, {
      'day': 4,
      'hour': 17,
      'value': null
    }, {
      'day': 4,
      'hour': 18,
      'value': null
    }, {
      'day': 4,
      'hour': 19,
      'value': null
    }, {
      'day': 4,
      'hour': 20,
      'value': null
    }, {
      'day': 4,
      'hour': 21,
      'value': null
    }, {
      'day': 4,
      'hour': 22,
      'value': null
    }, {
      'day': 4,
      'hour': 23,
      'value': null
    }, {
      'day': 4,
      'hour': 24,
      'value': null
    }, {
      'day': 5,
      'hour': 1,
      'value': null
    }, {
      'day': 5,
      'hour': 2,
      'value': null
    }, {
      'day': 5,
      'hour': 3,
      'value': null
    }, {
      'day': 5,
      'hour': 4,
      'value': null
    }, {
      'day': 5,
      'hour': 5,
      'value': null
    }, {
      'day': 5,
      'hour': 6,
      'value': null
    }, {
      'day': 5,
      'hour': 7,
      'value': null
    }, {
      'day': 5,
      'hour': 8,
      'value': null
    }, {
      'day': 5,
      'hour': 9,
      'value': null
    }, {
      'day': 5,
      'hour': 10,
      'value': null
    }, {
      'day': 5,
      'hour': 11,
      'value': null
    }, {
      'day': 5,
      'hour': 12,
      'value': null
    }, {
      'day': 5,
      'hour': 13,
      'value': null
    }, {
      'day': 5,
      'hour': 14,
      'value': null
    }, {
      'day': 5,
      'hour': 15,
      'value': null
    }, {
      'day': 5,
      'hour': 16,
      'value': null
    }, {
      'day': 5,
      'hour': 17,
      'value': null
    }, {
      'day': 5,
      'hour': 18,
      'value': null
    }, {
      'day': 5,
      'hour': 19,
      'value': null
    }, {
      'day': 5,
      'hour': 20,
      'value': null
    }, {
      'day': 5,
      'hour': 21,
      'value': null
    }, {
      'day': 5,
      'hour': 22,
      'value': null
    }, {
      'day': 5,
      'hour': 23,
      'value': null
    }, {
      'day': 5,
      'hour': 24,
      'value': null
    }, {
      'day': 6,
      'hour': 1,
      'value': null
    }, {
      'day': 6,
      'hour': 2,
      'value': null
    }, {
      'day': 6,
      'hour': 3,
      'value': null
    }, {
      'day': 6,
      'hour': 4,
      'value': null
    }, {
      'day': 6,
      'hour': 5,
      'value': null
    }, {
      'day': 6,
      'hour': 6,
      'value': null
    }, {
      'day': 6,
      'hour': 7,
      'value': null
    }, {
      'day': 6,
      'hour': 8,
      'value': null
    }, {
      'day': 6,
      'hour': 9,
      'value': null
    }, {
      'day': 6,
      'hour': 10,
      'value': null
    }, {
      'day': 6,
      'hour': 11,
      'value': null
    }, {
      'day': 6,
      'hour': 12,
      'value': null
    }, {
      'day': 6,
      'hour': 13,
      'value': null
    }, {
      'day': 6,
      'hour': 14,
      'value': null
    }, {
      'day': 6,
      'hour': 15,
      'value': null
    }, {
      'day': 6,
      'hour': 16,
      'value': null
    }, {
      'day': 6,
      'hour': 17,
      'value': null
    }, {
      'day': 6,
      'hour': 18,
      'value': null
    }, {
      'day': 6,
      'hour': 19,
      'value': null
    }, {
      'day': 6,
      'hour': 20,
      'value': null
    }, {
      'day': 6,
      'hour': 21,
      'value': null
    }, {
      'day': 6,
      'hour': 22,
      'value': null
    }, {
      'day': 6,
      'hour': 23,
      'value': null
    }, {
      'day': 6,
      'hour': 24,
      'value': null
    }, {
      'day': 7,
      'hour': 1,
      'value': null
    }, {
      'day': 7,
      'hour': 2,
      'value': null
    }, {
      'day': 7,
      'hour': 3,
      'value': null
    }, {
      'day': 7,
      'hour': 4,
      'value': null
    }, {
      'day': 7,
      'hour': 5,
      'value': null
    }, {
      'day': 7,
      'hour': 6,
      'value': null
    }, {
      'day': 7,
      'hour': 7,
      'value': null
    }, {
      'day': 7,
      'hour': 8,
      'value': null
    }, {
      'day': 7,
      'hour': 9,
      'value': null
    }, {
      'day': 7,
      'hour': 10,
      'value': null
    }, {
      'day': 7,
      'hour': 11,
      'value': null
    }, {
      'day': 7,
      'hour': 12,
      'value': null
    }, {
      'day': 7,
      'hour': 13,
      'value': null
    }, {
      'day': 7,
      'hour': 14,
      'value': null
    }, {
      'day': 7,
      'hour': 15,
      'value': null
    }, {
      'day': 7,
      'hour': 16,
      'value': null
    }, {
      'day': 7,
      'hour': 17,
      'value': null
    }, {
      'day': 7,
      'hour': 18,
      'value': null
    }, {
      'day': 7,
      'hour': 19,
      'value': null
    }, {
      'day': 7,
      'hour': 20,
      'value': null
    }, {
      'day': 7,
      'hour': 21,
      'value': null
    }, {
      'day': 7,
      'hour': 22,
      'value': null
    }, {
      'day': 7,
      'hour': 23,
      'value': null
    }, {
      'day': 7,
      'hour': 24,
      'value': null
    }],
    'avg': [{
      'day': 1,
      'hour': 1,
      'value': null
    }, {
      'day': 1,
      'hour': 2,
      'value': null
    }, {
      'day': 1,
      'hour': 3,
      'value': null
    }, {
      'day': 1,
      'hour': 4,
      'value': null
    }, {
      'day': 1,
      'hour': 5,
      'value': null
    }, {
      'day': 1,
      'hour': 6,
      'value': null
    }, {
      'day': 1,
      'hour': 7,
      'value': null
    }, {
      'day': 1,
      'hour': 8,
      'value': null
    }, {
      'day': 1,
      'hour': 9,
      'value': null
    }, {
      'day': 1,
      'hour': 10,
      'value': null
    }, {
      'day': 1,
      'hour': 11,
      'value': null
    }, {
      'day': 1,
      'hour': 12,
      'value': null
    }, {
      'day': 1,
      'hour': 13,
      'value': null
    }, {
      'day': 1,
      'hour': 14,
      'value': null
    }, {
      'day': 1,
      'hour': 15,
      'value': null
    }, {
      'day': 1,
      'hour': 16,
      'value': null
    }, {
      'day': 1,
      'hour': 17,
      'value': null
    }, {
      'day': 1,
      'hour': 18,
      'value': null
    }, {
      'day': 1,
      'hour': 19,
      'value': null
    }, {
      'day': 1,
      'hour': 20,
      'value': null
    }, {
      'day': 1,
      'hour': 21,
      'value': null
    }, {
      'day': 1,
      'hour': 22,
      'value': null
    }, {
      'day': 1,
      'hour': 23,
      'value': null
    }, {
      'day': 1,
      'hour': 24,
      'value': null
    }, {
      'day': 2,
      'hour': 1,
      'value': null
    }, {
      'day': 2,
      'hour': 2,
      'value': null
    }, {
      'day': 2,
      'hour': 3,
      'value': null
    }, {
      'day': 2,
      'hour': 4,
      'value': null
    }, {
      'day': 2,
      'hour': 5,
      'value': null
    }, {
      'day': 2,
      'hour': 6,
      'value': null
    }, {
      'day': 2,
      'hour': 7,
      'value': null
    }, {
      'day': 2,
      'hour': 8,
      'value': null
    }, {
      'day': 2,
      'hour': 9,
      'value': null
    }, {
      'day': 2,
      'hour': 10,
      'value': null
    }, {
      'day': 2,
      'hour': 11,
      'value': null
    }, {
      'day': 2,
      'hour': 12,
      'value': null
    }, {
      'day': 2,
      'hour': 13,
      'value': null
    }, {
      'day': 2,
      'hour': 14,
      'value': null
    }, {
      'day': 2,
      'hour': 15,
      'value': null
    }, {
      'day': 2,
      'hour': 16,
      'value': 10
    }, {
      'day': 2,
      'hour': 17,
      'value': null
    }, {
      'day': 2,
      'hour': 18,
      'value': null
    }, {
      'day': 2,
      'hour': 19,
      'value': null
    }, {
      'day': 2,
      'hour': 20,
      'value': null
    }, {
      'day': 2,
      'hour': 21,
      'value': null
    }, {
      'day': 2,
      'hour': 22,
      'value': null
    }, {
      'day': 2,
      'hour': 23,
      'value': null
    }, {
      'day': 2,
      'hour': 24,
      'value': null
    }, {
      'day': 3,
      'hour': 1,
      'value': null
    }, {
      'day': 3,
      'hour': 2,
      'value': null
    }, {
      'day': 3,
      'hour': 3,
      'value': null
    }, {
      'day': 3,
      'hour': 4,
      'value': null
    }, {
      'day': 3,
      'hour': 5,
      'value': null
    }, {
      'day': 3,
      'hour': 6,
      'value': null
    }, {
      'day': 3,
      'hour': 7,
      'value': null
    }, {
      'day': 3,
      'hour': 8,
      'value': null
    }, {
      'day': 3,
      'hour': 9,
      'value': null
    }, {
      'day': 3,
      'hour': 10,
      'value': null
    }, {
      'day': 3,
      'hour': 11,
      'value': 8
    }, {
      'day': 3,
      'hour': 12,
      'value': null
    }, {
      'day': 3,
      'hour': 13,
      'value': null
    }, {
      'day': 3,
      'hour': 14,
      'value': null
    }, {
      'day': 3,
      'hour': 15,
      'value': null
    }, {
      'day': 3,
      'hour': 16,
      'value': null
    }, {
      'day': 3,
      'hour': 17,
      'value': null
    }, {
      'day': 3,
      'hour': 18,
      'value': null
    }, {
      'day': 3,
      'hour': 19,
      'value': null
    }, {
      'day': 3,
      'hour': 20,
      'value': null
    }, {
      'day': 3,
      'hour': 21,
      'value': null
    }, {
      'day': 3,
      'hour': 22,
      'value': null
    }, {
      'day': 3,
      'hour': 23,
      'value': null
    }, {
      'day': 3,
      'hour': 24,
      'value': null
    }, {
      'day': 4,
      'hour': 1,
      'value': null
    }, {
      'day': 4,
      'hour': 2,
      'value': null
    }, {
      'day': 4,
      'hour': 3,
      'value': null
    }, {
      'day': 4,
      'hour': 4,
      'value': null
    }, {
      'day': 4,
      'hour': 5,
      'value': null
    }, {
      'day': 4,
      'hour': 6,
      'value': null
    }, {
      'day': 4,
      'hour': 7,
      'value': null
    }, {
      'day': 4,
      'hour': 8,
      'value': null
    }, {
      'day': 4,
      'hour': 9,
      'value': 11
    }, {
      'day': 4,
      'hour': 10,
      'value': null
    }, {
      'day': 4,
      'hour': 11,
      'value': null
    }, {
      'day': 4,
      'hour': 12,
      'value': null
    }, {
      'day': 4,
      'hour': 13,
      'value': null
    }, {
      'day': 4,
      'hour': 14,
      'value': null
    }, {
      'day': 4,
      'hour': 15,
      'value': null
    }, {
      'day': 4,
      'hour': 16,
      'value': 9
    }, {
      'day': 4,
      'hour': 17,
      'value': null
    }, {
      'day': 4,
      'hour': 18,
      'value': null
    }, {
      'day': 4,
      'hour': 19,
      'value': null
    }, {
      'day': 4,
      'hour': 20,
      'value': null
    }, {
      'day': 4,
      'hour': 21,
      'value': null
    }, {
      'day': 4,
      'hour': 22,
      'value': null
    }, {
      'day': 4,
      'hour': 23,
      'value': null
    }, {
      'day': 4,
      'hour': 24,
      'value': null
    }, {
      'day': 5,
      'hour': 1,
      'value': null
    }, {
      'day': 5,
      'hour': 2,
      'value': null
    }, {
      'day': 5,
      'hour': 3,
      'value': null
    }, {
      'day': 5,
      'hour': 4,
      'value': null
    }, {
      'day': 5,
      'hour': 5,
      'value': null
    }, {
      'day': 5,
      'hour': 6,
      'value': null
    }, {
      'day': 5,
      'hour': 7,
      'value': null
    }, {
      'day': 5,
      'hour': 8,
      'value': null
    }, {
      'day': 5,
      'hour': 9,
      'value': null
    }, {
      'day': 5,
      'hour': 10,
      'value': null
    }, {
      'day': 5,
      'hour': 11,
      'value': null
    }, {
      'day': 5,
      'hour': 12,
      'value': null
    }, {
      'day': 5,
      'hour': 13,
      'value': null
    }, {
      'day': 5,
      'hour': 14,
      'value': null
    }, {
      'day': 5,
      'hour': 15,
      'value': null
    }, {
      'day': 5,
      'hour': 16,
      'value': null
    }, {
      'day': 5,
      'hour': 17,
      'value': null
    }, {
      'day': 5,
      'hour': 18,
      'value': null
    }, {
      'day': 5,
      'hour': 19,
      'value': null
    }, {
      'day': 5,
      'hour': 20,
      'value': null
    }, {
      'day': 5,
      'hour': 21,
      'value': null
    }, {
      'day': 5,
      'hour': 22,
      'value': null
    }, {
      'day': 5,
      'hour': 23,
      'value': null
    }, {
      'day': 5,
      'hour': 24,
      'value': null
    }, {
      'day': 6,
      'hour': 1,
      'value': null
    }, {
      'day': 6,
      'hour': 2,
      'value': null
    }, {
      'day': 6,
      'hour': 3,
      'value': null
    }, {
      'day': 6,
      'hour': 4,
      'value': null
    }, {
      'day': 6,
      'hour': 5,
      'value': null
    }, {
      'day': 6,
      'hour': 6,
      'value': null
    }, {
      'day': 6,
      'hour': 7,
      'value': null
    }, {
      'day': 6,
      'hour': 8,
      'value': null
    }, {
      'day': 6,
      'hour': 9,
      'value': null
    }, {
      'day': 6,
      'hour': 10,
      'value': null
    }, {
      'day': 6,
      'hour': 11,
      'value': null
    }, {
      'day': 6,
      'hour': 12,
      'value': null
    }, {
      'day': 6,
      'hour': 13,
      'value': null
    }, {
      'day': 6,
      'hour': 14,
      'value': null
    }, {
      'day': 6,
      'hour': 15,
      'value': null
    }, {
      'day': 6,
      'hour': 16,
      'value': null
    }, {
      'day': 6,
      'hour': 17,
      'value': null
    }, {
      'day': 6,
      'hour': 18,
      'value': null
    }, {
      'day': 6,
      'hour': 19,
      'value': null
    }, {
      'day': 6,
      'hour': 20,
      'value': null
    }, {
      'day': 6,
      'hour': 21,
      'value': null
    }, {
      'day': 6,
      'hour': 22,
      'value': null
    }, {
      'day': 6,
      'hour': 23,
      'value': null
    }, {
      'day': 6,
      'hour': 24,
      'value': null
    }, {
      'day': 7,
      'hour': 1,
      'value': null
    }, {
      'day': 7,
      'hour': 2,
      'value': null
    }, {
      'day': 7,
      'hour': 3,
      'value': null
    }, {
      'day': 7,
      'hour': 4,
      'value': null
    }, {
      'day': 7,
      'hour': 5,
      'value': null
    }, {
      'day': 7,
      'hour': 6,
      'value': null
    }, {
      'day': 7,
      'hour': 7,
      'value': null
    }, {
      'day': 7,
      'hour': 8,
      'value': null
    }, {
      'day': 7,
      'hour': 9,
      'value': null
    }, {
      'day': 7,
      'hour': 10,
      'value': null
    }, {
      'day': 7,
      'hour': 11,
      'value': null
    }, {
      'day': 7,
      'hour': 12,
      'value': null
    }, {
      'day': 7,
      'hour': 13,
      'value': null
    }, {
      'day': 7,
      'hour': 14,
      'value': null
    }, {
      'day': 7,
      'hour': 15,
      'value': null
    }, {
      'day': 7,
      'hour': 16,
      'value': null
    }, {
      'day': 7,
      'hour': 17,
      'value': null
    }, {
      'day': 7,
      'hour': 18,
      'value': null
    }, {
      'day': 7,
      'hour': 19,
      'value': null
    }, {
      'day': 7,
      'hour': 20,
      'value': null
    }, {
      'day': 7,
      'hour': 21,
      'value': null
    }, {
      'day': 7,
      'hour': 22,
      'value': null
    }, {
      'day': 7,
      'hour': 23,
      'value': null
    }, {
      'day': 7,
      'hour': 24,
      'value': null
    }],
    'avgDays': [{
      'day': 1,
      'hour': 1,
      'value': null
    }, {
      'day': 1,
      'hour': 2,
      'value': null
    }, {
      'day': 1,
      'hour': 3,
      'value': null
    }, {
      'day': 1,
      'hour': 4,
      'value': null
    }, {
      'day': 1,
      'hour': 5,
      'value': null
    }, {
      'day': 1,
      'hour': 6,
      'value': null
    }, {
      'day': 1,
      'hour': 7,
      'value': null
    }, {
      'day': 1,
      'hour': 8,
      'value': null
    }, {
      'day': 1,
      'hour': 9,
      'value': null
    }, {
      'day': 1,
      'hour': 10,
      'value': null
    }, {
      'day': 1,
      'hour': 11,
      'value': null
    }, {
      'day': 1,
      'hour': 12,
      'value': null
    }, {
      'day': 1,
      'hour': 13,
      'value': null
    }, {
      'day': 1,
      'hour': 14,
      'value': null
    }, {
      'day': 1,
      'hour': 15,
      'value': null
    }, {
      'day': 1,
      'hour': 16,
      'value': null
    }, {
      'day': 1,
      'hour': 17,
      'value': null
    }, {
      'day': 1,
      'hour': 18,
      'value': null
    }, {
      'day': 1,
      'hour': 19,
      'value': null
    }, {
      'day': 1,
      'hour': 20,
      'value': null
    }, {
      'day': 1,
      'hour': 21,
      'value': null
    }, {
      'day': 1,
      'hour': 22,
      'value': null
    }, {
      'day': 1,
      'hour': 23,
      'value': null
    }, {
      'day': 1,
      'hour': 24,
      'value': null
    }, {
      'day': 2,
      'hour': 1,
      'value': null
    }, {
      'day': 2,
      'hour': 2,
      'value': null
    }, {
      'day': 2,
      'hour': 3,
      'value': null
    }, {
      'day': 2,
      'hour': 4,
      'value': null
    }, {
      'day': 2,
      'hour': 5,
      'value': null
    }, {
      'day': 2,
      'hour': 6,
      'value': null
    }, {
      'day': 2,
      'hour': 7,
      'value': null
    }, {
      'day': 2,
      'hour': 8,
      'value': null
    }, {
      'day': 2,
      'hour': 9,
      'value': null
    }, {
      'day': 2,
      'hour': 10,
      'value': null
    }, {
      'day': 2,
      'hour': 11,
      'value': null
    }, {
      'day': 2,
      'hour': 12,
      'value': null
    }, {
      'day': 2,
      'hour': 13,
      'value': null
    }, {
      'day': 2,
      'hour': 14,
      'value': null
    }, {
      'day': 2,
      'hour': 15,
      'value': null
    }, {
      'day': 2,
      'hour': 16,
      'value': 10
    }, {
      'day': 2,
      'hour': 17,
      'value': null
    }, {
      'day': 2,
      'hour': 18,
      'value': null
    }, {
      'day': 2,
      'hour': 19,
      'value': null
    }, {
      'day': 2,
      'hour': 20,
      'value': null
    }, {
      'day': 2,
      'hour': 21,
      'value': null
    }, {
      'day': 2,
      'hour': 22,
      'value': null
    }, {
      'day': 2,
      'hour': 23,
      'value': null
    }, {
      'day': 2,
      'hour': 24,
      'value': null
    }, {
      'day': 3,
      'hour': 1,
      'value': null
    }, {
      'day': 3,
      'hour': 2,
      'value': null
    }, {
      'day': 3,
      'hour': 3,
      'value': null
    }, {
      'day': 3,
      'hour': 4,
      'value': null
    }, {
      'day': 3,
      'hour': 5,
      'value': null
    }, {
      'day': 3,
      'hour': 6,
      'value': null
    }, {
      'day': 3,
      'hour': 7,
      'value': null
    }, {
      'day': 3,
      'hour': 8,
      'value': null
    }, {
      'day': 3,
      'hour': 9,
      'value': null
    }, {
      'day': 3,
      'hour': 10,
      'value': null
    }, {
      'day': 3,
      'hour': 11,
      'value': 8
    }, {
      'day': 3,
      'hour': 12,
      'value': null
    }, {
      'day': 3,
      'hour': 13,
      'value': null
    }, {
      'day': 3,
      'hour': 14,
      'value': null
    }, {
      'day': 3,
      'hour': 15,
      'value': null
    }, {
      'day': 3,
      'hour': 16,
      'value': null
    }, {
      'day': 3,
      'hour': 17,
      'value': null
    }, {
      'day': 3,
      'hour': 18,
      'value': null
    }, {
      'day': 3,
      'hour': 19,
      'value': null
    }, {
      'day': 3,
      'hour': 20,
      'value': null
    }, {
      'day': 3,
      'hour': 21,
      'value': null
    }, {
      'day': 3,
      'hour': 22,
      'value': null
    }, {
      'day': 3,
      'hour': 23,
      'value': null
    }, {
      'day': 3,
      'hour': 24,
      'value': null
    }, {
      'day': 4,
      'hour': 1,
      'value': null
    }, {
      'day': 4,
      'hour': 2,
      'value': null
    }, {
      'day': 4,
      'hour': 3,
      'value': null
    }, {
      'day': 4,
      'hour': 4,
      'value': null
    }, {
      'day': 4,
      'hour': 5,
      'value': null
    }, {
      'day': 4,
      'hour': 6,
      'value': null
    }, {
      'day': 4,
      'hour': 7,
      'value': null
    }, {
      'day': 4,
      'hour': 8,
      'value': null
    }, {
      'day': 4,
      'hour': 9,
      'value': 11
    }, {
      'day': 4,
      'hour': 10,
      'value': null
    }, {
      'day': 4,
      'hour': 11,
      'value': null
    }, {
      'day': 4,
      'hour': 12,
      'value': null
    }, {
      'day': 4,
      'hour': 13,
      'value': null
    }, {
      'day': 4,
      'hour': 14,
      'value': null
    }, {
      'day': 4,
      'hour': 15,
      'value': null
    }, {
      'day': 4,
      'hour': 16,
      'value': 9
    }, {
      'day': 4,
      'hour': 17,
      'value': null
    }, {
      'day': 4,
      'hour': 18,
      'value': null
    }, {
      'day': 4,
      'hour': 19,
      'value': null
    }, {
      'day': 4,
      'hour': 20,
      'value': null
    }, {
      'day': 4,
      'hour': 21,
      'value': null
    }, {
      'day': 4,
      'hour': 22,
      'value': null
    }, {
      'day': 4,
      'hour': 23,
      'value': null
    }, {
      'day': 4,
      'hour': 24,
      'value': null
    }, {
      'day': 5,
      'hour': 1,
      'value': null
    }, {
      'day': 5,
      'hour': 2,
      'value': null
    }, {
      'day': 5,
      'hour': 3,
      'value': null
    }, {
      'day': 5,
      'hour': 4,
      'value': null
    }, {
      'day': 5,
      'hour': 5,
      'value': null
    }, {
      'day': 5,
      'hour': 6,
      'value': null
    }, {
      'day': 5,
      'hour': 7,
      'value': null
    }, {
      'day': 5,
      'hour': 8,
      'value': null
    }, {
      'day': 5,
      'hour': 9,
      'value': null
    }, {
      'day': 5,
      'hour': 10,
      'value': null
    }, {
      'day': 5,
      'hour': 11,
      'value': null
    }, {
      'day': 5,
      'hour': 12,
      'value': null
    }, {
      'day': 5,
      'hour': 13,
      'value': null
    }, {
      'day': 5,
      'hour': 14,
      'value': null
    }, {
      'day': 5,
      'hour': 15,
      'value': null
    }, {
      'day': 5,
      'hour': 16,
      'value': null
    }, {
      'day': 5,
      'hour': 17,
      'value': null
    }, {
      'day': 5,
      'hour': 18,
      'value': null
    }, {
      'day': 5,
      'hour': 19,
      'value': null
    }, {
      'day': 5,
      'hour': 20,
      'value': null
    }, {
      'day': 5,
      'hour': 21,
      'value': null
    }, {
      'day': 5,
      'hour': 22,
      'value': null
    }, {
      'day': 5,
      'hour': 23,
      'value': null
    }, {
      'day': 5,
      'hour': 24,
      'value': null
    }, {
      'day': 6,
      'hour': 1,
      'value': null
    }, {
      'day': 6,
      'hour': 2,
      'value': null
    }, {
      'day': 6,
      'hour': 3,
      'value': null
    }, {
      'day': 6,
      'hour': 4,
      'value': null
    }, {
      'day': 6,
      'hour': 5,
      'value': null
    }, {
      'day': 6,
      'hour': 6,
      'value': null
    }, {
      'day': 6,
      'hour': 7,
      'value': null
    }, {
      'day': 6,
      'hour': 8,
      'value': null
    }, {
      'day': 6,
      'hour': 9,
      'value': null
    }, {
      'day': 6,
      'hour': 10,
      'value': null
    }, {
      'day': 6,
      'hour': 11,
      'value': null
    }, {
      'day': 6,
      'hour': 12,
      'value': null
    }, {
      'day': 6,
      'hour': 13,
      'value': null
    }, {
      'day': 6,
      'hour': 14,
      'value': null
    }, {
      'day': 6,
      'hour': 15,
      'value': null
    }, {
      'day': 6,
      'hour': 16,
      'value': null
    }, {
      'day': 6,
      'hour': 17,
      'value': null
    }, {
      'day': 6,
      'hour': 18,
      'value': null
    }, {
      'day': 6,
      'hour': 19,
      'value': null
    }, {
      'day': 6,
      'hour': 20,
      'value': null
    }, {
      'day': 6,
      'hour': 21,
      'value': null
    }, {
      'day': 6,
      'hour': 22,
      'value': null
    }, {
      'day': 6,
      'hour': 23,
      'value': null
    }, {
      'day': 6,
      'hour': 24,
      'value': null
    }, {
      'day': 7,
      'hour': 1,
      'value': null
    }, {
      'day': 7,
      'hour': 2,
      'value': null
    }, {
      'day': 7,
      'hour': 3,
      'value': null
    }, {
      'day': 7,
      'hour': 4,
      'value': null
    }, {
      'day': 7,
      'hour': 5,
      'value': null
    }, {
      'day': 7,
      'hour': 6,
      'value': null
    }, {
      'day': 7,
      'hour': 7,
      'value': null
    }, {
      'day': 7,
      'hour': 8,
      'value': null
    }, {
      'day': 7,
      'hour': 9,
      'value': null
    }, {
      'day': 7,
      'hour': 10,
      'value': null
    }, {
      'day': 7,
      'hour': 11,
      'value': null
    }, {
      'day': 7,
      'hour': 12,
      'value': null
    }, {
      'day': 7,
      'hour': 13,
      'value': null
    }, {
      'day': 7,
      'hour': 14,
      'value': null
    }, {
      'day': 7,
      'hour': 15,
      'value': null
    }, {
      'day': 7,
      'hour': 16,
      'value': null
    }, {
      'day': 7,
      'hour': 17,
      'value': null
    }, {
      'day': 7,
      'hour': 18,
      'value': null
    }, {
      'day': 7,
      'hour': 19,
      'value': null
    }, {
      'day': 7,
      'hour': 20,
      'value': null
    }, {
      'day': 7,
      'hour': 21,
      'value': null
    }, {
      'day': 7,
      'hour': 22,
      'value': null
    }, {
      'day': 7,
      'hour': 23,
      'value': null
    }, {
      'day': 7,
      'hour': 24,
      'value': null
    }],
    'options': [{
      'title': 'Avg Counts',
      'val': 'avg',
      'data': [{
        'day': 1,
        'hour': 1,
        'value': null
      }, {
        'day': 1,
        'hour': 2,
        'value': null
      }, {
        'day': 1,
        'hour': 3,
        'value': null
      }, {
        'day': 1,
        'hour': 4,
        'value': null
      }, {
        'day': 1,
        'hour': 5,
        'value': null
      }, {
        'day': 1,
        'hour': 6,
        'value': null
      }, {
        'day': 1,
        'hour': 7,
        'value': null
      }, {
        'day': 1,
        'hour': 8,
        'value': null
      }, {
        'day': 1,
        'hour': 9,
        'value': null
      }, {
        'day': 1,
        'hour': 10,
        'value': null
      }, {
        'day': 1,
        'hour': 11,
        'value': null
      }, {
        'day': 1,
        'hour': 12,
        'value': null
      }, {
        'day': 1,
        'hour': 13,
        'value': null
      }, {
        'day': 1,
        'hour': 14,
        'value': null
      }, {
        'day': 1,
        'hour': 15,
        'value': null
      }, {
        'day': 1,
        'hour': 16,
        'value': null
      }, {
        'day': 1,
        'hour': 17,
        'value': null
      }, {
        'day': 1,
        'hour': 18,
        'value': null
      }, {
        'day': 1,
        'hour': 19,
        'value': null
      }, {
        'day': 1,
        'hour': 20,
        'value': null
      }, {
        'day': 1,
        'hour': 21,
        'value': null
      }, {
        'day': 1,
        'hour': 22,
        'value': null
      }, {
        'day': 1,
        'hour': 23,
        'value': null
      }, {
        'day': 1,
        'hour': 24,
        'value': null
      }, {
        'day': 2,
        'hour': 1,
        'value': null
      }, {
        'day': 2,
        'hour': 2,
        'value': null
      }, {
        'day': 2,
        'hour': 3,
        'value': null
      }, {
        'day': 2,
        'hour': 4,
        'value': null
      }, {
        'day': 2,
        'hour': 5,
        'value': null
      }, {
        'day': 2,
        'hour': 6,
        'value': null
      }, {
        'day': 2,
        'hour': 7,
        'value': null
      }, {
        'day': 2,
        'hour': 8,
        'value': null
      }, {
        'day': 2,
        'hour': 9,
        'value': null
      }, {
        'day': 2,
        'hour': 10,
        'value': null
      }, {
        'day': 2,
        'hour': 11,
        'value': null
      }, {
        'day': 2,
        'hour': 12,
        'value': null
      }, {
        'day': 2,
        'hour': 13,
        'value': null
      }, {
        'day': 2,
        'hour': 14,
        'value': null
      }, {
        'day': 2,
        'hour': 15,
        'value': null
      }, {
        'day': 2,
        'hour': 16,
        'value': 10
      }, {
        'day': 2,
        'hour': 17,
        'value': null
      }, {
        'day': 2,
        'hour': 18,
        'value': null
      }, {
        'day': 2,
        'hour': 19,
        'value': null
      }, {
        'day': 2,
        'hour': 20,
        'value': null
      }, {
        'day': 2,
        'hour': 21,
        'value': null
      }, {
        'day': 2,
        'hour': 22,
        'value': null
      }, {
        'day': 2,
        'hour': 23,
        'value': null
      }, {
        'day': 2,
        'hour': 24,
        'value': null
      }, {
        'day': 3,
        'hour': 1,
        'value': null
      }, {
        'day': 3,
        'hour': 2,
        'value': null
      }, {
        'day': 3,
        'hour': 3,
        'value': null
      }, {
        'day': 3,
        'hour': 4,
        'value': null
      }, {
        'day': 3,
        'hour': 5,
        'value': null
      }, {
        'day': 3,
        'hour': 6,
        'value': null
      }, {
        'day': 3,
        'hour': 7,
        'value': null
      }, {
        'day': 3,
        'hour': 8,
        'value': null
      }, {
        'day': 3,
        'hour': 9,
        'value': null
      }, {
        'day': 3,
        'hour': 10,
        'value': null
      }, {
        'day': 3,
        'hour': 11,
        'value': 8
      }, {
        'day': 3,
        'hour': 12,
        'value': null
      }, {
        'day': 3,
        'hour': 13,
        'value': null
      }, {
        'day': 3,
        'hour': 14,
        'value': null
      }, {
        'day': 3,
        'hour': 15,
        'value': null
      }, {
        'day': 3,
        'hour': 16,
        'value': null
      }, {
        'day': 3,
        'hour': 17,
        'value': null
      }, {
        'day': 3,
        'hour': 18,
        'value': null
      }, {
        'day': 3,
        'hour': 19,
        'value': null
      }, {
        'day': 3,
        'hour': 20,
        'value': null
      }, {
        'day': 3,
        'hour': 21,
        'value': null
      }, {
        'day': 3,
        'hour': 22,
        'value': null
      }, {
        'day': 3,
        'hour': 23,
        'value': null
      }, {
        'day': 3,
        'hour': 24,
        'value': null
      }, {
        'day': 4,
        'hour': 1,
        'value': null
      }, {
        'day': 4,
        'hour': 2,
        'value': null
      }, {
        'day': 4,
        'hour': 3,
        'value': null
      }, {
        'day': 4,
        'hour': 4,
        'value': null
      }, {
        'day': 4,
        'hour': 5,
        'value': null
      }, {
        'day': 4,
        'hour': 6,
        'value': null
      }, {
        'day': 4,
        'hour': 7,
        'value': null
      }, {
        'day': 4,
        'hour': 8,
        'value': null
      }, {
        'day': 4,
        'hour': 9,
        'value': 11
      }, {
        'day': 4,
        'hour': 10,
        'value': null
      }, {
        'day': 4,
        'hour': 11,
        'value': null
      }, {
        'day': 4,
        'hour': 12,
        'value': null
      }, {
        'day': 4,
        'hour': 13,
        'value': null
      }, {
        'day': 4,
        'hour': 14,
        'value': null
      }, {
        'day': 4,
        'hour': 15,
        'value': null
      }, {
        'day': 4,
        'hour': 16,
        'value': 9
      }, {
        'day': 4,
        'hour': 17,
        'value': null
      }, {
        'day': 4,
        'hour': 18,
        'value': null
      }, {
        'day': 4,
        'hour': 19,
        'value': null
      }, {
        'day': 4,
        'hour': 20,
        'value': null
      }, {
        'day': 4,
        'hour': 21,
        'value': null
      }, {
        'day': 4,
        'hour': 22,
        'value': null
      }, {
        'day': 4,
        'hour': 23,
        'value': null
      }, {
        'day': 4,
        'hour': 24,
        'value': null
      }, {
        'day': 5,
        'hour': 1,
        'value': null
      }, {
        'day': 5,
        'hour': 2,
        'value': null
      }, {
        'day': 5,
        'hour': 3,
        'value': null
      }, {
        'day': 5,
        'hour': 4,
        'value': null
      }, {
        'day': 5,
        'hour': 5,
        'value': null
      }, {
        'day': 5,
        'hour': 6,
        'value': null
      }, {
        'day': 5,
        'hour': 7,
        'value': null
      }, {
        'day': 5,
        'hour': 8,
        'value': null
      }, {
        'day': 5,
        'hour': 9,
        'value': null
      }, {
        'day': 5,
        'hour': 10,
        'value': null
      }, {
        'day': 5,
        'hour': 11,
        'value': null
      }, {
        'day': 5,
        'hour': 12,
        'value': null
      }, {
        'day': 5,
        'hour': 13,
        'value': null
      }, {
        'day': 5,
        'hour': 14,
        'value': null
      }, {
        'day': 5,
        'hour': 15,
        'value': null
      }, {
        'day': 5,
        'hour': 16,
        'value': null
      }, {
        'day': 5,
        'hour': 17,
        'value': null
      }, {
        'day': 5,
        'hour': 18,
        'value': null
      }, {
        'day': 5,
        'hour': 19,
        'value': null
      }, {
        'day': 5,
        'hour': 20,
        'value': null
      }, {
        'day': 5,
        'hour': 21,
        'value': null
      }, {
        'day': 5,
        'hour': 22,
        'value': null
      }, {
        'day': 5,
        'hour': 23,
        'value': null
      }, {
        'day': 5,
        'hour': 24,
        'value': null
      }, {
        'day': 6,
        'hour': 1,
        'value': null
      }, {
        'day': 6,
        'hour': 2,
        'value': null
      }, {
        'day': 6,
        'hour': 3,
        'value': null
      }, {
        'day': 6,
        'hour': 4,
        'value': null
      }, {
        'day': 6,
        'hour': 5,
        'value': null
      }, {
        'day': 6,
        'hour': 6,
        'value': null
      }, {
        'day': 6,
        'hour': 7,
        'value': null
      }, {
        'day': 6,
        'hour': 8,
        'value': null
      }, {
        'day': 6,
        'hour': 9,
        'value': null
      }, {
        'day': 6,
        'hour': 10,
        'value': null
      }, {
        'day': 6,
        'hour': 11,
        'value': null
      }, {
        'day': 6,
        'hour': 12,
        'value': null
      }, {
        'day': 6,
        'hour': 13,
        'value': null
      }, {
        'day': 6,
        'hour': 14,
        'value': null
      }, {
        'day': 6,
        'hour': 15,
        'value': null
      }, {
        'day': 6,
        'hour': 16,
        'value': null
      }, {
        'day': 6,
        'hour': 17,
        'value': null
      }, {
        'day': 6,
        'hour': 18,
        'value': null
      }, {
        'day': 6,
        'hour': 19,
        'value': null
      }, {
        'day': 6,
        'hour': 20,
        'value': null
      }, {
        'day': 6,
        'hour': 21,
        'value': null
      }, {
        'day': 6,
        'hour': 22,
        'value': null
      }, {
        'day': 6,
        'hour': 23,
        'value': null
      }, {
        'day': 6,
        'hour': 24,
        'value': null
      }, {
        'day': 7,
        'hour': 1,
        'value': null
      }, {
        'day': 7,
        'hour': 2,
        'value': null
      }, {
        'day': 7,
        'hour': 3,
        'value': null
      }, {
        'day': 7,
        'hour': 4,
        'value': null
      }, {
        'day': 7,
        'hour': 5,
        'value': null
      }, {
        'day': 7,
        'hour': 6,
        'value': null
      }, {
        'day': 7,
        'hour': 7,
        'value': null
      }, {
        'day': 7,
        'hour': 8,
        'value': null
      }, {
        'day': 7,
        'hour': 9,
        'value': null
      }, {
        'day': 7,
        'hour': 10,
        'value': null
      }, {
        'day': 7,
        'hour': 11,
        'value': null
      }, {
        'day': 7,
        'hour': 12,
        'value': null
      }, {
        'day': 7,
        'hour': 13,
        'value': null
      }, {
        'day': 7,
        'hour': 14,
        'value': null
      }, {
        'day': 7,
        'hour': 15,
        'value': null
      }, {
        'day': 7,
        'hour': 16,
        'value': null
      }, {
        'day': 7,
        'hour': 17,
        'value': null
      }, {
        'day': 7,
        'hour': 18,
        'value': null
      }, {
        'day': 7,
        'hour': 19,
        'value': null
      }, {
        'day': 7,
        'hour': 20,
        'value': null
      }, {
        'day': 7,
        'hour': 21,
        'value': null
      }, {
        'day': 7,
        'hour': 22,
        'value': null
      }, {
        'day': 7,
        'hour': 23,
        'value': null
      }, {
        'day': 7,
        'hour': 24,
        'value': null
      }]
    }, {
      'title': 'Avg Days',
      'val': 'avgDays',
      'data': [{
        'day': 1,
        'hour': 1,
        'value': null
      }, {
        'day': 1,
        'hour': 2,
        'value': null
      }, {
        'day': 1,
        'hour': 3,
        'value': null
      }, {
        'day': 1,
        'hour': 4,
        'value': null
      }, {
        'day': 1,
        'hour': 5,
        'value': null
      }, {
        'day': 1,
        'hour': 6,
        'value': null
      }, {
        'day': 1,
        'hour': 7,
        'value': null
      }, {
        'day': 1,
        'hour': 8,
        'value': null
      }, {
        'day': 1,
        'hour': 9,
        'value': null
      }, {
        'day': 1,
        'hour': 10,
        'value': null
      }, {
        'day': 1,
        'hour': 11,
        'value': null
      }, {
        'day': 1,
        'hour': 12,
        'value': null
      }, {
        'day': 1,
        'hour': 13,
        'value': null
      }, {
        'day': 1,
        'hour': 14,
        'value': null
      }, {
        'day': 1,
        'hour': 15,
        'value': null
      }, {
        'day': 1,
        'hour': 16,
        'value': null
      }, {
        'day': 1,
        'hour': 17,
        'value': null
      }, {
        'day': 1,
        'hour': 18,
        'value': null
      }, {
        'day': 1,
        'hour': 19,
        'value': null
      }, {
        'day': 1,
        'hour': 20,
        'value': null
      }, {
        'day': 1,
        'hour': 21,
        'value': null
      }, {
        'day': 1,
        'hour': 22,
        'value': null
      }, {
        'day': 1,
        'hour': 23,
        'value': null
      }, {
        'day': 1,
        'hour': 24,
        'value': null
      }, {
        'day': 2,
        'hour': 1,
        'value': null
      }, {
        'day': 2,
        'hour': 2,
        'value': null
      }, {
        'day': 2,
        'hour': 3,
        'value': null
      }, {
        'day': 2,
        'hour': 4,
        'value': null
      }, {
        'day': 2,
        'hour': 5,
        'value': null
      }, {
        'day': 2,
        'hour': 6,
        'value': null
      }, {
        'day': 2,
        'hour': 7,
        'value': null
      }, {
        'day': 2,
        'hour': 8,
        'value': null
      }, {
        'day': 2,
        'hour': 9,
        'value': null
      }, {
        'day': 2,
        'hour': 10,
        'value': null
      }, {
        'day': 2,
        'hour': 11,
        'value': null
      }, {
        'day': 2,
        'hour': 12,
        'value': null
      }, {
        'day': 2,
        'hour': 13,
        'value': null
      }, {
        'day': 2,
        'hour': 14,
        'value': null
      }, {
        'day': 2,
        'hour': 15,
        'value': null
      }, {
        'day': 2,
        'hour': 16,
        'value': 10
      }, {
        'day': 2,
        'hour': 17,
        'value': null
      }, {
        'day': 2,
        'hour': 18,
        'value': null
      }, {
        'day': 2,
        'hour': 19,
        'value': null
      }, {
        'day': 2,
        'hour': 20,
        'value': null
      }, {
        'day': 2,
        'hour': 21,
        'value': null
      }, {
        'day': 2,
        'hour': 22,
        'value': null
      }, {
        'day': 2,
        'hour': 23,
        'value': null
      }, {
        'day': 2,
        'hour': 24,
        'value': null
      }, {
        'day': 3,
        'hour': 1,
        'value': null
      }, {
        'day': 3,
        'hour': 2,
        'value': null
      }, {
        'day': 3,
        'hour': 3,
        'value': null
      }, {
        'day': 3,
        'hour': 4,
        'value': null
      }, {
        'day': 3,
        'hour': 5,
        'value': null
      }, {
        'day': 3,
        'hour': 6,
        'value': null
      }, {
        'day': 3,
        'hour': 7,
        'value': null
      }, {
        'day': 3,
        'hour': 8,
        'value': null
      }, {
        'day': 3,
        'hour': 9,
        'value': null
      }, {
        'day': 3,
        'hour': 10,
        'value': null
      }, {
        'day': 3,
        'hour': 11,
        'value': 8
      }, {
        'day': 3,
        'hour': 12,
        'value': null
      }, {
        'day': 3,
        'hour': 13,
        'value': null
      }, {
        'day': 3,
        'hour': 14,
        'value': null
      }, {
        'day': 3,
        'hour': 15,
        'value': null
      }, {
        'day': 3,
        'hour': 16,
        'value': null
      }, {
        'day': 3,
        'hour': 17,
        'value': null
      }, {
        'day': 3,
        'hour': 18,
        'value': null
      }, {
        'day': 3,
        'hour': 19,
        'value': null
      }, {
        'day': 3,
        'hour': 20,
        'value': null
      }, {
        'day': 3,
        'hour': 21,
        'value': null
      }, {
        'day': 3,
        'hour': 22,
        'value': null
      }, {
        'day': 3,
        'hour': 23,
        'value': null
      }, {
        'day': 3,
        'hour': 24,
        'value': null
      }, {
        'day': 4,
        'hour': 1,
        'value': null
      }, {
        'day': 4,
        'hour': 2,
        'value': null
      }, {
        'day': 4,
        'hour': 3,
        'value': null
      }, {
        'day': 4,
        'hour': 4,
        'value': null
      }, {
        'day': 4,
        'hour': 5,
        'value': null
      }, {
        'day': 4,
        'hour': 6,
        'value': null
      }, {
        'day': 4,
        'hour': 7,
        'value': null
      }, {
        'day': 4,
        'hour': 8,
        'value': null
      }, {
        'day': 4,
        'hour': 9,
        'value': 11
      }, {
        'day': 4,
        'hour': 10,
        'value': null
      }, {
        'day': 4,
        'hour': 11,
        'value': null
      }, {
        'day': 4,
        'hour': 12,
        'value': null
      }, {
        'day': 4,
        'hour': 13,
        'value': null
      }, {
        'day': 4,
        'hour': 14,
        'value': null
      }, {
        'day': 4,
        'hour': 15,
        'value': null
      }, {
        'day': 4,
        'hour': 16,
        'value': 9
      }, {
        'day': 4,
        'hour': 17,
        'value': null
      }, {
        'day': 4,
        'hour': 18,
        'value': null
      }, {
        'day': 4,
        'hour': 19,
        'value': null
      }, {
        'day': 4,
        'hour': 20,
        'value': null
      }, {
        'day': 4,
        'hour': 21,
        'value': null
      }, {
        'day': 4,
        'hour': 22,
        'value': null
      }, {
        'day': 4,
        'hour': 23,
        'value': null
      }, {
        'day': 4,
        'hour': 24,
        'value': null
      }, {
        'day': 5,
        'hour': 1,
        'value': null
      }, {
        'day': 5,
        'hour': 2,
        'value': null
      }, {
        'day': 5,
        'hour': 3,
        'value': null
      }, {
        'day': 5,
        'hour': 4,
        'value': null
      }, {
        'day': 5,
        'hour': 5,
        'value': null
      }, {
        'day': 5,
        'hour': 6,
        'value': null
      }, {
        'day': 5,
        'hour': 7,
        'value': null
      }, {
        'day': 5,
        'hour': 8,
        'value': null
      }, {
        'day': 5,
        'hour': 9,
        'value': null
      }, {
        'day': 5,
        'hour': 10,
        'value': null
      }, {
        'day': 5,
        'hour': 11,
        'value': null
      }, {
        'day': 5,
        'hour': 12,
        'value': null
      }, {
        'day': 5,
        'hour': 13,
        'value': null
      }, {
        'day': 5,
        'hour': 14,
        'value': null
      }, {
        'day': 5,
        'hour': 15,
        'value': null
      }, {
        'day': 5,
        'hour': 16,
        'value': null
      }, {
        'day': 5,
        'hour': 17,
        'value': null
      }, {
        'day': 5,
        'hour': 18,
        'value': null
      }, {
        'day': 5,
        'hour': 19,
        'value': null
      }, {
        'day': 5,
        'hour': 20,
        'value': null
      }, {
        'day': 5,
        'hour': 21,
        'value': null
      }, {
        'day': 5,
        'hour': 22,
        'value': null
      }, {
        'day': 5,
        'hour': 23,
        'value': null
      }, {
        'day': 5,
        'hour': 24,
        'value': null
      }, {
        'day': 6,
        'hour': 1,
        'value': null
      }, {
        'day': 6,
        'hour': 2,
        'value': null
      }, {
        'day': 6,
        'hour': 3,
        'value': null
      }, {
        'day': 6,
        'hour': 4,
        'value': null
      }, {
        'day': 6,
        'hour': 5,
        'value': null
      }, {
        'day': 6,
        'hour': 6,
        'value': null
      }, {
        'day': 6,
        'hour': 7,
        'value': null
      }, {
        'day': 6,
        'hour': 8,
        'value': null
      }, {
        'day': 6,
        'hour': 9,
        'value': null
      }, {
        'day': 6,
        'hour': 10,
        'value': null
      }, {
        'day': 6,
        'hour': 11,
        'value': null
      }, {
        'day': 6,
        'hour': 12,
        'value': null
      }, {
        'day': 6,
        'hour': 13,
        'value': null
      }, {
        'day': 6,
        'hour': 14,
        'value': null
      }, {
        'day': 6,
        'hour': 15,
        'value': null
      }, {
        'day': 6,
        'hour': 16,
        'value': null
      }, {
        'day': 6,
        'hour': 17,
        'value': null
      }, {
        'day': 6,
        'hour': 18,
        'value': null
      }, {
        'day': 6,
        'hour': 19,
        'value': null
      }, {
        'day': 6,
        'hour': 20,
        'value': null
      }, {
        'day': 6,
        'hour': 21,
        'value': null
      }, {
        'day': 6,
        'hour': 22,
        'value': null
      }, {
        'day': 6,
        'hour': 23,
        'value': null
      }, {
        'day': 6,
        'hour': 24,
        'value': null
      }, {
        'day': 7,
        'hour': 1,
        'value': null
      }, {
        'day': 7,
        'hour': 2,
        'value': null
      }, {
        'day': 7,
        'hour': 3,
        'value': null
      }, {
        'day': 7,
        'hour': 4,
        'value': null
      }, {
        'day': 7,
        'hour': 5,
        'value': null
      }, {
        'day': 7,
        'hour': 6,
        'value': null
      }, {
        'day': 7,
        'hour': 7,
        'value': null
      }, {
        'day': 7,
        'hour': 8,
        'value': null
      }, {
        'day': 7,
        'hour': 9,
        'value': null
      }, {
        'day': 7,
        'hour': 10,
        'value': null
      }, {
        'day': 7,
        'hour': 11,
        'value': null
      }, {
        'day': 7,
        'hour': 12,
        'value': null
      }, {
        'day': 7,
        'hour': 13,
        'value': null
      }, {
        'day': 7,
        'hour': 14,
        'value': null
      }, {
        'day': 7,
        'hour': 15,
        'value': null
      }, {
        'day': 7,
        'hour': 16,
        'value': null
      }, {
        'day': 7,
        'hour': 17,
        'value': null
      }, {
        'day': 7,
        'hour': 18,
        'value': null
      }, {
        'day': 7,
        'hour': 19,
        'value': null
      }, {
        'day': 7,
        'hour': 20,
        'value': null
      }, {
        'day': 7,
        'hour': 21,
        'value': null
      }, {
        'day': 7,
        'hour': 22,
        'value': null
      }, {
        'day': 7,
        'hour': 23,
        'value': null
      }, {
        'day': 7,
        'hour': 24,
        'value': null
      }]
    }, {
      'title': 'Sum',
      'val': 'sum',
      'data': [{
        'day': 1,
        'hour': 1,
        'value': null
      }, {
        'day': 1,
        'hour': 2,
        'value': null
      }, {
        'day': 1,
        'hour': 3,
        'value': null
      }, {
        'day': 1,
        'hour': 4,
        'value': null
      }, {
        'day': 1,
        'hour': 5,
        'value': null
      }, {
        'day': 1,
        'hour': 6,
        'value': null
      }, {
        'day': 1,
        'hour': 7,
        'value': null
      }, {
        'day': 1,
        'hour': 8,
        'value': null
      }, {
        'day': 1,
        'hour': 9,
        'value': null
      }, {
        'day': 1,
        'hour': 10,
        'value': null
      }, {
        'day': 1,
        'hour': 11,
        'value': null
      }, {
        'day': 1,
        'hour': 12,
        'value': null
      }, {
        'day': 1,
        'hour': 13,
        'value': null
      }, {
        'day': 1,
        'hour': 14,
        'value': null
      }, {
        'day': 1,
        'hour': 15,
        'value': null
      }, {
        'day': 1,
        'hour': 16,
        'value': null
      }, {
        'day': 1,
        'hour': 17,
        'value': null
      }, {
        'day': 1,
        'hour': 18,
        'value': null
      }, {
        'day': 1,
        'hour': 19,
        'value': null
      }, {
        'day': 1,
        'hour': 20,
        'value': null
      }, {
        'day': 1,
        'hour': 21,
        'value': null
      }, {
        'day': 1,
        'hour': 22,
        'value': null
      }, {
        'day': 1,
        'hour': 23,
        'value': null
      }, {
        'day': 1,
        'hour': 24,
        'value': null
      }, {
        'day': 2,
        'hour': 1,
        'value': null
      }, {
        'day': 2,
        'hour': 2,
        'value': null
      }, {
        'day': 2,
        'hour': 3,
        'value': null
      }, {
        'day': 2,
        'hour': 4,
        'value': null
      }, {
        'day': 2,
        'hour': 5,
        'value': null
      }, {
        'day': 2,
        'hour': 6,
        'value': null
      }, {
        'day': 2,
        'hour': 7,
        'value': null
      }, {
        'day': 2,
        'hour': 8,
        'value': null
      }, {
        'day': 2,
        'hour': 9,
        'value': null
      }, {
        'day': 2,
        'hour': 10,
        'value': null
      }, {
        'day': 2,
        'hour': 11,
        'value': null
      }, {
        'day': 2,
        'hour': 12,
        'value': null
      }, {
        'day': 2,
        'hour': 13,
        'value': null
      }, {
        'day': 2,
        'hour': 14,
        'value': null
      }, {
        'day': 2,
        'hour': 15,
        'value': null
      }, {
        'day': 2,
        'hour': 16,
        'value': 10
      }, {
        'day': 2,
        'hour': 17,
        'value': null
      }, {
        'day': 2,
        'hour': 18,
        'value': null
      }, {
        'day': 2,
        'hour': 19,
        'value': null
      }, {
        'day': 2,
        'hour': 20,
        'value': null
      }, {
        'day': 2,
        'hour': 21,
        'value': null
      }, {
        'day': 2,
        'hour': 22,
        'value': null
      }, {
        'day': 2,
        'hour': 23,
        'value': null
      }, {
        'day': 2,
        'hour': 24,
        'value': null
      }, {
        'day': 3,
        'hour': 1,
        'value': null
      }, {
        'day': 3,
        'hour': 2,
        'value': null
      }, {
        'day': 3,
        'hour': 3,
        'value': null
      }, {
        'day': 3,
        'hour': 4,
        'value': null
      }, {
        'day': 3,
        'hour': 5,
        'value': null
      }, {
        'day': 3,
        'hour': 6,
        'value': null
      }, {
        'day': 3,
        'hour': 7,
        'value': null
      }, {
        'day': 3,
        'hour': 8,
        'value': null
      }, {
        'day': 3,
        'hour': 9,
        'value': null
      }, {
        'day': 3,
        'hour': 10,
        'value': null
      }, {
        'day': 3,
        'hour': 11,
        'value': 8
      }, {
        'day': 3,
        'hour': 12,
        'value': null
      }, {
        'day': 3,
        'hour': 13,
        'value': null
      }, {
        'day': 3,
        'hour': 14,
        'value': null
      }, {
        'day': 3,
        'hour': 15,
        'value': null
      }, {
        'day': 3,
        'hour': 16,
        'value': null
      }, {
        'day': 3,
        'hour': 17,
        'value': null
      }, {
        'day': 3,
        'hour': 18,
        'value': null
      }, {
        'day': 3,
        'hour': 19,
        'value': null
      }, {
        'day': 3,
        'hour': 20,
        'value': null
      }, {
        'day': 3,
        'hour': 21,
        'value': null
      }, {
        'day': 3,
        'hour': 22,
        'value': null
      }, {
        'day': 3,
        'hour': 23,
        'value': null
      }, {
        'day': 3,
        'hour': 24,
        'value': null
      }, {
        'day': 4,
        'hour': 1,
        'value': null
      }, {
        'day': 4,
        'hour': 2,
        'value': null
      }, {
        'day': 4,
        'hour': 3,
        'value': null
      }, {
        'day': 4,
        'hour': 4,
        'value': null
      }, {
        'day': 4,
        'hour': 5,
        'value': null
      }, {
        'day': 4,
        'hour': 6,
        'value': null
      }, {
        'day': 4,
        'hour': 7,
        'value': null
      }, {
        'day': 4,
        'hour': 8,
        'value': null
      }, {
        'day': 4,
        'hour': 9,
        'value': 11
      }, {
        'day': 4,
        'hour': 10,
        'value': null
      }, {
        'day': 4,
        'hour': 11,
        'value': null
      }, {
        'day': 4,
        'hour': 12,
        'value': null
      }, {
        'day': 4,
        'hour': 13,
        'value': null
      }, {
        'day': 4,
        'hour': 14,
        'value': null
      }, {
        'day': 4,
        'hour': 15,
        'value': null
      }, {
        'day': 4,
        'hour': 16,
        'value': 9
      }, {
        'day': 4,
        'hour': 17,
        'value': null
      }, {
        'day': 4,
        'hour': 18,
        'value': null
      }, {
        'day': 4,
        'hour': 19,
        'value': null
      }, {
        'day': 4,
        'hour': 20,
        'value': null
      }, {
        'day': 4,
        'hour': 21,
        'value': null
      }, {
        'day': 4,
        'hour': 22,
        'value': null
      }, {
        'day': 4,
        'hour': 23,
        'value': null
      }, {
        'day': 4,
        'hour': 24,
        'value': null
      }, {
        'day': 5,
        'hour': 1,
        'value': null
      }, {
        'day': 5,
        'hour': 2,
        'value': null
      }, {
        'day': 5,
        'hour': 3,
        'value': null
      }, {
        'day': 5,
        'hour': 4,
        'value': null
      }, {
        'day': 5,
        'hour': 5,
        'value': null
      }, {
        'day': 5,
        'hour': 6,
        'value': null
      }, {
        'day': 5,
        'hour': 7,
        'value': null
      }, {
        'day': 5,
        'hour': 8,
        'value': null
      }, {
        'day': 5,
        'hour': 9,
        'value': null
      }, {
        'day': 5,
        'hour': 10,
        'value': null
      }, {
        'day': 5,
        'hour': 11,
        'value': null
      }, {
        'day': 5,
        'hour': 12,
        'value': null
      }, {
        'day': 5,
        'hour': 13,
        'value': null
      }, {
        'day': 5,
        'hour': 14,
        'value': null
      }, {
        'day': 5,
        'hour': 15,
        'value': null
      }, {
        'day': 5,
        'hour': 16,
        'value': null
      }, {
        'day': 5,
        'hour': 17,
        'value': null
      }, {
        'day': 5,
        'hour': 18,
        'value': null
      }, {
        'day': 5,
        'hour': 19,
        'value': null
      }, {
        'day': 5,
        'hour': 20,
        'value': null
      }, {
        'day': 5,
        'hour': 21,
        'value': null
      }, {
        'day': 5,
        'hour': 22,
        'value': null
      }, {
        'day': 5,
        'hour': 23,
        'value': null
      }, {
        'day': 5,
        'hour': 24,
        'value': null
      }, {
        'day': 6,
        'hour': 1,
        'value': null
      }, {
        'day': 6,
        'hour': 2,
        'value': null
      }, {
        'day': 6,
        'hour': 3,
        'value': null
      }, {
        'day': 6,
        'hour': 4,
        'value': null
      }, {
        'day': 6,
        'hour': 5,
        'value': null
      }, {
        'day': 6,
        'hour': 6,
        'value': null
      }, {
        'day': 6,
        'hour': 7,
        'value': null
      }, {
        'day': 6,
        'hour': 8,
        'value': null
      }, {
        'day': 6,
        'hour': 9,
        'value': null
      }, {
        'day': 6,
        'hour': 10,
        'value': null
      }, {
        'day': 6,
        'hour': 11,
        'value': null
      }, {
        'day': 6,
        'hour': 12,
        'value': null
      }, {
        'day': 6,
        'hour': 13,
        'value': null
      }, {
        'day': 6,
        'hour': 14,
        'value': null
      }, {
        'day': 6,
        'hour': 15,
        'value': null
      }, {
        'day': 6,
        'hour': 16,
        'value': null
      }, {
        'day': 6,
        'hour': 17,
        'value': null
      }, {
        'day': 6,
        'hour': 18,
        'value': null
      }, {
        'day': 6,
        'hour': 19,
        'value': null
      }, {
        'day': 6,
        'hour': 20,
        'value': null
      }, {
        'day': 6,
        'hour': 21,
        'value': null
      }, {
        'day': 6,
        'hour': 22,
        'value': null
      }, {
        'day': 6,
        'hour': 23,
        'value': null
      }, {
        'day': 6,
        'hour': 24,
        'value': null
      }, {
        'day': 7,
        'hour': 1,
        'value': null
      }, {
        'day': 7,
        'hour': 2,
        'value': null
      }, {
        'day': 7,
        'hour': 3,
        'value': null
      }, {
        'day': 7,
        'hour': 4,
        'value': null
      }, {
        'day': 7,
        'hour': 5,
        'value': null
      }, {
        'day': 7,
        'hour': 6,
        'value': null
      }, {
        'day': 7,
        'hour': 7,
        'value': null
      }, {
        'day': 7,
        'hour': 8,
        'value': null
      }, {
        'day': 7,
        'hour': 9,
        'value': null
      }, {
        'day': 7,
        'hour': 10,
        'value': null
      }, {
        'day': 7,
        'hour': 11,
        'value': null
      }, {
        'day': 7,
        'hour': 12,
        'value': null
      }, {
        'day': 7,
        'hour': 13,
        'value': null
      }, {
        'day': 7,
        'hour': 14,
        'value': null
      }, {
        'day': 7,
        'hour': 15,
        'value': null
      }, {
        'day': 7,
        'hour': 16,
        'value': null
      }, {
        'day': 7,
        'hour': 17,
        'value': null
      }, {
        'day': 7,
        'hour': 18,
        'value': null
      }, {
        'day': 7,
        'hour': 19,
        'value': null
      }, {
        'day': 7,
        'hour': 20,
        'value': null
      }, {
        'day': 7,
        'hour': 21,
        'value': null
      }, {
        'day': 7,
        'hour': 22,
        'value': null
      }, {
        'day': 7,
        'hour': 23,
        'value': null
      }, {
        'day': 7,
        'hour': 24,
        'value': null
      }]
    }],
    'data': {
      'title': 'Avg Counts',
      'val': 'avg',
      'data': [{
        'day': 1,
        'hour': 1,
        'value': null
      }, {
        'day': 1,
        'hour': 2,
        'value': null
      }, {
        'day': 1,
        'hour': 3,
        'value': null
      }, {
        'day': 1,
        'hour': 4,
        'value': null
      }, {
        'day': 1,
        'hour': 5,
        'value': null
      }, {
        'day': 1,
        'hour': 6,
        'value': null
      }, {
        'day': 1,
        'hour': 7,
        'value': null
      }, {
        'day': 1,
        'hour': 8,
        'value': null
      }, {
        'day': 1,
        'hour': 9,
        'value': null
      }, {
        'day': 1,
        'hour': 10,
        'value': null
      }, {
        'day': 1,
        'hour': 11,
        'value': null
      }, {
        'day': 1,
        'hour': 12,
        'value': null
      }, {
        'day': 1,
        'hour': 13,
        'value': null
      }, {
        'day': 1,
        'hour': 14,
        'value': null
      }, {
        'day': 1,
        'hour': 15,
        'value': null
      }, {
        'day': 1,
        'hour': 16,
        'value': null
      }, {
        'day': 1,
        'hour': 17,
        'value': null
      }, {
        'day': 1,
        'hour': 18,
        'value': null
      }, {
        'day': 1,
        'hour': 19,
        'value': null
      }, {
        'day': 1,
        'hour': 20,
        'value': null
      }, {
        'day': 1,
        'hour': 21,
        'value': null
      }, {
        'day': 1,
        'hour': 22,
        'value': null
      }, {
        'day': 1,
        'hour': 23,
        'value': null
      }, {
        'day': 1,
        'hour': 24,
        'value': null
      }, {
        'day': 2,
        'hour': 1,
        'value': null
      }, {
        'day': 2,
        'hour': 2,
        'value': null
      }, {
        'day': 2,
        'hour': 3,
        'value': null
      }, {
        'day': 2,
        'hour': 4,
        'value': null
      }, {
        'day': 2,
        'hour': 5,
        'value': null
      }, {
        'day': 2,
        'hour': 6,
        'value': null
      }, {
        'day': 2,
        'hour': 7,
        'value': null
      }, {
        'day': 2,
        'hour': 8,
        'value': null
      }, {
        'day': 2,
        'hour': 9,
        'value': null
      }, {
        'day': 2,
        'hour': 10,
        'value': null
      }, {
        'day': 2,
        'hour': 11,
        'value': null
      }, {
        'day': 2,
        'hour': 12,
        'value': null
      }, {
        'day': 2,
        'hour': 13,
        'value': null
      }, {
        'day': 2,
        'hour': 14,
        'value': null
      }, {
        'day': 2,
        'hour': 15,
        'value': null
      }, {
        'day': 2,
        'hour': 16,
        'value': 10
      }, {
        'day': 2,
        'hour': 17,
        'value': null
      }, {
        'day': 2,
        'hour': 18,
        'value': null
      }, {
        'day': 2,
        'hour': 19,
        'value': null
      }, {
        'day': 2,
        'hour': 20,
        'value': null
      }, {
        'day': 2,
        'hour': 21,
        'value': null
      }, {
        'day': 2,
        'hour': 22,
        'value': null
      }, {
        'day': 2,
        'hour': 23,
        'value': null
      }, {
        'day': 2,
        'hour': 24,
        'value': null
      }, {
        'day': 3,
        'hour': 1,
        'value': null
      }, {
        'day': 3,
        'hour': 2,
        'value': null
      }, {
        'day': 3,
        'hour': 3,
        'value': null
      }, {
        'day': 3,
        'hour': 4,
        'value': null
      }, {
        'day': 3,
        'hour': 5,
        'value': null
      }, {
        'day': 3,
        'hour': 6,
        'value': null
      }, {
        'day': 3,
        'hour': 7,
        'value': null
      }, {
        'day': 3,
        'hour': 8,
        'value': null
      }, {
        'day': 3,
        'hour': 9,
        'value': null
      }, {
        'day': 3,
        'hour': 10,
        'value': null
      }, {
        'day': 3,
        'hour': 11,
        'value': 8
      }, {
        'day': 3,
        'hour': 12,
        'value': null
      }, {
        'day': 3,
        'hour': 13,
        'value': null
      }, {
        'day': 3,
        'hour': 14,
        'value': null
      }, {
        'day': 3,
        'hour': 15,
        'value': null
      }, {
        'day': 3,
        'hour': 16,
        'value': null
      }, {
        'day': 3,
        'hour': 17,
        'value': null
      }, {
        'day': 3,
        'hour': 18,
        'value': null
      }, {
        'day': 3,
        'hour': 19,
        'value': null
      }, {
        'day': 3,
        'hour': 20,
        'value': null
      }, {
        'day': 3,
        'hour': 21,
        'value': null
      }, {
        'day': 3,
        'hour': 22,
        'value': null
      }, {
        'day': 3,
        'hour': 23,
        'value': null
      }, {
        'day': 3,
        'hour': 24,
        'value': null
      }, {
        'day': 4,
        'hour': 1,
        'value': null
      }, {
        'day': 4,
        'hour': 2,
        'value': null
      }, {
        'day': 4,
        'hour': 3,
        'value': null
      }, {
        'day': 4,
        'hour': 4,
        'value': null
      }, {
        'day': 4,
        'hour': 5,
        'value': null
      }, {
        'day': 4,
        'hour': 6,
        'value': null
      }, {
        'day': 4,
        'hour': 7,
        'value': null
      }, {
        'day': 4,
        'hour': 8,
        'value': null
      }, {
        'day': 4,
        'hour': 9,
        'value': 11
      }, {
        'day': 4,
        'hour': 10,
        'value': null
      }, {
        'day': 4,
        'hour': 11,
        'value': null
      }, {
        'day': 4,
        'hour': 12,
        'value': null
      }, {
        'day': 4,
        'hour': 13,
        'value': null
      }, {
        'day': 4,
        'hour': 14,
        'value': null
      }, {
        'day': 4,
        'hour': 15,
        'value': null
      }, {
        'day': 4,
        'hour': 16,
        'value': 9
      }, {
        'day': 4,
        'hour': 17,
        'value': null
      }, {
        'day': 4,
        'hour': 18,
        'value': null
      }, {
        'day': 4,
        'hour': 19,
        'value': null
      }, {
        'day': 4,
        'hour': 20,
        'value': null
      }, {
        'day': 4,
        'hour': 21,
        'value': null
      }, {
        'day': 4,
        'hour': 22,
        'value': null
      }, {
        'day': 4,
        'hour': 23,
        'value': null
      }, {
        'day': 4,
        'hour': 24,
        'value': null
      }, {
        'day': 5,
        'hour': 1,
        'value': null
      }, {
        'day': 5,
        'hour': 2,
        'value': null
      }, {
        'day': 5,
        'hour': 3,
        'value': null
      }, {
        'day': 5,
        'hour': 4,
        'value': null
      }, {
        'day': 5,
        'hour': 5,
        'value': null
      }, {
        'day': 5,
        'hour': 6,
        'value': null
      }, {
        'day': 5,
        'hour': 7,
        'value': null
      }, {
        'day': 5,
        'hour': 8,
        'value': null
      }, {
        'day': 5,
        'hour': 9,
        'value': null
      }, {
        'day': 5,
        'hour': 10,
        'value': null
      }, {
        'day': 5,
        'hour': 11,
        'value': null
      }, {
        'day': 5,
        'hour': 12,
        'value': null
      }, {
        'day': 5,
        'hour': 13,
        'value': null
      }, {
        'day': 5,
        'hour': 14,
        'value': null
      }, {
        'day': 5,
        'hour': 15,
        'value': null
      }, {
        'day': 5,
        'hour': 16,
        'value': null
      }, {
        'day': 5,
        'hour': 17,
        'value': null
      }, {
        'day': 5,
        'hour': 18,
        'value': null
      }, {
        'day': 5,
        'hour': 19,
        'value': null
      }, {
        'day': 5,
        'hour': 20,
        'value': null
      }, {
        'day': 5,
        'hour': 21,
        'value': null
      }, {
        'day': 5,
        'hour': 22,
        'value': null
      }, {
        'day': 5,
        'hour': 23,
        'value': null
      }, {
        'day': 5,
        'hour': 24,
        'value': null
      }, {
        'day': 6,
        'hour': 1,
        'value': null
      }, {
        'day': 6,
        'hour': 2,
        'value': null
      }, {
        'day': 6,
        'hour': 3,
        'value': null
      }, {
        'day': 6,
        'hour': 4,
        'value': null
      }, {
        'day': 6,
        'hour': 5,
        'value': null
      }, {
        'day': 6,
        'hour': 6,
        'value': null
      }, {
        'day': 6,
        'hour': 7,
        'value': null
      }, {
        'day': 6,
        'hour': 8,
        'value': null
      }, {
        'day': 6,
        'hour': 9,
        'value': null
      }, {
        'day': 6,
        'hour': 10,
        'value': null
      }, {
        'day': 6,
        'hour': 11,
        'value': null
      }, {
        'day': 6,
        'hour': 12,
        'value': null
      }, {
        'day': 6,
        'hour': 13,
        'value': null
      }, {
        'day': 6,
        'hour': 14,
        'value': null
      }, {
        'day': 6,
        'hour': 15,
        'value': null
      }, {
        'day': 6,
        'hour': 16,
        'value': null
      }, {
        'day': 6,
        'hour': 17,
        'value': null
      }, {
        'day': 6,
        'hour': 18,
        'value': null
      }, {
        'day': 6,
        'hour': 19,
        'value': null
      }, {
        'day': 6,
        'hour': 20,
        'value': null
      }, {
        'day': 6,
        'hour': 21,
        'value': null
      }, {
        'day': 6,
        'hour': 22,
        'value': null
      }, {
        'day': 6,
        'hour': 23,
        'value': null
      }, {
        'day': 6,
        'hour': 24,
        'value': null
      }, {
        'day': 7,
        'hour': 1,
        'value': null
      }, {
        'day': 7,
        'hour': 2,
        'value': null
      }, {
        'day': 7,
        'hour': 3,
        'value': null
      }, {
        'day': 7,
        'hour': 4,
        'value': null
      }, {
        'day': 7,
        'hour': 5,
        'value': null
      }, {
        'day': 7,
        'hour': 6,
        'value': null
      }, {
        'day': 7,
        'hour': 7,
        'value': null
      }, {
        'day': 7,
        'hour': 8,
        'value': null
      }, {
        'day': 7,
        'hour': 9,
        'value': null
      }, {
        'day': 7,
        'hour': 10,
        'value': null
      }, {
        'day': 7,
        'hour': 11,
        'value': null
      }, {
        'day': 7,
        'hour': 12,
        'value': null
      }, {
        'day': 7,
        'hour': 13,
        'value': null
      }, {
        'day': 7,
        'hour': 14,
        'value': null
      }, {
        'day': 7,
        'hour': 15,
        'value': null
      }, {
        'day': 7,
        'hour': 16,
        'value': null
      }, {
        'day': 7,
        'hour': 17,
        'value': null
      }, {
        'day': 7,
        'hour': 18,
        'value': null
      }, {
        'day': 7,
        'hour': 19,
        'value': null
      }, {
        'day': 7,
        'hour': 20,
        'value': null
      }, {
        'day': 7,
        'hour': 21,
        'value': null
      }, {
        'day': 7,
        'hour': 22,
        'value': null
      }, {
        'day': 7,
        'hour': 23,
        'value': null
      }, {
        'day': 7,
        'hour': 24,
        'value': null
      }]
    }
  })
  .value('mockTimeSeriesProcessedData', {
    'csv': {
      '2013-08-12': {
        'date': '2013-08-12',
        'total': 10,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 6,
          'Lobby and Mezzanine': 4,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 2,
          'Test Group: Knitting': 2,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 8
        }
      },
      '2013-08-14': {
        'date': '2013-08-14',
        'total': 20,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 10,
          'Lobby and Mezzanine': null,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': 6,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': 4,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': null,
          'Test Group: Knitting': 1,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': 1,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 17
        }
      },
      '2013-08-13': {
        'date': '2013-08-13',
        'total': 8,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': null,
          'Lobby and Mezzanine': 8,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 1,
          'Test Group: Knitting': null,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': 1,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 6
        }
      }
    },
    'total': [{
      'count': 38
    }],
    'totalCounts': [{}],
    'totalZeroCounts': [{}],
    'totalAvgSum': [{}],
    'totalAvgAvg': [{}],
    'daysWithObservations': [{}],
    'locationsTable': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': 16,
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': 12,
      'percent': '31.58'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': 4,
      'percent': '10.53'
    }],
    'locationsSum': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': 16,
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': 12,
      'percent': '31.58'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': 4,
      'percent': '10.53'
    }],
    'locationsAvgSum': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '5.33',
      'percent': '14.03'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '4.00',
      'percent': '10.53'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '2.00',
      'percent': '5.26'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '1.33',
      'percent': '3.50'
    }],
    'locationsAvgAvg': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '5.50',
      'percent': '14.47'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '4.00',
      'percent': '10.53'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '6.00',
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '4.00',
      'percent': '10.53'
    }],
    'locationsPct': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '42.11',
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '31.58',
      'percent': '31.58'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '15.79',
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '10.53',
      'percent': '10.53'
    }],
    'activitiesTable': [{
      'id': 63,
      'rank': 0,
      'title': 'Knitting',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 23,
      'name': 'Knitting',
      'count': 3,
      'percent': '7.89'
    }, {
      'id': 64,
      'rank': 0,
      'title': 'Computer',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Computer',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 66,
      'rank': 2,
      'title': 'Tablet',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Tablet',
      'count': 1,
      'percent': '2.63'
    }, {
      'id': 1,
      'rank': 2,
      'title': 'Activities',
      'type': 'activityGroup',
      'depth': 0,
      'name': 'Activities',
      'count': 4,
      'percent': '10.53'
    }, {
      'id': 1,
      'rank': 0,
      'title': 'Reading',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Reading',
      'count': 3,
      'percent': '7.89'
    }, {
      'id': 4,
      'rank': 2,
      'title': 'Computing',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Computing',
      'count': 1,
      'percent': '2.63'
    }, {
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': 31
    }],
    'activitiesSum': [{
      'id': 63,
      'rank': 0,
      'title': 'Knitting',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 23,
      'name': 'Knitting',
      'count': 3,
      'percent': '7.89',
      'activityGroupTitle': 'Test Group'
    }, {
      'id': 64,
      'rank': 0,
      'title': 'Computer',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Computer',
      'count': 6,
      'percent': '15.79',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 66,
      'rank': 2,
      'title': 'Tablet',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Tablet',
      'count': 1,
      'percent': '2.63',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 1,
      'rank': 0,
      'title': 'Reading',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Reading',
      'count': 3,
      'percent': '7.89',
      'activityGroupTitle': 'Activities'
    }, {
      'id': 4,
      'rank': 2,
      'title': 'Computing',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Computing',
      'count': 1,
      'percent': '2.63',
      'activityGroupTitle': 'Activities'
    }, {
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': 31
    }],
    'activitiesAvgSum': [{
      'id': 63,
      'rank': 0,
      'title': 'Knitting',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 23,
      'name': 'Knitting',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Test Group'
    }, {
      'id': 64,
      'rank': 0,
      'title': 'Computer',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Computer',
      'count': '2.00',
      'percent': '5.26',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 66,
      'rank': 2,
      'title': 'Tablet',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Tablet',
      'count': '0.33',
      'percent': '0.87',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 1,
      'rank': 2,
      'title': 'Activities',
      'type': 'activityGroup',
      'depth': 0,
      'name': 'Activities',
      'count': '1.00',
      'percent': '2.63'
    }, {
      'id': 1,
      'rank': 0,
      'title': 'Reading',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Reading',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Activities'
    }, {
      'id': 4,
      'rank': 2,
      'title': 'Computing',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Computing',
      'count': '0.33',
      'percent': '0.87',
      'activityGroupTitle': 'Activities'
    }, {
      'name': 'No Activity',
      'depth': 0,
      'percent': '27.19',
      'count': '10.33'
    }],
    'activitiesAvgAvg': [{
      'id': 63,
      'rank': 0,
      'title': 'Knitting',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 23,
      'name': 'Knitting',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Test Group'
    }, {
      'id': 64,
      'rank': 0,
      'title': 'Computer',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Computer',
      'count': '1.67',
      'percent': '4.39',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 66,
      'rank': 2,
      'title': 'Tablet',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Tablet',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 1,
      'rank': 2,
      'title': 'Activities',
      'type': 'activityGroup',
      'depth': 0,
      'name': 'Activities',
      'count': '1.00',
      'percent': '2.63'
    }, {
      'id': 1,
      'rank': 0,
      'title': 'Reading',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Reading',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Activities'
    }, {
      'id': 4,
      'rank': 2,
      'title': 'Computing',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Computing',
      'count': '1.00',
      'percent': '2.63',
      'activityGroupTitle': 'Activities'
    }, {
      'name': 'No Activity',
      'depth': 0,
      'percent': '23.68',
      'count': '9.00'
    }],
    'activitiesPct': [{
      'id': 63,
      'rank': 0,
      'title': 'Knitting',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 23,
      'name': 'Knitting',
      'count': '7.89',
      'percent': '7.89',
      'activityGroupTitle': 'Test Group'
    }, {
      'id': 64,
      'rank': 0,
      'title': 'Computer',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Computer',
      'count': '15.79',
      'percent': '15.79',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 66,
      'rank': 2,
      'title': 'Tablet',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 24,
      'name': 'Tablet',
      'count': '2.63',
      'percent': '2.63',
      'activityGroupTitle': 'Technology'
    }, {
      'id': 1,
      'rank': 0,
      'title': 'Reading',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Reading',
      'count': '7.89',
      'percent': '7.89',
      'activityGroupTitle': 'Activities'
    }, {
      'id': 4,
      'rank': 2,
      'title': 'Computing',
      'type': 'activity',
      'depth': 1,
      'activityGroup': 1,
      'name': 'Computing',
      'count': '2.63',
      'percent': '2.63',
      'activityGroupTitle': 'Activities'
    }, {
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': '81.58'
    }],
    'periodSum': [{
      'date': '2013-08-12',
      'count': 10
    }, {
      'date': '2013-08-13',
      'count': 8
    }, {
      'date': '2013-08-14',
      'count': 20
    }],
    'periodAvg': [{
      'date': '2013-08-12',
      'count': 10
    }, {
      'date': '2013-08-13',
      'count': 4
    }, {
      'date': '2013-08-14',
      'count': 15
    }],
    'hourlySummary': [{
      'name': 8,
      'count': 11,
      'percent': '28.95'
    }, {
      'name': 10,
      'count': 8,
      'percent': '21.05'
    }, {
      'name': 15,
      'count': 19,
      'percent': '50.00'
    }],
    'dayOfWeekSummary': [{
      'name': 'Monday',
      'count': 10,
      'percent': 0
    }, {
      'name': 'Tuesday',
      'count': 8,
      'percent': 0
    }, {
      'name': 'Wednesday',
      'count': 20,
      'percent': 0
    }],
    'monthSummary': [{
      'date': 'August 1, 2013',
      'name': 'August 2013',
      'count': 38,
      'percent': '100.00'
    }],
    'yearSummary': [{
      'name': '2013',
      'count': 38,
      'percent': '100.00'
    }],
    'timeSeriesOptions': [{
      'title': 'Daily Avg',
      'val': 'avg',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 4
      }, {
        'date': '2013-08-14',
        'count': 15
      }]
    }, {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    }],
    'timeSeriesData': {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    },
    'actsLocsOptions': [{
      'title': 'Activities',
      'val': 'activities',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'id': 63,
          'rank': 0,
          'title': 'Knitting',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 23,
          'name': 'Knitting',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Test Group'
        }, {
          'id': 64,
          'rank': 0,
          'title': 'Computer',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Computer',
          'count': '2.00',
          'percent': '5.26',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 66,
          'rank': 2,
          'title': 'Tablet',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Tablet',
          'count': '0.33',
          'percent': '0.87',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 1,
          'rank': 2,
          'title': 'Activities',
          'type': 'activityGroup',
          'depth': 0,
          'name': 'Activities',
          'count': '1.00',
          'percent': '2.63'
        }, {
          'id': 1,
          'rank': 0,
          'title': 'Reading',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Reading',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Activities'
        }, {
          'id': 4,
          'rank': 2,
          'title': 'Computing',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Computing',
          'count': '0.33',
          'percent': '0.87',
          'activityGroupTitle': 'Activities'
        }, {
          'name': 'No Activity',
          'depth': 0,
          'percent': '27.19',
          'count': '10.33'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'id': 63,
          'rank': 0,
          'title': 'Knitting',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 23,
          'name': 'Knitting',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Test Group'
        }, {
          'id': 64,
          'rank': 0,
          'title': 'Computer',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Computer',
          'count': '1.67',
          'percent': '4.39',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 66,
          'rank': 2,
          'title': 'Tablet',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Tablet',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 1,
          'rank': 2,
          'title': 'Activities',
          'type': 'activityGroup',
          'depth': 0,
          'name': 'Activities',
          'count': '1.00',
          'percent': '2.63'
        }, {
          'id': 1,
          'rank': 0,
          'title': 'Reading',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Reading',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Activities'
        }, {
          'id': 4,
          'rank': 2,
          'title': 'Computing',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Computing',
          'count': '1.00',
          'percent': '2.63',
          'activityGroupTitle': 'Activities'
        }, {
          'name': 'No Activity',
          'depth': 0,
          'percent': '23.68',
          'count': '9.00'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'id': 63,
          'rank': 0,
          'title': 'Knitting',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 23,
          'name': 'Knitting',
          'count': 3,
          'percent': '7.89',
          'activityGroupTitle': 'Test Group'
        }, {
          'id': 64,
          'rank': 0,
          'title': 'Computer',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Computer',
          'count': 6,
          'percent': '15.79',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 66,
          'rank': 2,
          'title': 'Tablet',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Tablet',
          'count': 1,
          'percent': '2.63',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 1,
          'rank': 0,
          'title': 'Reading',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Reading',
          'count': 3,
          'percent': '7.89',
          'activityGroupTitle': 'Activities'
        }, {
          'id': 4,
          'rank': 2,
          'title': 'Computing',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Computing',
          'count': 1,
          'percent': '2.63',
          'activityGroupTitle': 'Activities'
        }, {
          'name': 'No Activity',
          'depth': 0,
          'percent': '81.58',
          'count': 31
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'id': 63,
          'rank': 0,
          'title': 'Knitting',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 23,
          'name': 'Knitting',
          'count': '7.89',
          'percent': '7.89',
          'activityGroupTitle': 'Test Group'
        }, {
          'id': 64,
          'rank': 0,
          'title': 'Computer',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Computer',
          'count': '15.79',
          'percent': '15.79',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 66,
          'rank': 2,
          'title': 'Tablet',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 24,
          'name': 'Tablet',
          'count': '2.63',
          'percent': '2.63',
          'activityGroupTitle': 'Technology'
        }, {
          'id': 1,
          'rank': 0,
          'title': 'Reading',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Reading',
          'count': '7.89',
          'percent': '7.89',
          'activityGroupTitle': 'Activities'
        }, {
          'id': 4,
          'rank': 2,
          'title': 'Computing',
          'type': 'activity',
          'depth': 1,
          'activityGroup': 1,
          'name': 'Computing',
          'count': '2.63',
          'percent': '2.63',
          'activityGroupTitle': 'Activities'
        }, {
          'name': 'No Activity',
          'depth': 0,
          'percent': '81.58',
          'count': '81.58'
        }]
      }]
    }, {
      'title': 'Locations',
      'val': 'locations',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.33',
          'percent': '14.03'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '2.00',
          'percent': '5.26'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '1.33',
          'percent': '3.50'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.50',
          'percent': '14.47'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '6.00',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '4.00',
          'percent': '10.53'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': 16,
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': 12,
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': 6,
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': 4,
          'percent': '10.53'
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '42.11',
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '31.58',
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '15.79',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '10.53',
          'percent': '10.53'
        }]
      }]
    }],
    'actsLocsData': {
      'title': 'Locations',
      'val': 'locations',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.33',
          'percent': '14.03'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '2.00',
          'percent': '5.26'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '1.33',
          'percent': '3.50'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.50',
          'percent': '14.47'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '6.00',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '4.00',
          'percent': '10.53'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': 16,
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': 12,
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': 6,
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': 4,
          'percent': '10.53'
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '42.11',
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '31.58',
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '15.79',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '10.53',
          'percent': '10.53'
        }]
      }]
    },
    'barChartData': {
      'title': 'Sum',
      'data': [{
        'id': 3,
        'title': 'Ground Floor',
        'parent': 1,
        'description': '',
        'rank': 1,
        'depth': 0,
        'name': 'Ground Floor',
        'count': 16,
        'percent': '42.11'
      }, {
        'id': 4,
        'title': 'Lobby and Mezzanine',
        'parent': 1,
        'description': '',
        'rank': 2,
        'depth': 0,
        'name': 'Lobby and Mezzanine',
        'count': 12,
        'percent': '31.58'
      }, {
        'id': 18,
        'title': 'ConeZone & Creamery',
        'parent': 5,
        'description': '',
        'rank': 3,
        'depth': 1,
        'name': 'ConeZone & Creamery',
        'count': 6,
        'percent': '15.79'
      }, {
        'id': 22,
        'title': 'EW 2nd floor',
        'parent': 6,
        'description': '',
        'rank': 1,
        'depth': 1,
        'name': 'EW 2nd floor',
        'count': 4,
        'percent': '10.53'
      }]
    }
  })
  .value('mockTimeSeriesNoActsProcessedData', {
    'csv': {
      '2013-08-12': {
        'date': '2013-08-12',
        'total': 10,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 6,
          'Lobby and Mezzanine': 4,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Reading': 2,
          'Knitting': 2,
          'Computer': 2,
          'Sleeping': null,
          'Laptop': null,
          'Computing': null,
          'Tablet': null,
          'Collaborating': null,
          '_No Activity': 8
        }
      },
      '2013-08-14': {
        'date': '2013-08-14',
        'total': 20,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 10,
          'Lobby and Mezzanine': null,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': 6,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': 4,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Reading': null,
          'Knitting': 1,
          'Computer': 2,
          'Sleeping': null,
          'Laptop': null,
          'Computing': 1,
          'Tablet': null,
          'Collaborating': null,
          '_No Activity': 17
        }
      },
      '2013-08-13': {
        'date': '2013-08-13',
        'total': 8,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': null,
          'Lobby and Mezzanine': 8,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Reading': 1,
          'Knitting': null,
          'Computer': 2,
          'Sleeping': null,
          'Laptop': null,
          'Computing': null,
          'Tablet': 1,
          'Collaborating': null,
          '_No Activity': 6
        }
      }
    },
    'total': [{
      'count': 38
    }],
    'locationsTable': [{
      'id': 2,
      'title': 'Tower/Stacks',
      'parent': 1,
      'description': '',
      'rank': 0,
      'depth': 0,
      'name': 'Tower/Stacks',
      'count': 0,
      'percent': '0.00'
    }, {
      'id': 7,
      'title': 'Unity lab',
      'parent': 2,
      'description': '',
      'rank': 0,
      'depth': 1,
      'name': 'Unity lab',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 8,
      'title': '2nd floor',
      'parent': 2,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': '2nd floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 9,
      'title': '3rd floor',
      'parent': 2,
      'description': '',
      'rank': 2,
      'depth': 1,
      'name': '3rd floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 10,
      'title': '4th floor',
      'parent': 2,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': '4th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 11,
      'title': '5th floor',
      'parent': 2,
      'description': '',
      'rank': 4,
      'depth': 1,
      'name': '5th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 12,
      'title': '6th floor',
      'parent': 2,
      'description': '',
      'rank': 5,
      'depth': 1,
      'name': '6th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 13,
      'title': '7th floor',
      'parent': 2,
      'description': '',
      'rank': 6,
      'depth': 1,
      'name': '7th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 14,
      'title': '8th floor',
      'parent': 2,
      'description': '',
      'rank': 7,
      'depth': 1,
      'name': '8th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 15,
      'title': '9th floor',
      'parent': 2,
      'description': '',
      'rank': 8,
      'depth': 1,
      'name': '9th floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': 16,
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': 12,
      'percent': '31.58'
    }, {
      'id': 5,
      'title': 'West Wing',
      'parent': 1,
      'description': '',
      'rank': 3,
      'depth': 0,
      'name': 'West Wing',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 16,
      'title': 'Technology Sandbox',
      'parent': 5,
      'description': '',
      'rank': 0,
      'depth': 1,
      'name': 'Technology Sandbox',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 17,
      'title': 'Quiet Reading Room',
      'parent': 5,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'Quiet Reading Room',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 53,
      'title': 'Terrace',
      'parent': 5,
      'description': '',
      'rank': 2,
      'depth': 1,
      'name': 'Terrace',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 19,
      'title': 'WW 1st floor',
      'parent': 5,
      'description': '',
      'rank': 4,
      'depth': 1,
      'name': 'WW 1st floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 20,
      'title': 'WW 2nd floor',
      'parent': 5,
      'description': '',
      'rank': 5,
      'depth': 1,
      'name': 'WW 2nd floor',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 6,
      'title': 'East Wing',
      'parent': 1,
      'description': '',
      'rank': 4,
      'depth': 0,
      'name': 'East Wing',
      'count': 4,
      'percent': '10.53'
    }, {
      'id': 21,
      'title': 'EW 1st floor (Learning Commons)',
      'parent': 6,
      'description': '',
      'rank': 0,
      'depth': 1,
      'name': 'EW 1st floor (Learning Commons)',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': 4,
      'percent': '10.53'
    }, {
      'id': 23,
      'title': 'Special Collections Reading Room',
      'parent': 6,
      'description': '',
      'rank': 2,
      'depth': 1,
      'name': 'Special Collections Reading Room',
      'count': null,
      'percent': '0.00'
    }, {
      'id': 24,
      'title': 'Digital Media Lab',
      'parent': 6,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'Digital Media Lab',
      'count': null,
      'percent': '0.00'
    }],
    'locationsSum': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': 16,
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': 12,
      'percent': '31.58'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': 6,
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': 4,
      'percent': '10.53'
    }],
    'locationsAvgSum': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '5.33',
      'percent': '14.03'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '4.00',
      'percent': '10.53'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '2.00',
      'percent': '5.26'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '1.33',
      'percent': '3.50'
    }],
    'locationsAvgAvg': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '5.50',
      'percent': '14.47'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '4.00',
      'percent': '10.53'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '6.00',
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '4.00',
      'percent': '10.53'
    }],
    'locationsPct': [{
      'id': 3,
      'title': 'Ground Floor',
      'parent': 1,
      'description': '',
      'rank': 1,
      'depth': 0,
      'name': 'Ground Floor',
      'count': '42.11',
      'percent': '42.11'
    }, {
      'id': 4,
      'title': 'Lobby and Mezzanine',
      'parent': 1,
      'description': '',
      'rank': 2,
      'depth': 0,
      'name': 'Lobby and Mezzanine',
      'count': '31.58',
      'percent': '31.58'
    }, {
      'id': 18,
      'title': 'ConeZone & Creamery',
      'parent': 5,
      'description': '',
      'rank': 3,
      'depth': 1,
      'name': 'ConeZone & Creamery',
      'count': '15.79',
      'percent': '15.79'
    }, {
      'id': 22,
      'title': 'EW 2nd floor',
      'parent': 6,
      'description': '',
      'rank': 1,
      'depth': 1,
      'name': 'EW 2nd floor',
      'count': '10.53',
      'percent': '10.53'
    }],
    'activitiesTable': [{
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': 31
    }],
    'activitiesSum': [{
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': 31
    }],
    'activitiesAvgSum': [{
      'name': 'No Activity',
      'depth': 0,
      'percent': '27.19',
      'count': '10.33'
    }],
    'activitiesAvgAvg': [{
      'name': 'No Activity',
      'depth': 0,
      'percent': '23.68',
      'count': '9.00'
    }],
    'activitiesPct': [{
      'name': 'No Activity',
      'depth': 0,
      'percent': '81.58',
      'count': '81.58'
    }],
    'periodSum': [{
      'date': '2013-08-12',
      'count': 10
    }, {
      'date': '2013-08-13',
      'count': 8
    }, {
      'date': '2013-08-14',
      'count': 20
    }],
    'periodAvg': [{
      'date': '2013-08-12',
      'count': 10
    }, {
      'date': '2013-08-13',
      'count': 4
    }, {
      'date': '2013-08-14',
      'count': 15
    }],
    'hourlySummary': [{
      'name': 0,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 1,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 2,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 3,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 4,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 5,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 6,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 7,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 8,
      'count': 11,
      'percent': '28.95'
    }, {
      'name': 9,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 10,
      'count': 8,
      'percent': '21.05'
    }, {
      'name': 11,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 12,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 13,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 14,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 15,
      'count': 19,
      'percent': '50.00'
    }, {
      'name': 16,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 17,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 18,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 19,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 20,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 21,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 22,
      'count': 0,
      'percent': '0.00'
    }, {
      'name': 23,
      'count': 0,
      'percent': '0.00'
    }],
    'dayOfWeekSummary': [{
      'name': 'Monday',
      'count': 10,
      'percent': '26.32'
    }, {
      'name': 'Tuesday',
      'count': 8,
      'percent': '21.05'
    }, {
      'name': 'Wednesday',
      'count': 20,
      'percent': '52.63'
    }],
    'monthSummary': [{
      'date': 'August 1, 2013',
      'name': 'August 2013',
      'count': 38,
      'percent': '100.00'
    }],
    'yearSummary': [{
      'name': '2013',
      'count': 38,
      'percent': '100.00'
    }],
    'timeSeriesOptions': [{
      'title': 'Daily Avg',
      'val': 'avg',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 4
      }, {
        'date': '2013-08-14',
        'count': 15
      }]
    }, {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    }],
    'timeSeriesData': {
      'title': 'Daily Sum',
      'val': 'sum',
      'data': [{
        'date': '2013-08-12',
        'count': 10
      }, {
        'date': '2013-08-13',
        'count': 8
      }, {
        'date': '2013-08-14',
        'count': 20
      }]
    },
    'actsLocsOptions': [{
      'title': 'Activities',
      'val': 'activities',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'name': 'No Activity',
          'depth': 0,
          'percent': '27.19',
          'count': '10.33'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'name': 'No Activity',
          'depth': 0,
          'percent': '23.68',
          'count': '9.00'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'name': 'No Activity',
          'depth': 0,
          'percent': '81.58',
          'count': 31
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'name': 'No Activity',
          'depth': 0,
          'percent': '81.58',
          'count': '81.58'
        }]
      }]
    }, {
      'title': 'Locations',
      'val': 'locations',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.33',
          'percent': '14.03'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '2.00',
          'percent': '5.26'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '1.33',
          'percent': '3.50'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.50',
          'percent': '14.47'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '6.00',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '4.00',
          'percent': '10.53'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': 16,
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': 12,
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': 6,
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': 4,
          'percent': '10.53'
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '42.11',
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '31.58',
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '15.79',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '10.53',
          'percent': '10.53'
        }]
      }]
    }],
    'actsLocsData': {
      'title': 'Locations',
      'val': 'locations',
      'items': [{
        'title': 'Avg of Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.33',
          'percent': '14.03'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '2.00',
          'percent': '5.26'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '1.33',
          'percent': '3.50'
        }]
      }, {
        'title': 'Avg of Avg',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '5.50',
          'percent': '14.47'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '4.00',
          'percent': '10.53'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '6.00',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '4.00',
          'percent': '10.53'
        }]
      }, {
        'title': 'Sum',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': 16,
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': 12,
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': 6,
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': 4,
          'percent': '10.53'
        }]
      }, {
        'title': 'Pct',
        'data': [{
          'id': 3,
          'title': 'Ground Floor',
          'parent': 1,
          'description': '',
          'rank': 1,
          'depth': 0,
          'name': 'Ground Floor',
          'count': '42.11',
          'percent': '42.11'
        }, {
          'id': 4,
          'title': 'Lobby and Mezzanine',
          'parent': 1,
          'description': '',
          'rank': 2,
          'depth': 0,
          'name': 'Lobby and Mezzanine',
          'count': '31.58',
          'percent': '31.58'
        }, {
          'id': 18,
          'title': 'ConeZone & Creamery',
          'parent': 5,
          'description': '',
          'rank': 3,
          'depth': 1,
          'name': 'ConeZone & Creamery',
          'count': '15.79',
          'percent': '15.79'
        }, {
          'id': 22,
          'title': 'EW 2nd floor',
          'parent': 6,
          'description': '',
          'rank': 1,
          'depth': 1,
          'name': 'EW 2nd floor',
          'count': '10.53',
          'percent': '10.53'
        }]
      }]
    },
    'barChartData': {
      'title': 'Sum',
      'data': [{
        'id': 3,
        'title': 'Ground Floor',
        'parent': 1,
        'description': '',
        'rank': 1,
        'depth': 0,
        'name': 'Ground Floor',
        'count': 16,
        'percent': '42.11'
      }, {
        'id': 4,
        'title': 'Lobby and Mezzanine',
        'parent': 1,
        'description': '',
        'rank': 2,
        'depth': 0,
        'name': 'Lobby and Mezzanine',
        'count': 12,
        'percent': '31.58'
      }, {
        'id': 18,
        'title': 'ConeZone & Creamery',
        'parent': 5,
        'description': '',
        'rank': 3,
        'depth': 1,
        'name': 'ConeZone & Creamery',
        'count': 6,
        'percent': '15.79'
      }, {
        'id': 22,
        'title': 'EW 2nd floor',
        'parent': 6,
        'description': '',
        'rank': 1,
        'depth': 1,
        'name': 'EW 2nd floor',
        'count': 4,
        'percent': '10.53'
      }]
    }
  })
  .value('mockResponseZeros', {
    'hourSummary': [null, null, null, null, null, null, null, null, 11, null, 8, null, null, null, null, 19, null, null, null, null, null, null, null, null],
    'dailyHourSummary': [
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 10,
        'avg': 10,
        'avgDays': 10
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 8,
        'avg': 8,
        'avgDays': 8
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 11,
        'avg': 11,
        'avgDays': 11
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': 9,
        'avg': 9,
        'avgDays': 9
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }],
      [{
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }, {
        'sum': null,
        'avg': null,
        'avgDays': null
      }]
    ],
    'csv': {
      '2013-08-12': {
        'date': '2013-08-12',
        'total': 10,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 6,
          'Lobby and Mezzanine': 4,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 2,
          'Test Group: Knitting': 2,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 8
        }
      },
      '2013-08-14': {
        'date': '2013-08-14',
        'total': 0,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': 10,
          'Lobby and Mezzanine': null,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': 6,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': 4,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': null,
          'Test Group: Knitting': 1,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': 1,
          'Technology: Tablet': null,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 17
        }
      },
      '2013-08-13': {
        'date': '2013-08-13',
        'total': 8,
        'locations': {
          'Tower/Stacks': null,
          'Unity lab': null,
          '2nd floor': null,
          '3rd floor': null,
          '4th floor': null,
          '5th floor': null,
          '6th floor': null,
          '7th floor': null,
          '8th floor': null,
          '9th floor': null,
          'Ground Floor': null,
          'Lobby and Mezzanine': 8,
          'West Wing': null,
          'Technology Sandbox': null,
          'Quiet Reading Room': null,
          'Terrace': null,
          'ConeZone & Creamery': null,
          'WW 1st floor': null,
          'WW 2nd floor': null,
          'East Wing': null,
          'EW 1st floor (Learning Commons)': null,
          'EW 2nd floor': null,
          'Special Collections Reading Room': null,
          'Digital Media Lab': null
        },
        'activities': {
          'Activities: Reading': 1,
          'Test Group: Knitting': null,
          'Technology: Computer': 2,
          'Test Group 3: 0': null,
          'Test Group 2: 0': null,
          'Activities: Sleeping': null,
          'Technology: Laptop': null,
          'Test Group 3: 1': null,
          'Test Group 2: 1': null,
          'Activities: Computing': null,
          'Technology: Tablet': 1,
          'Test Group 3: 2': null,
          'Test Group 2: 2': null,
          'Activities: Collaborating': null,
          '_No Activity': 6
        }
      }
    },
    'activitiesSum': {
      '1': 3,
      '4': 1,
      '63': 3,
      '64': 6,
      '66': 1,
      '_No Activity': 31
    },
    'activitiesAvgAvg': {
      '1': 1,
      '4': 1,
      '63': 1,
      '64': 1.66666666667,
      '66': 1,
      'days': {
        '2013-08-12': {
          'sessions': {
            '21593': {
              '1': 1,
              '63': 1,
              '64': 1,
              '_No Activity': 3
            },
            '21594': {
              '1': 1,
              '63': 1,
              '64': 1,
              '_No Activity': 5
            }
          },
          'activities': {
            '1': {
              'count': 2,
              'divisor': 2
            },
            '63': {
              'count': 2,
              'divisor': 2
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '_No Activity': {
              'count': 8,
              'divisor': 2
            }
          }
        },
        '2013-08-14': {
          'sessions': {
            '21648': {
              '63': 1,
              '64': 1,
              '_No Activity': 5
            },
            '21649': {
              '_No Activity': 5
            },
            '21668': {
              '64': 1,
              '_No Activity': 4
            },
            '21669': {
              '4': 1,
              '_No Activity': 3
            }
          },
          'activities': {
            '4': {
              'count': 1,
              'divisor': 1
            },
            '63': {
              'count': 1,
              'divisor': 1
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '_No Activity': {
              'count': 17,
              'divisor': 4
            }
          }
        },
        '2013-08-13': {
          'sessions': {
            '21616': {
              '1': 1,
              '64': 1,
              '_No Activity': 2
            },
            '21617': {
              '64': 1,
              '66': 1,
              '_No Activity': 4
            }
          },
          'activities': {
            '1': {
              'count': 1,
              'divisor': 1
            },
            '64': {
              'count': 2,
              'divisor': 2
            },
            '66': {
              'count': 1,
              'divisor': 1
            },
            '_No Activity': {
              'count': 6,
              'divisor': 2
            }
          }
        }
      },
      'averages': {
        '1': {
          'avg': 2,
          'divisor': 2
        },
        '4': {
          'avg': 1,
          'divisor': 1
        },
        '63': {
          'avg': 2,
          'divisor': 2
        },
        '64': {
          'avg': 5,
          'divisor': 3
        },
        '66': {
          'avg': 1,
          'divisor': 1
        },
        '_No Activity': {
          'avg': 27,
          'divisor': 3
        }
      },
      '_No Activity': 9
    },
    'total': 0,
    'yearSummary': {
      '2013': 38
    },
    'monthSummary': {
      '2013': {
        'August': 38
      }
    },
    'weekdaySummary': {
      'Monday': 10,
      'Wednesday': 20,
      'Tuesday': 8
    },
    'periodSum': {
      '2013-08-12': {
        'count': 10
      },
      '2013-08-14': {
        'count': 20
      },
      '2013-08-13': {
        'count': 8
      }
    },
    'locationsSum': {
      '3': 0,
      '4': null,
      '18': 6,
      '22': 4
    },
    'periodAvg': {
      '2013-08-12': {
        'sessions': {
          '21593': {
            '4': 4
          },
          '21594': {
            '3': 6
          }
        },
        'locations': {
          '3': {
            'count': 6,
            'divisor': 1
          },
          '4': {
            'count': 4,
            'divisor': 1
          }
        },
        'count': 10
      },
      '2013-08-14': {
        'sessions': {
          '21648': {
            '18': 6
          },
          '21649': {
            '3': 5
          },
          '21668': {
            '3': 5
          },
          '21669': {
            '22': 4
          }
        },
        'locations': {
          '3': {
            'count': 10,
            'divisor': 2
          },
          '18': {
            'count': 6,
            'divisor': 1
          },
          '22': {
            'count': 4,
            'divisor': 1
          }
        },
        'count': 15
      },
      '2013-08-13': {
        'sessions': {
          '21616': {
            '4': 3
          },
          '21617': {
            '4': 5
          }
        },
        'locations': {
          '4': {
            'count': 8,
            'divisor': 2
          }
        },
        'count': 4
      }
    },
    'locationsAvgSum': {
      '3': 5.33333333333,
      '4': 4,
      '18': 2,
      '22': 1.33333333333
    },
    'activitiesAvgSum': {
      '1': 1,
      '4': 0.333333333333,
      '63': 1,
      '64': 2,
      '66': 0.333333333333,
      '_No Activity': 10.3333333333
    },
    'locationsAvgAvg': {
      '3': 5.5,
      '4': 4,
      '18': 6,
      '22': 4,
      'days': {
        '2013-08-12': {
          '3': {
            'count': 6,
            'divisor': 1
          },
          '4': {
            'count': 4,
            'divisor': 1
          }
        },
        '2013-08-14': {
          '3': {
            'count': 10,
            'divisor': 2
          },
          '18': {
            'count': 6,
            'divisor': 1
          },
          '22': {
            'count': 4,
            'divisor': 1
          }
        },
        '2013-08-13': {
          '4': {
            'count': 8,
            'divisor': 2
          }
        }
      },
      'averages': {
        '3': {
          'avg': 11,
          'divisor': 2
        },
        '4': {
          'avg': 8,
          'divisor': 2
        },
        '18': {
          'avg': 6,
          'divisor': 1
        },
        '22': {
          'avg': 4,
          'divisor': 1
        }
      }
    }
  })
  .value('mockTimeSeriesProcessedZeros', {'csv':{'2013-08-12':{'date':'2013-08-12','total':10,'locations':{'Tower/Stacks':null,'Unity lab':null,'2nd floor':null,'3rd floor':null,'4th floor':null,'5th floor':null,'6th floor':null,'7th floor':null,'8th floor':null,'9th floor':null,'Ground Floor':6,'Lobby and Mezzanine':4,'West Wing':null,'Technology Sandbox':null,'Quiet Reading Room':null,'Terrace':null,'ConeZone & Creamery':null,'WW 1st floor':null,'WW 2nd floor':null,'East Wing':null,'EW 1st floor (Learning Commons)':null,'EW 2nd floor':null,'Special Collections Reading Room':null,'Digital Media Lab':null},'activities':{'Activities: Reading':2,'Test Group: Knitting':2,'Technology: Computer':2,'Test Group 3: 0':null,'Test Group 2: 0':null,'Activities: Sleeping':null,'Technology: Laptop':null,'Test Group 3: 1':null,'Test Group 2: 1':null,'Activities: Computing':null,'Technology: Tablet':null,'Test Group 3: 2':null,'Test Group 2: 2':null,'Activities: Collaborating':null,'_No Activity':8}},'2013-08-14':{'date':'2013-08-14','total':0,'locations':{'Tower/Stacks':null,'Unity lab':null,'2nd floor':null,'3rd floor':null,'4th floor':null,'5th floor':null,'6th floor':null,'7th floor':null,'8th floor':null,'9th floor':null,'Ground Floor':10,'Lobby and Mezzanine':null,'West Wing':null,'Technology Sandbox':null,'Quiet Reading Room':null,'Terrace':null,'ConeZone & Creamery':6,'WW 1st floor':null,'WW 2nd floor':null,'East Wing':null,'EW 1st floor (Learning Commons)':null,'EW 2nd floor':4,'Special Collections Reading Room':null,'Digital Media Lab':null},'activities':{'Activities: Reading':null,'Test Group: Knitting':1,'Technology: Computer':2,'Test Group 3: 0':null,'Test Group 2: 0':null,'Activities: Sleeping':null,'Technology: Laptop':null,'Test Group 3: 1':null,'Test Group 2: 1':null,'Activities: Computing':1,'Technology: Tablet':null,'Test Group 3: 2':null,'Test Group 2: 2':null,'Activities: Collaborating':null,'_No Activity':17}},'2013-08-13':{'date':'2013-08-13','total':8,'locations':{'Tower/Stacks':null,'Unity lab':null,'2nd floor':null,'3rd floor':null,'4th floor':null,'5th floor':null,'6th floor':null,'7th floor':null,'8th floor':null,'9th floor':null,'Ground Floor':null,'Lobby and Mezzanine':8,'West Wing':null,'Technology Sandbox':null,'Quiet Reading Room':null,'Terrace':null,'ConeZone & Creamery':null,'WW 1st floor':null,'WW 2nd floor':null,'East Wing':null,'EW 1st floor (Learning Commons)':null,'EW 2nd floor':null,'Special Collections Reading Room':null,'Digital Media Lab':null},'activities':{'Activities: Reading':1,'Test Group: Knitting':null,'Technology: Computer':2,'Test Group 3: 0':null,'Test Group 2: 0':null,'Activities: Sleeping':null,'Technology: Laptop':null,'Test Group 3: 1':null,'Test Group 2: 1':null,'Activities: Computing':null,'Technology: Tablet':1,'Test Group 3: 2':null,'Test Group 2: 2':null,'Activities: Collaborating':null,'_No Activity':6}}},'total':[{'count':0}],'totalCounts':[{}],'totalZeroCounts':[{}],'totalAvgSum':[{}],'totalAvgAvg':[{}],'daysWithObservations':[{}],'locationsTable':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':6,'percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':4,'percent':'Infinity'}],'locationsSum':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':6,'percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':4,'percent':'Infinity'}],'locationsAvgSum':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.33','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'2.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'1.33','percent':'Infinity'}],'locationsAvgAvg':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.50','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'6.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'4.00','percent':'Infinity'}],'locationsPct':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'Infinity','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'Infinity','percent':'Infinity'}],'activitiesTable':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':3,'percent':'Infinity'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':6,'percent':'Infinity'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':1,'percent':'Infinity'},{'id':1,'rank':2,'title':'Activities','type':'activityGroup','depth':0,'name':'Activities','count':4,'percent':'Infinity'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':3,'percent':'Infinity'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':1,'percent':'Infinity'},{'name':'No Activity','depth':0,'percent':'Infinity','count':31}],'activitiesSum':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':3,'percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':6,'percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':1,'percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':3,'percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':1,'percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':31}],'activitiesAvgSum':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'1.00','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'2.00','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'0.33','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':2,'title':'Activities','type':'activityGroup','depth':0,'name':'Activities','count':'1.00','percent':'Infinity'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'0.33','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'10.33'}],'activitiesAvgAvg':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'1.00','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'1.67','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'1.00','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':2,'title':'Activities','type':'activityGroup','depth':0,'name':'Activities','count':'1.00','percent':'Infinity'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'9.00'}],'activitiesPct':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'Infinity','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'Infinity','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'Infinity','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'Infinity','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'Infinity','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'Infinity'}],'periodSum':[{'date':'2013-08-12','count':10},{'date':'2013-08-13','count':8},{'date':'2013-08-14','count':20}],'periodAvg':[{'date':'2013-08-12','count':10},{'date':'2013-08-13','count':4},{'date':'2013-08-14','count':15}],'hourlySummary':[{'name':8,'count':11,'percent':'Infinity'},{'name':10,'count':8,'percent':'Infinity'},{'name':15,'count':19,'percent':'Infinity'}],'dayOfWeekSummary':[{'name':'Monday','count':10,'percent':0},{'name':'Tuesday','count':8,'percent':0},{'name':'Wednesday','count':20,'percent':0}],'monthSummary':[{'date':'August 1, 2013','name':'August 2013','count':38,'percent':'Infinity'}],'yearSummary':[{'name':'2013','count':38,'percent':'Infinity'}],'timeSeriesOptions':[{'title':'Daily Avg','val':'avg','data':[{'date':'2013-08-12','count':10},{'date':'2013-08-13','count':4},{'date':'2013-08-14','count':15}]},{'title':'Daily Sum','val':'sum','data':[{'date':'2013-08-12','count':10},{'date':'2013-08-13','count':8},{'date':'2013-08-14','count':20}]}],'timeSeriesData':{'title':'Daily Sum','val':'sum','data':[{'date':'2013-08-12','count':10},{'date':'2013-08-13','count':8},{'date':'2013-08-14','count':20}]},'actsLocsOptions':[{'title':'Activities','val':'activities','items':[{'title':'Avg of Sum','data':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'1.00','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'2.00','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'0.33','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':2,'title':'Activities','type':'activityGroup','depth':0,'name':'Activities','count':'1.00','percent':'Infinity'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'0.33','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'10.33'}]},{'title':'Avg of Avg','data':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'1.00','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'1.67','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'1.00','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':2,'title':'Activities','type':'activityGroup','depth':0,'name':'Activities','count':'1.00','percent':'Infinity'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'1.00','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'9.00'}]},{'title':'Sum','data':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':3,'percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':6,'percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':1,'percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':3,'percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':1,'percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':31}]},{'title':'Pct','data':[{'id':63,'rank':0,'title':'Knitting','type':'activity','depth':1,'activityGroup':23,'name':'Knitting','count':'Infinity','percent':'Infinity','activityGroupTitle':'Test Group'},{'id':64,'rank':0,'title':'Computer','type':'activity','depth':1,'activityGroup':24,'name':'Computer','count':'Infinity','percent':'Infinity','activityGroupTitle':'Technology'},{'id':66,'rank':2,'title':'Tablet','type':'activity','depth':1,'activityGroup':24,'name':'Tablet','count':'Infinity','percent':'Infinity','activityGroupTitle':'Technology'},{'id':1,'rank':0,'title':'Reading','type':'activity','depth':1,'activityGroup':1,'name':'Reading','count':'Infinity','percent':'Infinity','activityGroupTitle':'Activities'},{'id':4,'rank':2,'title':'Computing','type':'activity','depth':1,'activityGroup':1,'name':'Computing','count':'Infinity','percent':'Infinity','activityGroupTitle':'Activities'},{'name':'No Activity','depth':0,'percent':'Infinity','count':'Infinity'}]}]},{'title':'Locations','val':'locations','items':[{'title':'Avg of Sum','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.33','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'2.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'1.33','percent':'Infinity'}]},{'title':'Avg of Avg','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.50','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'6.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'4.00','percent':'Infinity'}]},{'title':'Sum','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':6,'percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':4,'percent':'Infinity'}]},{'title':'Pct','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'Infinity','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'Infinity','percent':'Infinity'}]}]}],'actsLocsData':{'title':'Locations','val':'locations','items':[{'title':'Avg of Sum','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.33','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'2.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'1.33','percent':'Infinity'}]},{'title':'Avg of Avg','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':'5.50','percent':'Infinity'},{'id':4,'title':'Lobby and Mezzanine','parent':1,'description':'','rank':2,'depth':0,'name':'Lobby and Mezzanine','count':'4.00','percent':'Infinity'},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'6.00','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'4.00','percent':'Infinity'}]},{'title':'Sum','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':6,'percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':4,'percent':'Infinity'}]},{'title':'Pct','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':'Infinity','percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':'Infinity','percent':'Infinity'}]}]},'barChartData':{'title':'Sum','data':[{'id':3,'title':'Ground Floor','parent':1,'description':'','rank':1,'depth':0,'name':'Ground Floor','count':0,'percent':0},{'id':18,'title':'ConeZone & Creamery','parent':5,'description':'','rank':3,'depth':1,'name':'ConeZone & Creamery','count':6,'percent':'Infinity'},{'id':22,'title':'EW 2nd floor','parent':6,'description':'','rank':1,'depth':1,'name':'EW 2nd floor','count':4,'percent':'Infinity'}]}});