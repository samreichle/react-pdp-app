// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_DEADLINE
export const sortByDeadline = () => ({
    type: 'SORT_BY_DEADLINE'
});

// SORT_BY_COMPLETION_STATUS
export const sortByCompletionStatus = () => ({
    type: 'SORT_BY_COMPLETION_STATUS'
});

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});