var app = angular.module("MyApp",[]);

app.controller('profCtrl',function($scope, $http){
	$http.get('http://localhost:8080/AgendamentoDeRecursos/rs/professor').success(function(data){
		$scope.professores = data
	});	
});
	
