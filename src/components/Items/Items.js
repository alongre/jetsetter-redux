import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item/Item';
import Filter from '../Filter/Filter';

class Items extends Component {
  state = {
    searchTerm: '',
  };


  render() {
    const { title, items, onToggleItem, onRemoveItem } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        { this.props.render && this.props.render() }
        {items.map(item => (
            <Item
              key={item.id}
              onCheckOff={() => onToggleItem(item)}
              onRemove={() => onRemoveItem(item.id)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;

Items.propTypes = {
  items: PropTypes.array.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
}
