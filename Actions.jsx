import AppDispatcher from './Dispatcher.jsx';
import AppConstants from './Constants.jsx';
 
//var AppActions = {
  //addItem: function(item){
    //AppDispatcher.handleViewAction({
    //  actionType:AppConstants.ADD_ITEM,
    //  item: item
    //})
  //}
//}

//module.exports = AppActions
//export default AppActions;
var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item: item
    });
  },
  removeItem: function(itemIndex){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.REMOVE_ITEM,
      itemIndex: itemIndex
    });
  }
}

export default AppActions
