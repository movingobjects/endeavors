
import * as React from "react";
import * as _ from "lodash";

interface Category {
	id:number;
	label:string;
}

interface Endeavor {
	id:number;
	label:string;
	category:number; // id from Category
}

interface ActivityEndeavor {
	id:number; // id from Endeavor
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
		category: 0
	},
	{
		id: 1,
		label: "Keeping life organized",
		category: 1
	},
	{
		id: 2,
		label: "Experiencing nature",
		category: 2
	},
	{
		id: 3,
		label: "Nurturing physical well-being",
		category: 3
	},
];

const activities:Activity[] = [
	{
		id: 0,
		label: "Camping",
		endeavors: [
			{
				id: 2,
				weight: 3
			},
			{
				id: 3,
				weight: 1
			}
		]
	},
	{
		id: 1,
		label: "Journaling",
		endeavors: [
			{
				id: 1,
				weight: 3
			}
		]
	},
];



export default class App extends React.Component<undefined, undefined> {

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Activity</th>
						{
							endeavors.map((endeavor) => (
								<th key={endeavor.id}>{endeavor.label}</th>
							))
						}
					</tr>
				</thead>
				<tbody>
					{
						activities.map((activity) => (
							<tr key={activity.id}>
								<td>{activity.label}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}

}


