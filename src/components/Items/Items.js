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
    const { title, items, onCheckOff, onRemove } = this.props;
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
              onCheckOff={onCheckOff}
              onRemove={onRemove}
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
  toggleItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}
