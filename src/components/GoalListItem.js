import React from 'react';
import { Link } from 'react-router-dom';



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
            completionStatus: props.completionStatus
        }
    }

    checkCompletionStatus = () => {
        if (this.state.completionStatus === true || this.state.completionStatus === 'true') {
            return 'Complete'
        } else if (this.state.completionStatus === false || this.state.completionStatus === 'false'){
            return 'Incomplete'
        }
    };

    render() {
        return (
            <div>
                <Link to={`/edit/${this.props.id}`}>
                    <h3>{this.props.goalName}</h3>
                </Link>
                <p>{this.checkCompletionStatus()} </p>
            </div>
        )
    }
}

export default GoalListItem;

