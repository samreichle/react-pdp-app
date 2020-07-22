const goalsReducerDefaultState = [];

export default (state = goalsReducerDefaultState, action) => {
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
        case 'SET_GOALS': 
            return action.goals;
        default:
            return state;
    }
};

