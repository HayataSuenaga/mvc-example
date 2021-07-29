let Controller = {

  /**
   * Takes an object and sets this.model to the input object.
   * Controller object doesn't know about the model until it's initialized.
   */
  initialize: (model) => {
    this.model = model;
  },

  /**
   * Click event handler (callback). Changes the text of the DOM element
   * on which the event is triggered.
   */
  clickCB: (event) => {
    let target = $(event.target);
    target.text(this.model.getTitle);
  },

};