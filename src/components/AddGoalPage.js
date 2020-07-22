import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { startAddGoal } from '../actions/goals';

const AddGoalPage = (props) => (
    <div>
        <h1>Add Goal</h1>
        <GoalForm 
            onSubmit={(goal) => {
                props.dispatch(startAddGoal(goal));
                props.history.push('/goals-dashboard');
            }}
        />
    </div>
);

export default connect()(AddGoalPage);