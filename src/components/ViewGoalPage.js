import React from 'react';
import { connect } from 'react-redux';
import { startRemoveGoal } from '../actions/goals';
import IndividualGoal from './IndividualGoal'

const ViewGoalPage = (props) => {
    return (
        <div>
            <IndividualGoal 
                goal={props.goal}
            />
            <button onClick={() => {
                props.dispatch(startRemoveGoal({ id: props.goal.id }));
                props.history.push('/dashboard');
            }}>
                Delete Goal
            </button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        goal: state.goals.find((goal) => goal.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(ViewGoalPage);