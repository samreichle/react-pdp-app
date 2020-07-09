const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'deadline',
    completionStatus: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DEADLINE':
            return {
                ...state,
                sortBy: 'deadline'
            };
        case 'SET_COMPLETION_FILTER':
            return {
                ...state,
                completionStatus: action.completionStatus
            };
        default:
            return state;
    }
};