import {v4 as uuid} from 'uuid';
import database from '../firebase/firebase';
import goals from '../reducers/goals';


// ADD_GOAL
export const addGoal = (goal) => ({
    type: 'ADD_GOAL',
    goal
});

export const startAddGoal = (goalData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            goalName = '', 
            strategyOne = '', 
            strategyTwo = '',
            strategyThree = '',
            createdAt = 0, 
            deadline = 0, 
            completionStatus = false
        } = goalData;
        const goal = { goalName, strategyOne, strategyTwo, strategyThree, createdAt, deadline, completionStatus };

        return database.ref(`users/${uid}/goals`).push(goal).then((ref) => {
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

export const startRemoveGoal = ({ id } = {  }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/goals/${id}`).remove().then(() => {
            dispatch(removeGoal({id}))
        });
    };
}

// EDIT_GOAL
export const editGoal = (id, updates) => ({
    type: 'EDIT_GOAL',
    id,
    updates
});

export const startEditGoal = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/goals/${id}`).update(updates).then(() => {
            dispatch(editGoal(id, updates))
        });
    };
}


// SET_GOALS
export const setGoals = (goals) => ({
    type: 'SET_GOALS',
    goals
});

export const startSetGoals = () => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/goals`).once('value').then((snapshot) => {
            const goals = [];

            snapshot.forEach((childSnapshot) => {
                goals.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setGoals(goals))
        });
    };
};
