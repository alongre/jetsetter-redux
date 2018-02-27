import React, { Component } from 'react';
// import uniqueId from 'lodash/uniqueId';
// import CountDown from './CountDown';
// import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

class Application extends Component {

  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
  // addItem = value => {
  //   const newItem = {
  //     value,
  //     id: uniqueId(),
  //     packed: false,
  //   }
  //   this.setState({ items: [newItem, ...this.state.items]});
  // } 

  // markAllUnpacked = () => {
  //   const items  = this.state.items.map((item) => {
  //     return {...item, packed: false};
  //   });
  //   this.setState({ items });
  // }

  render() {
    // Get the items from state
    return (
      <div className="Application">
        {/* <NewItem onSubmit = {this.addItem}/> */}
        {/* <CountDown /> */}
        <Items/>
        <Items/>
        {/* <button className="button full-width" onClick={this.markAllUnpacked}>Mark All As Unpacked</button> */}
      </div>
    );
  }
}

export default Application;
