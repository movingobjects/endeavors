
import * as React from "react";
import * as _ from "lodash";

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

const CAT_NAMES:string[] = [ "Social", "Work", "Play", "Well-being" ];

const categories:Category[] = CAT_NAMES.map((name:string, i:number):Category => ({
	id: i,
	label: name
}));

const endeavors:Endeavor[] = [
	{
		id: 0,
		label: "Meeting new people",
		category_id: 0
	},
	{
		id: 1,
		label: "Keeping life organized",
		category_id: 1
	},
	{
		id: 2,
		label: "Experiencing nature",
		category_id: 2
	},
	{
		id: 3,
		label: "Nurturing physical well-being",
		category_id: 3
	},
];

const activities:Activity[] = [
	{
		id: 0,
		label: "Camping",
		endeavors: [
			{
				endeavor_id: 2,
				weight: 3
			},
			{
				endeavor_id: 3,
				weight: 1
			}
		]
	},
	{
		id: 1,
		label: "Journaling",
		endeavors: [
			{
				endeavor_id: 1,
				weight: 3
			}
		]
	},
];

// const endeavorsById = _.keyBy(endeavors, endeavor => endeavor.id);
// const activitiesById = _.keyBy(activities, activity => activity.id);

export default class App extends React.Component<undefined, undefined> {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Activity</th>
						{endeavors.map((endeavor) => (
							<th key={endeavor.id}>{endeavor.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{activities.map((activity) => (
						<tr key={activity.id}>
							<td>{activity.label}</td>
							{endeavors.map((endeavor) => (
								<td key={endeavor.id}>
									{activity.endeavors.map((ae) => (
										ae.endeavor_id == endeavor.id &&
										<span key="ae.endeavor_id">
											{ae.weight}
										</span>
									))}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}
