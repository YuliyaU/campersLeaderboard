import {Component} from 'react';
import {CamperRow} from './CamperRow';

export class CampersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topTotalCampers: [{
                "username":"sjames1958gm",
                "img":"https://avatars1.githubusercontent.com/u/4639625?v=4",
                "alltime":8597,
                "recent":116,
                "lastUpdate":"2018-02-03T18:14:36.182Z"
            }, {
                "username":"Manish-Giri",
                "img":"https://avatars2.githubusercontent.com/u/11348778?v=4",
                "alltime":6465,
                "recent":9,
                "lastUpdate":"2018-02-03T19:01:33.088Z"
            }, {
                "username":"anthonygallina1",
                "img":"https://avatars.githubusercontent.com/u/11003055?v=3",
                "alltime":5477,
                "recent":24,
                "lastUpdate":"2018-02-03T19:06:48.785Z"
            }, {
                "username":"diomed",
                "img":"https://avatars3.githubusercontent.com/u/72777?v=3",
                "alltime":5061,
                "recent":15,
                "lastUpdate":"2018-02-03T19:03:03.159Z"}],
            topRecentCampers: [{
                "username":"sjames1958gm",
                "img":"https://avatars1.githubusercontent.com/u/4639625?v=4",
                "alltime":8597,
                "recent":116,
                "lastUpdate":"2018-02-03T18:14:36.182Z"
            },{
                "username":"rahsheen",
                "img":"https://avatars1.githubusercontent.com/u/4641959?v=4",
                "alltime":1053,
                "recent":82,    
                "lastUpdate":"2018-02-03T18:14:37.726Z"
            },{
                "username":"kbaig",
                "img":"https://avatars3.githubusercontent.com/u/24844214?v=4",
                "alltime":246,
                "recent":72,
                "lastUpdate":"2018-02-03T19:13:34.200Z"
            },{
                "username":"zcassini",
                "img":"https://avatars1.githubusercontent.com/u/373576?v=4",
                "alltime":1634,
                "recent":67,
                "lastUpdate":"2018-02-03T19:13:34.201Z"}],
            isTopRecentCampersDisplayed: true
        };
    }

    render() {
        var rank = 0, leaderbaord;

        if (this.state.isTopRecentCampersDisplayed) {
            leaderbaord = this.state.topRecentCampers.map((camper, index) => 
            <CamperRow key={index}
                       rank={rank+=1}
                       camper={camper}/>);
        } else {
            leaderbaord = this.state.topTotalCampers.map((camper, index) => 
            <CamperRow key={index}
                       rank={rank+=1}
                       camper={camper}/>); 
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper's Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderbaord}
                </tbody>
            </table>
        );
    }
}