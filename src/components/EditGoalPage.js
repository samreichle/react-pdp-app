import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { editGoal, removeGoal } from '../actions/goals';


const EditGoalPage = (props) => {
    return (
        <div>
            <GoalForm 
                goal={props.goal}
                onSubmit={(goal) => {
                    props.dispatch(editGoal(props.goal.id, goal));
                    props.history.push('/goals-dashboard');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeGoal({ id: props.goal.id }));
                props.history.push('/goals-dashboard');
            }}>
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        goal: state.goals.find((goal) => goal.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditGoalPage);