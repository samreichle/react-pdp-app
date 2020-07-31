import React from 'react';
import { connect } from 'react-redux';
import { startRemoveGoal } from '../actions/goals';
import IndividualGoal from './IndividualGoal'

const ViewGoalPage = (props) => {
    return (
        <div>
            <IndividualGoal 
                goal={props.goal}
                dispatch={props.dispatch}
                history={props.history}
            />
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        goal: state.goals.find((goal) => goal.id === props.match.params.id),
        dispatch: props.dispatch,
        history: props.history
    };
};

export default connect(mapStateToProps)(ViewGoalPage);