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
                <Link className="list-item" to={`/goal/${this.props.id}`}>
                    <div>
                        <h3 className="list-item__title">{this.props.goalName}</h3>
                        <span className="list-item__sub-title">Deadline: {this.formatDeadline()}</span>
                    </div>
                    <h3 className="list-item__title">{this.checkCompletionStatus()}</h3>
                </Link>
            </div>
        )
    }
}

export default GoalListItem;

