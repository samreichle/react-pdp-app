const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'deadline', 
    startDate: undefined, 
    endDate: undefined,
    completionStatus: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_DEADLINE':
            return {
                ...state,
                sortBy: 'deadline'
            };
        case 'SORT_BY_COMPLETION_STATUS':
            return {
                ...state,
                sortBy: 'completionStatus'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
             return {
                ...state,
                endDate: action.endDate
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