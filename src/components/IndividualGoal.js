import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class IndividualGoal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.goal ? props.goal.id : '',
            goalName: props.goal ? props.goal.goalName : '',
            strategies: props.goal ? props.goal.strategies : '',
            deadline: props.goal ? moment(props.goal.deadline) : moment(),
            completionStatus:props.goal ? props.goal.completionStatus: false
        };
    }

    checkCompletionStatus = () => {
        if (this.state.completionStatus === true || this.state.completionStatus === 'true') {
            return 'Complete'
        } else if (this.state.completionStatus === false || this.state.completionStatus === 'false'){
            return 'Incomplete'
        }
    };

    formatDeadline = () => {
        const newDeadline=  (moment(this.state.deadline));
        return (newDeadline.format('MMMM Do, YYYY'))
    };

    render() {
        return (
            <div>
                <h2>Goal: </h2>
                <p>{this.state.goalName}</p>
                <h2>Strategies: </h2>
                <p>{this.state.strategies}</p>
                <h2>Deadline: </h2>
                <p>{this.formatDeadline()}</p>
                <h2>Completion Status: </h2>
                <p>{this.checkCompletionStatus()}</p>

                <Link to={`/edit/${this.state.id}`}>
                    <button>Edit Goal</button>
                </Link>
            </div>
        )
    }
}