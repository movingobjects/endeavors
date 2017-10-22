
// Imports

import * as React from 'react';
import * as _ from 'lodash';

import { maths, net } from 'varyd-utils';


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

  getEndeavorsByCategory(category) {

    const endeavors = App.config.endeavors;

    return endeavors.filter((endeavor) => (endeavor.category_id === category.id));

  }


  // React

  render() {

    if (!this.state.appLoaded) {
      return (null);
    }

    const categories = App.config.categories,
          endeavors  = App.config.endeavors,
          activities = App.config.activities;

    return (
      <table>

        <thead>
          <tr>
            <th></th>
            {categories.map((category) => {

              let catEnds = this.getEndeavorsByCategory(category),
                  count   = catEnds.length;

              if (count) {
                return (
                  <th
                    key={category.id}
                    colSpan={count} >
                    {category.label}
                  </th>
                );
              }

            })}
          </tr>
          <tr>
            <th>Activity</th>
            {categories.map((category) => {

              let catEnds = this.getEndeavorsByCategory(category);

              return catEnds.map((endeavor) => (
                <th
                  key={endeavor.id}>
                  {endeavor.label}
                </th>
              ));

            })}
          </tr>
        </thead>

        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <th>{activity.label}</th>

              {categories.map((category) => {

                let catEnds = this.getEndeavorsByCategory(category);

                return catEnds.map((endeavor) => {

                  const ae = _.find(activity.endeavors, (ae) => (
                    ae.endeavor_id === endeavor.id
                  ));

                  return (
                    <td
                      key={endeavor.id}
                      className={ ae && 'weight-' + ae.weight }>
                      {ae && ae.weight}
                    </td>
                  );

                });

              })}

            </tr>
          ))}
        </tbody>

      </table>

    );

  }

}
