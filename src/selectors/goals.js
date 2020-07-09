// Get visible goals
export default (goals, { text, sortBy, startDate, endDate}) => {
    return goals.filter((goal) => {
        const startDateMatch = typeof startDate !== 'number' || goal.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || goal.createdAt <= endDate;
        const textMatch = goal.goalName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'deadline') {
            return a.deadline < b.deadline ? -1 : 1;
        } else if (sortBy === 'completionStatus') {
            return a.completionStatus < b.completionStatus ? -1 : 1;
        }
    });
};