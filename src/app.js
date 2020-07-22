import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetGoals } from './actions/goals';
import { setTextFilter } from './actions/filters';
import getVisibleGoals from './selectors/goals';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    // provider allows us to provide store to other components
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetGoals()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});



