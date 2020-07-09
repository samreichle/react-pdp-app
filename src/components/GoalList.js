import React from 'react';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';
import selectGoals from '../selectors/goals';

const GoalList = (props) => (
    <div>
        <h1>Goal List</h1>
        {props.goals.map((goal) => {
            return <GoalListItem key={goal.id} {...goal}/>;
        })}
    </div>
);

// Allows us to choose what we want to access off of the store
const mapStateToProps = (state) => {
    return {
        goals: selectGoals(state.goals, state.filters)
    };
};

// connect creates new HOC with what we want from store and wrapped component
// First one take mapStateToProps second one contains what we want to render

export default connect(mapStateToProps)(GoalList);

