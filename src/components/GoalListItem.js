import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class GoalListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    checkCompletionStatus = () => {
        if (this.props.completionStatus === true || this.props.completionStatus === 'true') {
            return 'Complete'
        } else if (this.props.completionStatus === false || this.props.completionStatus === 'false'){
            return 'Incomplete'
        }
    };

    formatDeadline = () => {
        const newDeadline=  (moment(this.props.deadline));
        return (newDeadline.format('MMMM Do, YYYY'))
    };
   
    render() {
        return (
            <div>
                <Link to={`/goal/${this.props.id}`}>
                    <h3>{this.props.goalName}</h3>
                </Link>
                <p>{this.checkCompletionStatus()} - Deadline: {this.formatDeadline()}</p>
            </div>
        )
    }
}

export default GoalListItem;

