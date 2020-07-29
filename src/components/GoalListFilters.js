import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setCompletionFilter } from '../actions/filters';
import { Link } from 'react-router-dom';


const GoalListFilters = (props) => (
    <div className="content-container">
        <h1>Goals</h1>

        <Link to="/create">
            <button>Add Goal</button>
        </Link>

        <div className="filters">
            <div className="filters__item">        
                <input 
                type="text" 
                value={props.filters.text} 
                onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value));
                }} 
                />
            </div>
            <div className="filters__item">
                <select
                onChange={(e) => {
                    if (e.target.value === 'incomplete') {
                        props.dispatch(setCompletionFilter('false'));
                    } else if (e.target.value === 'complete') {
                        props.dispatch(setCompletionFilter('true'));
                    } else if (e.target.value === 'all') {
                        props.dispatch(setCompletionFilter(''));
                    } 
                }}
            >
                <option value="all">All Goals</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </select>
            </div>
            <div></div>
        </div>
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