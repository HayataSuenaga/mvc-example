let View = {

  /**
   * Takes an object and sets this.controller to the input object.
   * View doesn't know about the model until it's initialized.
   */
  initialize: (controller) => {
    $title = $('.title');
    $title.on('click', controller.clickCB);
  }

};