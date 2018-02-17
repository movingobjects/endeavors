
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from '../App';

import Table from './Table';
import ValueForm from './ValueForm';
import ActivityForm from './ActivityForm';


// Constants


// Component

export default class CustomizeView extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initState();

  }

  initState() { }


  // Event handlers


  // Methods


  // React

  render() {

    const classSection = classNames({
      'customize': true
    })

    return (
      <section
        className={classSection}>

        <header>
          <h2>Customize</h2>
        </header>

        <article>

          <h2>Edit Activities</h2>
          <Table />

          <h2>Add new</h2>
          <ValueForm />
          <ActivityForm />

        </article>

      </section>

    );

  }

}
