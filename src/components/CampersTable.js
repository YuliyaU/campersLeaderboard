import {Component} from 'react';
import {CamperRow} from './CamperRow';
import {getCampers} from '../api/campersApi';
import GoTriangleDown from 'react-icons/lib/go/triangle-down';

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
            isTopRecentCampersDisplayed: false
        };
        this.changeCampersTop = this.changeCampersTop.bind(this);
        this.displayCampers = this.displayCampers.bind(this);
    }

    changeCampersTop(e, isTopRecentCampersDisplayedState) {        
        if (this.state.isTopRecentCampersDisplayed !== isTopRecentCampersDisplayedState) {
            this.displayCampers(this.state.isTopRecentCampersDisplayed);
            this.setState({
                isTopRecentCampersDisplayed: !this.state.isTopRecentCampersDisplayed               
            });            
        } else {
            // Put campers sorting
        }                       
    }

    displayCampers(isTopRecentCampersDisplayed) {
        if (this.state.isTopRecentCampersDisplayed) {
            getCampers('alltime').then(results => {
                this.setState({
                    campers: results
                });
            });            
        } else {
            getCampers('recent').then(results => {
                this.setState({
                    campers: results
                });
            });            
        }              
    }

    componentWillMount() {
        this.displayCampers(this.isTopRecentCampersDisplayed);        
        this.setState({
            isTopRecentCampersDisplayed: !this.state.isTopRecentCampersDisplayed
        });  
    }

    render() {
        var rank = 0, total = false, recent = true; 
        // onClick isn't working
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper's Name</th>
                        <th><span onClick={(e) => 
                            this.changeCampersTop(e, recent)}>
                            Points in past 30 days {this.state.isTopRecentCampersDisplayed ? <GoTriangleDown /> : null}</span></th>
                        <th><span onClick={(e) => 
                            this.changeCampersTop(e, total)}>
                            All time points {this.state.isTopRecentCampersDisplayed ? null : <GoTriangleDown />}</span></th>
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