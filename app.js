let App = {

  /**
   * Inside the initialize method of this App object, each MVC components come together.
   * Intill the initialized method is called, each component doesn't know about each other.
   */
  initialize: () => {
    Model.initialize('Hello, world!');
    Controller.initialize(Model);
    View.initialize(Controller);
  }

}