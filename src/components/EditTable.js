
// Imports

import * as React from 'react';

import fireApp from '../utils/fireApp';

import App from './App';
import EditTableCell from './EditTableCell';


// Constants


// Component

export default class EditTable extends React.Component {

  // Constructor

  constructor() {

    super();

    this.initBindings();
    this.initState();

  }

  initBindings() {

    this.handleCategoriesValue = this.handleCategoriesValue.bind(this);
    this.handleValuesValue     = this.handleValuesValue.bind(this);
    this.handleActivitiesValue = this.handleActivitiesValue.bind(this);

  }
  initState() {

    this.state = {
      categories: [],
      values: [],
      activities: []
    }

  }


  // Event handlers

  handleCategoriesValue(data) {

    this.setState({
      categories: data.val()
    });

  }
  handleValuesValue(data) {

    this.setState({
      values: data.val()
    });

  }
  handleActivitiesValue(data) {

    this.setState({
      activities: data.val()
    });

  }


  // Methods

  deleteActivity(actKey) {

    this.activitiesRef.child(actKey).remove();

  }

  getValuesByCategoryKey(catKey, values) {

    const obj = {};

    _.each(values, (value, valKey) => {

      if (value.category_key === catKey) {
        obj[valKey] = value;
      }

    });

    return obj;

  }


  // React

  componentDidMount() {

    const userId  = 'default';

    this.categoriesRef = fireApp.database().ref(`categories/${userId}`);
    this.valuesRef     = fireApp.database().ref(`values/${userId}`);
    this.activitiesRef = fireApp.database().ref(`activities/${userId}`);

    this.categoriesRef.on('value', this.handleCategoriesValue);
    this.valuesRef.on('value', this.handleValuesValue);
    this.activitiesRef.on('value', this.handleActivitiesValue);

  }

  componentWillUnmount() {

    if (this.categoriesRef) this.categoriesRef.off('value', this.handleCategoriesValue);
    if (this.valuesRef) this.valuesRef.off('value', this.handleValuesValue);
    if (this.activitiesRef) this.activitiesRef.off('value', this.handleActivitiesValue);

  }

  render() {

    const categories = this.state.categories,
          values     = this.state.values,
          activities = this.state.activities;

    const hasAllData =
      !_.isEmpty(categories) &&
      !_.isEmpty(values) &&
      !_.isEmpty(activities);

    if (!hasAllData) {
      return (
        <p>Loading...</p>
      );
    }

    return (

      <table>

        <thead>
          <tr>
            <th />

            {_.map(categories, (category, key) => {

              if (!category) return null;

              let catVals = this.getValuesByCategoryKey(key, values),
                  count   = _.size(catVals);

              if (count) {
                return (
                  <th
                    key={key}
                    colSpan={count} >
                    {category.label}
                  </th>
                );
              }

            })}
          </tr>

          <tr>

            <th>Activity</th>

            {_.map(categories, (category, catKey) => {

              let catVals = this.getValuesByCategoryKey(catKey, values);

              return _.map(catVals, (value, valKey) => (
                <th
                  key={valKey}>
                  {value.label}
                </th>
              ));

            })}

          </tr>

        </thead>

        <tbody>

          {_.map(activities, (activity, actKey) => (
            <tr key={actKey}>
              <th>
                {activity.label}
                <button
                  onClick={() => this.deleteActivity(actKey)}>
                  &times;
                </button>
              </th>

              {_.map(categories, (category, catKey) => {

                let catVals = this.getValuesByCategoryKey(catKey, values);

                return _.map(catVals, (value, valKey) => {

                  const valLink = _.find(activity.values, (valLink) => (
                    valLink.value_key === valKey
                  ));

                  return (
                    <EditTableCell
                      key={valKey}
                      valLink={valLink}
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
