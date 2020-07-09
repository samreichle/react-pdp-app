import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// now with no arguments gives the current date/time when code runs
const now = moment();
console.log(now.format('MMMM Do, YYYY'));


export default class GoalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goalName: props.goal ? props.goal.goalName : '',
            strategies: props.goal ? props.goal.strategies : '',
            deadline: props.goal ? moment(props.goal.deadline) : moment(),
            completionStatus:props.goal ? props.goal.completionStatus: false,
            calendarFocused: false,
            error: ''
        };
    }

    onGoalNameChange = (e) => {
        const goalName = e.target.value;
        this.setState(() => ({ goalName }));
    };

    onStrategiesChange = (e) => {
        const strategies = e.target.value;
        this.setState(() => ({ strategies }));
    };

    onCompletionStatusChange = (e) => {
        const completionStatus = e.target.value;
        this.setState(() => ({ completionStatus }));
    };

    onDateChange = (deadline) => {
        this.setState(() => ({ deadline }));
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.goalName || !this.state.strategies) {
            this.setState(() => ({ error: 'Please provide a goal and strategies.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                goalName: this.state.goalName,
                strategies: this.state.strategies,
                deadline: this.state.deadline.valueOf(),
                completionStatus: this.state.completionStatus
            });
        }
    };

    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Goal"
                        autoFocus
                        value={this.state.goalName}
                        onChange={this.onGoalNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Strategies"
                        autoFocus
                        value={this.state.strategies}
                        onChange={this.onStrategiesChange}
                    />
                    <SingleDatePicker 
                        date={this.state.deadline}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <select
                        value={this.state.completionStatus}
                        onChange={this.onCompletionStatusChange}
                    >
                        <option value={true}>Complete</option>
                        <option value={false}>Incomplete</option>
                    </select>
                    <button>Add Goal</button>
                </form>
            </div>
        )
    }
}