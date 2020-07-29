import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class IndividualGoal extends React.Component {

    constructor(props) {
        super(props);
    }

    checkCompletionStatus = () => {
        if (this.props.goal.completionStatus === true || this.props.goal.completionStatus === 'true') {
            return 'Complete'
        } else if (this.props.goal.completionStatus === false || this.props.goal.completionStatus === 'false'){
            return 'Incomplete'
        }
    };

    checkStrategiesToDisplay = () => {
        if (this.props.goal.strategyOne && this.props.goal.strategyTwo && this.props.goal.strategyThree){
            return (
                <div>
                    <p><b>1.</b> {this.props.goal.strategyOne}</p>
                    <p><b>2.</b> {this.props.goal.strategyTwo}</p>
                    <p><b>3.</b> {this.props.goal.strategyThree}</p>
                </div>
            )
        } else if (this.props.goal.strategyOne && this.props.goal.strategyTwo && (this.props.goal.strategyThree === '')){
            return (
                <div>
                    <p><b>1.</b> {this.props.goal.strategyOne}</p>
                    <p><b>2.</b> {this.props.goal.strategyTwo}</p>
                </div>
            )
        } else if (this.props.goal.strategyOne && (this.props.goal.strategyTwo === '') && (this.props.goal.strategyThree === '')) {
            return (
                <div>
                    <p><b>1.</b> {this.props.goal.strategyOne}</p>
                </div>
            )
        }
    };
    
    formatDeadline = () => {
        const newDeadline=  (moment(this.props.goal.deadline));
        return (newDeadline.format('MMMM Do, YYYY'))
    };

    render() {
        return (
            <div className="content-container">
                <div>
                    <h2>Goal: </h2>
                    <p>{this.props.goal.goalName}</p>
                </div>
                <div> 
                    <h2>Strategies: </h2>
                    {this.checkStrategiesToDisplay()}
                </div>
                <div>
                    <h3>Deadline: {this.formatDeadline()}</h3>
                    <h3>Completion Status: {this.checkCompletionStatus()}</h3>
                </div>
                <Link to={`/edit/${this.props.goal.id}`}>
                    <button>Edit Goal</button>
                </Link>
            </div>
        )
    }
}