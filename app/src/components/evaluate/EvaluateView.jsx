
// Imports

import * as React from 'react';
import * as classNames from 'classnames';

import App from '../App';


// Constants


// Component

export default class EvaluateView extends React.Component {

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
      'evaluate': true
    })

    return (
      <section
        className={classSection}>

        <header>
          <h2>Evaluate</h2>
        </header>

        <article>

          <h2>To do.</h2>

        </article>

      </section>

    );

  }

}
