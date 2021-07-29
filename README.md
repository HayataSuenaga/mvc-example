# MVC Simple Example
This is rather a simple app whose sole purpose is to demonstrate the Model-View-Controller pattern. There is one thing this app does: changing the text of the title when first clicked.
___
## MVC Components
### Model (`model.js`)
Stores a string to which the title should be changed when clicked.
### Controller
Defines what to do with data stored in `Model` when the user takes certain actions. In our case, we define a call back function that we trigger when the user clicks the title. We want to change the title's text to the one stored in `Model`.
### View (`view.js`)
Fetches the title DOM object and sets its call back to the one defined in `Controller`
### App (`App.js`)
All of the above components comes together inside `initialize()` method of this object. Until this method is called, each MVC component donen't know about each other. We call `initialize()` when the webpage finishes loading.