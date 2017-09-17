
// Imports

import * as React from 'react';
import * as _ from 'lodash';


// Interfaces

interface Category {
  id:number;
  label:string;
}

interface Endeavor {
  id:number;
  label:string;
  category_id:number;
}

interface ActivityEndeavor {
  endeavor_id:number;
  weight:number;
}

interface Activity {
  id:number;
  label:string;
  endeavors:ActivityEndeavor[];
}


// Constants

const CAT_NAMES:string[] = [
  'Social',
  'Work',
  'Play',
  'Well-being'
];

const categories:Category[] = CAT_NAMES.map((name:string, i:number):Category => ({
  id: i,
  label: name
}));

const endeavors:Endeavor[] = [

  {
    id: 0,
    label: 'Spending time with friends',
    category_id: 0
  },
  {
    id: 1,
    label: 'Meeting new people',
    category_id: 0
  },

  {
    id: 2,
    label: 'Advancing vocation',
    category_id: 1
  },
  {
    id: 3,
    label: 'Giving back',
    category_id: 1
  },
  {
    id: 4,
    label: 'Keeping life organized',
    category_id: 1
  },
  {
    id: 5,
    label: 'Making bucks',
    category_id: 1
  },

  {
    id: 6,
    label: 'Having fun',
    category_id: 2
  },
  {
    id: 7,
    label: 'Creating interesting memories',
    category_id: 2
  },
  {
    id: 8,
    label: 'Experiencing nature',
    category_id: 2
  },
  {
    id: 9,
    label: 'Experiencing culture',
    category_id: 2
  },
  {
    id: 10,
    label: 'Learning / practicing skill',
    category_id: 2
  },
  {
    id: 11,
    label: 'Making something',
    category_id: 2
  },
  {
    id: 12,
    label: 'Encountering new ideas',
    category_id: 2
  },
  {
    id: 13,
    label: 'Slowing down',
    category_id: 2
  },

  {
    id: 14,
    label: 'Nurturing physical health',
    category_id: 3
  },
  {
    id: 15,
    label: 'Nurturing emotional well-being',
    category_id: 3
  },

];

const activities:Activity[] = [
  {
    id: 0,
    label: 'Camping',
    endeavors: [
      { endeavor_id:  0, weight: 2 },
      { endeavor_id:  6, weight: 2 },
      { endeavor_id:  7, weight: 3 },
      { endeavor_id:  8, weight: 3 },
      { endeavor_id: 13, weight: 3 },
    ]
  },
  {
    id: 1,
    label: 'Journaling',
    endeavors: [
      { endeavor_id:  4, weight: 3 },
      { endeavor_id: 12, weight: 1 },
      { endeavor_id: 13, weight: 3 },
    ]
  },
  {
    id: 2,
    label: 'Teaching',
    endeavors: [
      { endeavor_id:  1, weight: 1 },
      { endeavor_id:  2, weight: 2 },
      { endeavor_id:  3, weight: 2 },
      { endeavor_id:  5, weight: 1 },
      { endeavor_id:  7, weight: 1 },
      { endeavor_id: 10, weight: 3 },
    ]
  },
  {
    id: 3,
    label: 'Playing soccer',
    endeavors: [
      { endeavor_id:  0, weight: 3 },
      { endeavor_id:  6, weight: 3 },
      { endeavor_id:  7, weight: 1 },
      { endeavor_id: 10, weight: 3 },
      { endeavor_id: 14, weight: 3 },
      { endeavor_id: 15, weight: 2 },
    ]
  }
];


// Class

export default class App extends React.Component<undefined, undefined> {

  // Constructor

  constructor() {
    super();
  }


  // Methods

  getEndeavorsByCategory(category:Category) {
    return _.filter(endeavors, (e) => (
      e.category_id === category.id
    ));
  }


  // React

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {categories.map((category) => {

              let catEnds    = this.getEndeavorsByCategory(category),
                count    = catEnds.length;

              if (count) {
                return (
                  <th key={category.id} colSpan={count}>{category.label}</th>
                );
              }

            })}
          </tr>
          <tr>
            <th>Activity</th>
            {categories.map((category) => {

              let catEnds    = this.getEndeavorsByCategory(category);

              return catEnds.map((endeavor) => (
                <th key={endeavor.id}>{endeavor.label}</th>
              ));

            })}
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <th>{activity.label}</th>

              {categories.map((category) => {

                let catEnds    = this.getEndeavorsByCategory(category);

                return catEnds.map((endeavor) => {

                  const ae  = _.find(activity.endeavors, (ae) => (
                    ae.endeavor_id === endeavor.id
                  ));

                  return (
                    <td key={endeavor.id} className={ ae && 'weight-' + ae.weight }>
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
