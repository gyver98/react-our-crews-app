import React, { Component } from 'react';
import FilterButton from './FilterButton';

class FilterCrews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'all',
      filterMember: ''
    }
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleItemClick = ( name, filterMember ) => {
    this.setState({ activeItem: name, filterMember: filterMember });
    this.props.setFilterActive(filterMember);
  }
    

  render() {
    const { activeItem } = this.state;

    return (
      <ul className="filter-member">
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'all'} name='all' filterMember='' />
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'fed'} name='fed' filterMember='fed-active'/>
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'dev'} name='dev' filterMember='dev-active'/>
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'design'} name='design' filterMember='design-active'/>
      </ul>
    )
  }
}

export default FilterCrews;
