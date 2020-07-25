import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LoginPage from '../components/LoginPage';
import GoalsDashboardPage from '../components/GoalsDashboardPage';
import ViewGoalPage from '../components/ViewGoalPage';
import AddGoalPage from '../components/AddGoalPage';
import EditGoalPage from '../components/EditGoalPage';
import NotFoundPage from '../components/NotFoundPage';
import FormGeneratorPage from '../components/FormGeneratorPage';
import HomePage from '../components/HomePage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/home" component={HomePage} />
                    <PrivateRoute path="/dashboard" component={GoalsDashboardPage} />
                    <PrivateRoute path="/goal/:id" component={ViewGoalPage} />
                    <PrivateRoute path="/create" component={AddGoalPage} />
                    <PrivateRoute path="/edit/:id" component={EditGoalPage} />
                    <PrivateRoute path="/form-generator" component={FormGeneratorPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
);

export default AppRouter;



