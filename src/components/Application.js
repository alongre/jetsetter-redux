import React, { Component } from 'react';
// import uniqueId from 'lodash/uniqueId';
// import CountDown from './CountDown';
// import NewItem from './NewItem';
import PackedItemsContainer from './Items/PackedItemsContainer';
import UnpackedItemsContainer from './Items/UnpackedItemsContainer';
import PackedFilterContainer from './Filter/PackedFilterContainer';
import UnPackedFilterContainer from './Filter/UnPackedFilterContainer';

import './Application.css';

class Application extends Component {
  render() {
    // Get the items from state
    return (
      <div className="Application">
        {/* <NewItem onSubmit = {this.addItem}/> */}
        {/* <CountDown /> */}
        <PackedItemsContainer render={() => <PackedFilterContainer />}/>
        <UnpackedItemsContainer render={() => <UnPackedFilterContainer />}/>
        {/* <button className="button full-width" onClick={this.markAllUnpacked}>Mark All As Unpacked</button> */}
      </div>
    );
  }
}

export default Application;
