import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';



// const GoalListItem = ({id, goalName, deadline, completionStatus}) => (
//     <div>
//         <Link to={`/edit/${id}`}>
//             <h3>{goalName}</h3>
//         </Link>
//         <p>{completionStatus} -- </p>
//     </div>
// );



class GoalListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            goalName: props.goalName,
            completionStatus: props.completionStatus,
            deadline: props.deadline
        }
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
                <Link to={`/goal/${this.state.id}`}>
                    <h3>{this.state.goalName}</h3>
                </Link>
                <p>{this.checkCompletionStatus()} - Deadline: {this.formatDeadline()}</p>
            </div>
        )
    }
}

export default GoalListItem;

