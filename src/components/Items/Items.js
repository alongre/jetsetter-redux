import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: '',
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  };

  render() {
    const { title, items, onToggleItem, onRemoveItem } = this.props;
    const { searchTerm } = this.state;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={onToggleItem}
              onRemove={onRemoveItem}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;

Items.PropTypes = {
  items: PropTypes.array.isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
}
