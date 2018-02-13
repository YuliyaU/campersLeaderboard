import {Component} from 'react';
import {CamperRow} from './CamperRow';
import {getCampers} from '../api/campersApi';

export class CampersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campers: [{
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
            isTopRecentCampersDisplayed: true
        };
    }

    componentDidMount() {
        if (this.state.isTopRecentCampersDisplayed) {
            getCampers('recent').then(results => {
                this.setState({
                    campers: results
                });
            });            
        } else {
            getCampers('alltime').then(results => {
                this.setState({
                    campers: results
                });
            });            
        }        
    }

    render() {
        var rank = 0;

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
                    {this.state.campers.map((camper, index) => 
                        <CamperRow key={index}
                                rank={rank+=1}
                                camper={camper}/>)}
                </tbody>
            </table>
        );
    }
}