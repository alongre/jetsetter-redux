import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

class Application extends Component {
  state = { 
     items: defaultState,
  };

  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
  addItem = value => {
    const newItem = {
      value,
      id: uniqueId(),
      packed: false,
    }
    this.setState({ items: [newItem, ...this.state.items]});
  } 

  toggleItem = id => {
    const items  = this.state.items.map((item) => {
      if (item.id !== id) return item;
      return {...item, packed: !item.packed};
    });
    this.setState({ items });
  }

  removeItem = itemToRemove => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemToRemove.id),
    })
  }

  markAllUnpacked = () => {
    const items  = this.state.items.map((item) => {
      return {...item, packed: false};
    });
    this.setState({ items });
  }

  render() {
    // Get the items from state
    const { items } = this.state;
    const packedItem = items.filter(item => item.packed);
    const unPackedItem = items.filter(item => !item.packed);
    return (
      <div className="Application">
        <NewItem onSubmit = {this.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={ unPackedItem } onRemove = {this.removeItem} onCheckOff = {this.toggleItem} />
        <Items title="Packed Items" items={ packedItem } onRemove = {this.removeItem} onCheckOff = {this.toggleItem}/>
        <button className="button full-width" onClick={this.markAllUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
