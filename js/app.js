angular.module('codedeck', ['ionic', 'codedeck.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.topics', {
      url: "/topics",
      views: {
        'menuContent' :{
          controller: 'TopicsCtrl',
          templateUrl: "templates/topics.html"
        }
      }
    })

    .state('app.topic', {
      url: "/topics/:topic",
      views: {
        'menuContent' :{
          templateUrl: "templates/topic.html",
          controller: 'TopicsCtrl'
        }
      }
    })

    .state('app.videos', {
      url: "/videos",
      views: {
        'menuContent' :{
          controller: 'VideosCtrl',
          templateUrl: "templates/videos.html"
        }
      }
    })

    .state('app.video', {
      url: "/videos/:video",
      views: {
        'menuContent' :{
          templateUrl: "templates/video.html",
          controller: 'VideosCtrl'
        }
      }
    })

    .state('app.achievements', {
      url: "/achievements",
      views: {
        'menuContent' :{
          controller: 'AchievementsCtrl',
          templateUrl: "templates/achievements.html"
        }
      }
    })

    .state('app.achievement', {
      url: "/achievements/:achievement",
      views: {
        'menuContent' :{
          controller: 'AchievementsCtrl',
          templateUrl: "templates/achievement.html"
        }
      }
    })

    .state('app.account', {
      url: "/account",
      views: {
        'menuContent' :{
          templateUrl: "templates/account.html",
          controller: 'AccountCtrl'
        }
      }
    })

    .state('app.account.purchaseCredit', {
      url: "/account/credit/purchase",
      views: {
        'menuContent' :{
          templateUrl: "templates/purchaseCredit.html",
          controller: 'AccountCtrl'
        }
      }
    })

    .state('app.account.aboutCredit', {
      url: "/account/credit/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/aboutCredit.html",
          controller: 'AccountCtrl'
        }
      }
    })

    .state('app.account.pastCreditPurchases', {
      url: "/account/credit/pastPurchases",
      views: {
        'menuContent' :{
          templateUrl: "templates/pastCreditPurchases.html",
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/topics');

});
