import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { startAddGoal } from '../actions/goals';

const AddGoalPage = (props) => (
    <div className="content-container">
        <div className="page-header">
                <h1 className="page-header__title">Add Goal</h1>
        </div>
        <GoalForm 
            onSubmit={(goal) => {
                props.dispatch(startAddGoal(goal));
                props.history.push('/dashboard');
            }}
        />
    </div>
);

export default connect()(AddGoalPage);