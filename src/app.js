import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetGoals } from './actions/goals';
import { login, logout } from './actions/auth';
import getVisibleGoals from './selectors/goals';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    // provider allows us to provide store to other components
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);
let hasRendered= false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
 }

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetGoals()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/home');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
}); 

