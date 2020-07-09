// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_COMPLETION_FILTER
export const setCompletionFilter = (completionStatus = '') => ({
    type: 'SET_COMPLETION_FILTER',
    completionStatus
});