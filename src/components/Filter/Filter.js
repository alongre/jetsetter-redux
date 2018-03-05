import React, { PureComponent } from 'react';

class Filter extends PureComponent {
  handleChange = event => {
    const value = event.target.value;
    console.log(this.props);
    this.props.updateFilter(value);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <input
        className="Items-searchTerm"
        value={searchTerm}
        onChange={this.handleChange}
      />
    );
  }
}

export default Filter;