angular.module('codedeck.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('TopicsCtrl', function($scope, $stateParams) {

  $scope.topics = [
    {
        name: 'CSS',
        id: 1
    },
    {
        name: 'HTML',
        id: 2
    },
    {
        name: 'Javascript',
        id: 3
    },
  ];

})

.controller('VideosCtrl', function($scope, $stateParams) {

  $scope.videos = [
    {
        name: 'video one',
        id: 1
    },
    {
        name: 'video two',
        id: 2
    },
    {
        name: 'video three',
        id: 3
    },
  ];

})

.controller('AchievementsCtrl', function($scope, $stateParams) {

  $scope.achievements = [
    {
        name: '10 hours',
        id: 1
    },
    {
        name: 'first video completed',
        id: 2
    },
    {
        name: 'great score',
        id: 3
    },
  ];

})

.controller('AccountCtrl', function($scope, $stateParams) {

  $scope.user = {

    name : {
      first: 'Edward',
      last: 'Marriner'
    },

    email: 'edmarriner@gmail.com'

  };

  $scope.subscription = {

    type: 'free'

  };

  $scope.credits = {

    earned: 0,
    paid: 120

  }

})
