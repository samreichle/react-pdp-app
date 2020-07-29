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
            strategyOne: props.goal ? props.goal.strategyOne : '',
            strategyTwo: props.goal ? props.goal.strategyTwo : '',
            strategyThree: props.goal ? props.goal.strategyThree : '',
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

    onStrategyOneChange = (e) => {
        const strategyOne = e.target.value;
        this.setState(() => ({ strategyOne }));
    };

    onStrategyTwoChange = (e) => {
        let strategyTwo = '';
        if (e.target.value){
            strategyTwo = e.target.value;
            this.setState(() => ({ strategyTwo }));
        } else {
            this.setState(() => ({ strategyTwo }));
        }
    };

    onStrategyThreeChange = (e) => {
        let strategyThree = '';
        if (e.target.value){
            strategyThree = e.target.value;
            this.setState(() => ({ strategyThree }));
        } else {
            this.setState(() => ({ strategyThree }));
        }
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

        if (!this.state.goalName || !this.state.strategyOne) {
            this.setState(() => ({ error: 'Please provide a goal and at least one strategy.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                goalName: this.state.goalName,
                strategyOne: this.state.strategyOne,
                strategyTwo: this.state.strategyTwo,
                strategyThree: this.state.strategyThree,
                deadline: this.state.deadline.valueOf(),
                completionStatus: this.state.completionStatus
            });
        }
    };

    render () {
        return (
            <div className="content-container">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Goal"
                        autoFocus
                        value={this.state.goalName}
                        onChange={this.onGoalNameChange}
                    />
                    <p></p>
                    <div>
                        1. <textarea
                        placeholder="Strategy"
                        value={this.state.strategyOne}
                        onChange={this.onStrategyOneChange}
                        >
                        </textarea>
                        <p></p>
                        2. <textarea
                            placeholder="Strategy"
                            value={this.state.strategyTwo}
                            onChange={this.onStrategyTwoChange}
                        >
                        </textarea>
                        <p></p>
                        3. <textarea
                            placeholder="Strategy"
                            value={this.state.strategyThree}
                            onChange={this.onStrategyThreeChange}
                        >
                        </textarea>
                    </div>
                    <p></p>
                    <div>
                        <SingleDatePicker 
                        date={this.state.deadline}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <select
                        value={this.state.completionStatus}
                        onChange={this.onCompletionStatusChange}
                        >
                        <option value={true}>Complete</option>
                        <option value={false}>Incomplete</option>
                        </select>
                    </div>
                    <button>Save Goal</button>
                </form>
            </div>
        )
    }
}