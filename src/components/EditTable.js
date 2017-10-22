
// Imports

import * as React from 'react';

import App from './App';
import EditTableCell from './EditTableCell';


// Constants


// Component

export default class EditTable extends React.Component {

  // Constructor

  constructor() {

    super();

  }


  // Helpers

  getValuesByCategory(category) {

    const values = App.config.values;

    return values.filter((value) => (value.category_id === category.id));

  }


  // React

  render() {

    const categories = App.config.categories,
          values     = App.config.values,
          activities = App.config.activities;

    return (

      <table>

        <thead>
          <tr>
            <th></th>
            {categories.map((category) => {

              let catEnds = this.getValuesByCategory(category),
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

              let catEnds = this.getValuesByCategory(category);

              return catEnds.map((value) => (
                <th
                  key={value.id}>
                  {value.label}
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

                let catEnds = this.getValuesByCategory(category);

                return catEnds.map((value) => {

                  const ae = _.find(activity.values, (ae) => (
                    ae.value_id === value.id
                  ));

                  return (
                    <EditTableCell
                      key={value.id}
                      value={ae}
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
