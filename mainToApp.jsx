import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from './Actions.jsx'; 
import AppStore from './Stores.jsx';
//import SimpleButton from './buttons.jsx';  
  
var getItemsFromStore = function () {
  return {
    items: AppStore.getItems()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getItemsFromStore();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getItemsFromStore());
  },

  addNewItem: function(item) {
    console.log(item);
    var newitem  = this.refs.taskitem.value.trim();
    if(newitem.length !== 0) {
      AppActions.addItem(newitem);
      this.refs.taskitem.value = '';
      this.refs.taskitem.focus();
    }
    else {
      console.error('Please enter something. Input is empty');
    }
  },

  removeItem: function(itemIndex) {
    AppActions.removeItem(itemIndex);
  },

  render:function(){
    return (
      <div className="container">
        <input className="filter form-control"  ref="taskitem" placeholder="Enter item" />
        <button className="btn btn-primary" onClick={this.addNewItem}>Add Item</button>
        
          <div className="list-group">
          <ul>
            {
              this.state.items.map(function(item, i) {
                var removeItemClick = this.removeItem.bind(this, i);
                return (
                  <li key={item}>
                    
                    {item}
                     <button onClick={removeItemClick} className="btn btn-xs btn-warning">
                      <span className="glyphicon glyphicon-trash"></span>
                    </button>
                 
                  </li>
                )
              }, this)
            }
          </ul>
       
        </div>
      </div>
    )
  }
});

export default App;