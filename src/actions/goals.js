import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase';
import goals from '../reducers/goals';


// ADD_GOAL
export const addGoal = (goal) => ({
    type: 'ADD_GOAL',
    goal
});

export const startAddGoal = (goalData = {}) => {
    return (dispatch) => {
        const {
            goalName = '', 
            strategies = '', 
            createdAt = 0, 
            deadline = 0, 
            completionStatus = false
        } = goalData;
        const goal = { goalName, strategies, createdAt, deadline, completionStatus };

        database.ref('goals').push(goal).then((ref) => {
            dispatch(addGoal({
                id: ref.key,
                ...goal
            }));
        });
    };
}


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

