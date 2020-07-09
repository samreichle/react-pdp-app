import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

// ADD_GOAL
const addGoal = (
    {
        goalName = '', 
        strategies = '', 
        createdAt = 0, 
        deadline = 0, 
        completionStatus = false
    } = {}
) => ({
    type: 'ADD_GOAL',
    goal: {
        id: uuid(),
        goalName,
        strategies,
        createdAt,
        deadline,
        completionStatus
    }
});

// REMOVE_GOAL
const removeGoal = ({ id } = {  }) => ({
    type: 'REMOVE_GOAL',
    id
});

// EDIT_GOAL
const editGoal = (id, updates) => ({
    type: 'EDIT_GOAL',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_DEADLINE
const sortByDeadline = () => ({
    type: 'SORT_BY_DEADLINE'
});

// SORT_BY_COMPLETION_STATUS
const sortByCompletionStatus = () => ({
    type: 'SORT_BY_COMPLETION_STATUS'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// Goals reducer
const goalsReducerDefaultState = [];

const goalsReducer = (state = goalsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GOAL': 
            return [
                ...state,
                action.goal
            ];
        case 'REMOVE_GOAL':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_GOAL':
            return state.map((goal)=> {
                if (goal.id === action.id){
                    return{
                        ...goal,
                        ...action.updates
                    };
                } else {
                    return goal;
                };
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'deadline', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_DEADLINE':
            return {
                ...state,
                sortBy: 'deadline'
            };
        case 'SORT_BY_COMPLETION_STATUS':
            return {
                ...state,
                sortBy: 'completionStatus'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
             return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};


// Get visible goals
const getVisibleGoals = (goals, { text, sortBy, startDate, endDate}) => {
    return goals.filter((goal) => {
        const startDateMatch = typeof startDate !== 'number' || goal.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || goal.createdAt <= endDate;
        const textMatch = goal.goalName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'deadline') {
            return a.deadline < b.deadline ? -1 : 1;
        } else if (sortBy === 'completionStatus') {
            return a.completionStatus < b.completionStatus ? -1 : 1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        goals: goalsReducer,
        filters: filtersReducer
    })
);



store.subscribe(() => {
    const state = store.getState();
    const visibleGoals = getVisibleGoals(state.goals, state.filters);
    console.log(visibleGoals);
});

const goalOne = store.dispatch(addGoal({goalName: 'Learn Python', createdAt: -21000, deadline: 1000, completionStatus: true}));
const goalTwo = store.dispatch(addGoal({goalName: 'Learn Excel', createdAt: -1000, deadline: 2000, completionStatus: false}));
const goalThree = store.dispatch(addGoal({goalName: 'Learn React', createdAt: -1000, deadline: 2100, completionStatus: false}));

// store.dispatch(removeGoal({id: goalOne.goal.id}));

// store.dispatch(editGoal(goalTwo.goal.id, {strategies: 'Take Udemy Course'}));

//store.dispatch(setTextFilter('python'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByDate());
store.dispatch(sortByDeadline());
store.dispatch(sortByCompletionStatus());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));




const demoState = {
    goals: [{
        id: 'goal1',
        goalName: 'Learn Python',
        strategies: 'Complete UA Course',
        createdAt: 0,
        deadline: 0,
        completionStatus: false
    }],
    filters: {
        text: 'Python',
        sortBy: 'deadline',
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 21
// };

// console.log({
//     ...user,
//     location: 'Tuscaloosa',
//     age: 27
// });

