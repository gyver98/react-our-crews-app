import React from 'react';
//import classNames from 'classnames';
//className={classNames("filter-member__option", {"active": props.active })}

const FilterButton = (props) => (
  <li>
    <button 
      onClick={(e) => props.handleItemClick(props.name, props.filterMember)}  
      className={`filter-member__option ${props.active ? 'active': ''}`}
      data-filtermember={props.filterMember}>
      {props.name}
    </button>
  </li>
)

        
export default FilterButton;