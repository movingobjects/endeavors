
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';
import SidebarItem from './SidebarItem';


// Constants


// Component

export default class Sidebar extends React.Component {

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

          <SidebarItem
            label='Track'
            className='track'
            icon='check_box'
            selected={this.props.mode === 'track'}
            onSelect={this.handleItemSelect}/>

          <SidebarItem
            label='Evaluate'
            className='evaluate'
            icon='timeline'
            selected={this.props.mode === 'evaluate'}
            onSelect={this.handleItemSelect}/>

        </ul>

        <ul
          className='sub-nav'>

          <SidebarItem
            label='Customize'
            className='customize'
            icon='fingerprint'
            selected={this.props.mode === 'customize'}
            onSelect={this.handleItemSelect}/>

          <SidebarItem
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
