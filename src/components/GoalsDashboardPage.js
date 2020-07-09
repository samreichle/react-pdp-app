import React from 'react';
import GoalList from './GoalList';
import GoalListFilters from './GoalListFilters';

const GoalsDashboardPage = () => (
    <div>
        <GoalListFilters />
        <GoalList />
    </div>
);

export default GoalsDashboardPage;