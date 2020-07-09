const filtersReducerDefaultState = {
    text: '',
    completionStatus: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
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