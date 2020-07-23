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

    formatDeadline = () => {
        const newDeadline=  (moment(this.props.goal.deadline));
        return (newDeadline.format('MMMM Do, YYYY'))
    };

    render() {
        return (
            <div>
                <h2>Goal: </h2>
                <p>{this.props.goal.goalName}</p>
                <h2>Strategies: </h2>
                <p>{this.props.goal.strategies}</p>
                <h2>Deadline: </h2>
                <p>{this.formatDeadline()}</p>
                <h2>Completion Status: </h2>
                <p>{this.checkCompletionStatus()}</p>

                <Link to={`/edit/${this.props.goal.id}`}>
                    <button>Edit Goal</button>
                </Link>
            </div>
        )
    }
}