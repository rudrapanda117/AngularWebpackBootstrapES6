export default class ExampleController {
    constructor($http) {
        this.controllerName = 'First Controller';
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

ExampleController.$inject=['$http'];
