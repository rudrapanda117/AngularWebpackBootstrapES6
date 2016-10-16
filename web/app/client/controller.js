export default class ExampleController {
    constructor() {
        this.controllerName = 'First Controller';
        this.showModal = false;
    }
    toggleModal = () => {
      console.log("Clicked");
        this.showModal = !this.showModal;
    };
}
