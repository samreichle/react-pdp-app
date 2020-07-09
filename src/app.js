import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addGoal, removeGoal, editGoal} from './actions/goals';
import {setTextFilter} from './actions/filters';
import getVisibleGoals from './selectors/goals';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addGoal({goalName: 'Finish Udemy Course', strategies: '2 hours a day', deadline: 1000, completionStatus: true}));
store.dispatch(addGoal({goalName: 'Get an internship', strategies: 'Apply for 2 a day', deadline: 1500, completionStatus: false}));
store.dispatch(addGoal({goalName: 'Get a job', strategies: 'Apply for 3 a day', deadline: 2000, completionStatus: false}));



const state = store.getState();
const visibleGoals = getVisibleGoals(state.goals, state.filters);
console.log(visibleGoals);


const jsx = (
    // provider allows us to provide store to other components
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


