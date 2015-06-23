var app = angular.module('app', ['ui.bootstrap']);

app.controller('WorksListCtrl', function ($scope, $modal, $http) {

	$http.get('works.json').success(function(data){
		$scope.works = data;
	})

    $scope.open = function (work) {

        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            scope: $scope.work,
            controller: 'ModalCtrl',
            resolve: {
             work: function () {
               return work;
             }
           }
    })}
});

app.controller('ModalCtrl', function ($scope, $modalInstance, work) {
    $scope.work = work;
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});