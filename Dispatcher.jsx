//var Dispatcher = require('flux').Dispatcher;
import { Dispatcher } from 'flux';
const dispatcher = new Dispatcher();
import assign from './object-assign.js'; 

//console.log(assign);

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

//module.exports = AppDispatcher;
export default AppDispatcher;