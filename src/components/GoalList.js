import React from 'react';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';
import selectGoals from '../selectors/goals';
import { Link } from 'react-router-dom';

const GoalList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Goal</div>
            <div className="show-for-mobile">Status</div>
            <div className="show-for-desktop">Goal</div>
            <div className="show-for-desktop">Status</div>
        </div>
        <div className="list-body">
            {
                props.goals.length === 0 ? (
                    <div className="list-item list-item--message">
                      <span>No goals</span>
                    </div>
                  ) : (
                        props.goals.map((goal) => {
                            return <GoalListItem key={goal.id} {...goal}/>;
                        })
                    )
            }
        </div>
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

