import ApodController from './components/apod-controller.js';

class App {
  constructor() {
    this.controllers = {
      apod: new ApodController()
    };
  }
}

window.app = new App();
