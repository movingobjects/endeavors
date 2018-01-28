
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from './App';
import EditTable from './EditTable';
import ValueInput from './ValueInput';
import ActivityInput from './ActivityInput';


// Constants


// Component

export default class CustomizeView extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

  }

  initBindings() { }
  initState() { }


  // Event handlers


  // Methods


  // React

  render() {

    const classSection = classNames({
      'customize-view': true
    })

    return (
      <section
        className={classSection}>

        <section
          className='edit-table'>
          <EditTable />
        </section>

        <section
          className='input-forms'>
          <ValueInput />
          <ActivityInput />
        </section>

      </section>
    );

  }

}
