
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import { maths, net } from 'varyd-utils';

import EndeavorsTable from './EndeavorsTable';


// Constants

const DATA_PATHS = [
  'assets/config.json'
];


// Class

export default class App extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

    this.loadAppData();

  }

  initBindings() { }
  initState() {

    this.state = {
      appLoaded: false
    }

  }


  // Event handlers

  handleDataLoad(data) {

    App.config    = data[0];

    this.setState({
      appLoaded: true
    });

  }
  handleDataError(error) {

    console.log(error);

  }


  // Methods

  loadAppData() {

    Promise.all(DATA_PATHS.map((url) => net.xhrFetch(url)))
      .then((responses) => Promise.all(responses.map((r) => r.json())))
      .then((responses) => this.handleDataLoad(responses))
      .catch((error) => this.handleDataError(error));

  }


  // React

  render() {

    return (this.state.appLoaded) ? <EndeavorsTable /> : (null);

  }

}
