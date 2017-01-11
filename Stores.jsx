import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter(); 
import AppDispatcher from './Dispatcher.jsx';
import assign from './object-assign.js';
import AppConstants from './Constants.jsx';

var CHANGE_EVENT = 'change';
var items = [];

var AppStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getItems: function() {
  	return items;
  },

  addItem: function(item) {
  	if(items.indexOf(item) === -1) {
  		items.push(item);
  	}
  },

  removeItem: function(index) {
  	items.splice(index, 1);
  }
});

AppStore.dispatchToken = AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.ADD_ITEM:
			AppStore.addItem(action.item);
			AppStore.emitChange();
			break;
		case AppConstants.REMOVE_ITEM:
			AppStore.removeItem(action.itemIndex);
			AppStore.emitChange();
			break;
		default:
			// do nothing
  }
});

//module.exports = AppStore;
export default AppStore;
