
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';


// Constants


// Component

export default class SidebarItem extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() { }


  // Event handlers

  handleClick = (e) => {
    this.props.onSelect(this.props.className);
  }


  // Methods


  // React

  render() {

    const classLi = classNames({
      [this.props.className]: true,
      selected: this.props.selected
    })

    return (
      <li
        className={classLi}
        onClick={this.handleClick}>

        <p
          className='icon'>
          {this.props.icon}
        </p>

        <p
          className='label'>
          {this.props.label}
        </p>

      </li>
    );

  }

}
