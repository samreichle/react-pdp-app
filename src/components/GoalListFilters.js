import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDeadline, sortByCompletionStatus } from '../actions/filters';

const GoalListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} 
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'deadline') {
                    props.dispatch(sortByDeadline());
                } else if (e.target.value === 'completionStatus') {
                    props.dispatch(sortByCompletionStatus());
                }
            }}
        >
            <option value="deadline">Deadline</option>
            <option value="completionStatus">Completion Status</option>
        </select>
    </div>
);


// Allows us to choose what we want to access off of the store
const  mapStateToProps = (state) =>{
    return {
        filters: state.filters
    };
};

// First one take mapStateToProps second one contains what we want to render
export default connect(mapStateToProps)(GoalListFilters);