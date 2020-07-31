import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { startRemoveGoal } from '../actions/goals';


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
                    <ol>
                        <li>{this.props.goal.strategyOne}</li>
                        <li>{this.props.goal.strategyTwo}</li>
                        <li>{this.props.goal.strategyThree}</li>
                    </ol>
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
                <div className="individual-goal">
                    <div className="individual-goal__goal-strats">
                        <p><b>Goal: </b> {this.props.goal.goalName}</p>
                        <div> 
                            <p><b>Strategies: </b></p>
                            <div className="individual-goal__strats">
                                {this.checkStrategiesToDisplay()}
                            </div>
                        </div>
                    </div>
                    <div className="individual-goal__other">
                        <p><b>Deadline: </b> {this.formatDeadline()}</p>
                        <p><b>Status: </b> {this.checkCompletionStatus()}</p>
                        <div>
                            <Link to={`/edit/${this.props.goal.id}`}>
                            <button className="button__edit-delete">Edit Goal</button>
                            </Link>
                        </div>
                        <div>
                            <button className="button__edit-delete" onClick={() => {
                                this.props.dispatch(startRemoveGoal({ id: this.props.goal.id }));
                                this.props.history.push('/dashboard');
                            }}>
                                Delete Goal
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}