
// Imports

import * as React from 'react';

import App from './App';
import EndeavorsTableCell from './EndeavorsTableCell';


// Constants


// Component

export default class EndeavorsTable extends React.Component {

  // Constructor

  constructor() {

    super();

  }


  // Helpers

  getEndeavorsByCategory(category) {

    const endeavors = App.config.endeavors;

    return endeavors.filter((endeavor) => (endeavor.category_id === category.id));

  }


  // React

  render() {

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
                    <EndeavorsTableCell
                      key={endeavor.id}
                      endeavor={ae}
                      activity={activity} />
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
