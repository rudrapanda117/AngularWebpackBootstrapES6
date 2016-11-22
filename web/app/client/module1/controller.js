export default class ExampleController {
    constructor($http) {
        this.controllerName = 'Message form First Controllers!!';
        this.showModal = false;
        this.$http=$http;
    }
    toggleModal = () => {
      console.log("Clicked");
        this.showModal = !this.showModal;
    };
    fetchData = () => {

      this.$http.get("/users/")
   .then((response)=> {
      this.message = response.data.message;
   })
    };
}

/* export default function ExampleController($scope, $http) {
    $scope.controllerName = 'First Controller';
    $scope.showModal = false;
    $scope.toggleModal = () => {
        console.log("Clicked");
        $scope.showModal = !$scope.showModal;
    };
    $scope.fetchData = () => {

        $http.get("/users/")
            .then((response) => {
                $scope.message = response.data.message;
            })
    }
}
*/
ExampleController.$inject = ['$http'];
