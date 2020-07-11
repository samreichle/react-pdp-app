import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GoalsDashboardPage from '../components/GoalsDashboardPage';
import AddGoalPage from '../components/AddGoalPage';
import EditGoalPage from '../components/EditGoalPage';
import NotFoundPage from '../components/NotFoundPage';
import FormGeneratorPage from '../components/FormGeneratorPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';




const AppRouter = () => (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/goals-dashboard" component={GoalsDashboardPage} />
                    <Route path="/create" component={AddGoalPage} />
                    <Route path="/edit/:id" component={EditGoalPage} />
                    <Route path="/form-generator" component={FormGeneratorPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
);

export default AppRouter;



