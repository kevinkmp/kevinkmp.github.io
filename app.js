angular.module('kevinkmp', [
  'ui.bootstrap',
  'ui.router',
  'ngAnimate',
  'ngSanitize'
]);

angular.module('kevinkmp').config(function($stateProvider, $urlRouterProvider, $filterProvider) {

  var dims = [
    'YEAR',
    'YEARMON',
    'YEARMONDAY',
    'MONTH',
    'DAY',
    'DAYOFWEEK',
    'HOUR',
    'DEPARTMENT',
    'WEEK_END_MON',
    'WEEK_END_TUE',
    'WEEK_END_WED',
    'WEEK_END_THU',
    'WEEK_END_FRI',
    'WEEK_END_SAT',
    'WEEK_END_SUN',
    'STORE_NUMBER',
    'STATE',
    'CITY',
    'LATLONG',
    'PROD_DEPT',
    'PROD_MANUFACTURER',
    'PROD_CATEGORY',
    'PROD_PACKAGE',
    'PROD_SIZE',
    'PROD_BRAND',
    'PROD_UPC',
    'AB_CATEGORY',
    'AB_CONTAINER',
    'COKE_TRADEMARK',
    'COKE_CATEGORY'
  ];

  var facts = [
    'TOTAL_QUANTITY',
    'AVG_QUANTITY',
    'STDDEV_QUANTITY',
    'VAR_QUANTITY',
    'PERCENT_TOTAL_QUANTITY',
    'TOTAL_AMOUNT',
    'AVG_AMOUNT',
    'STDDEV_AMOUNT',
    'VAR_AMOUNT',
    'PERCENT_TOTAL_AMOUNT',
    'NUM_TRANSACTIONS',
    'AB_CASE_EQUIV',
    'OCCURRENCE',
    'SUPPORT',
    'CONFIDENCE',
    'ADDED_VALUE',
    'LIFT',
    'CONVICTION'
  ]

  $stateProvider.state('oos', {
      url: '/',
      templateUrl: 'partial/oos/oos.html',
      controller: 'OutOfStockCtrl'
      // ,
      // resolve: {
      //   dims: function () {
      //     return dims;
      //   },
      //   facts: function () {
      //     return facts;
      //   }
      // }
    });

  /* Add New States Above */
  $urlRouterProvider.otherwise('/');

});
