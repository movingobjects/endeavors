
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from '../App';
import Item from './Item';


// Constants


// Component

export default class SidebarView extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() { }


  // Event handlers

  handleItemSelect = (itemClass) => {

    this.props.onModeChange(itemClass);

  }


  // Methods


  // React

  render() {

    return (
      <aside>

        <ul
          className='main-nav'>

          <Item
            label='Track'
            className='track'
            icon='check_box'
            selected={this.props.mode === 'track'}
            onSelect={this.handleItemSelect}/>

          <Item
            label='Evaluate'
            className='evaluate'
            icon='timeline'
            selected={this.props.mode === 'evaluate'}
            onSelect={this.handleItemSelect}/>

        </ul>

        <ul
          className='sub-nav'>

          <Item
            label='Customize'
            className='customize'
            icon='fingerprint'
            selected={this.props.mode === 'customize'}
            onSelect={this.handleItemSelect}/>

          <Item
            label='Settings'
            className='settings'
            icon='settings_applications'
            selected={this.props.mode === 'settings'}
            onSelect={this.handleItemSelect}/>

        </ul>

      </aside>
    );

  }

}
