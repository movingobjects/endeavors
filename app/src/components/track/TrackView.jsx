
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from '../App';


// Constants


// Component

export default class TrackView extends React.Component {

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
      'track': true
    })

    return (
      <section
        className={classSection}>

        <header>
          <h2>Track</h2>
        </header>

        <article>

          <h2>To do.</h2>

        </article>

      </section>

    );

  }

}
