import {v4 as uuid} from 'uuid';


// ADD_GOAL
export const addGoal = (
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
export const removeGoal = ({ id } = {  }) => ({
    type: 'REMOVE_GOAL',
    id
});

// EDIT_GOAL
export const editGoal = (id, updates) => ({
    type: 'EDIT_GOAL',
    id,
    updates
});

