// Get visible goals
export default (goals, { text, sortBy, completionStatus}) => {
    return goals.filter((goal) => {
        const textMatch = goal.goalName.toLowerCase().includes(text.toLowerCase());
        const completionStatusMatch = goal.completionStatus.toString().includes(completionStatus);
        return textMatch && completionStatusMatch;
    }).sort((a, b) => {
        if (sortBy === 'deadline') {
            return a.deadline < b.deadline ? -1 : 1;
        } 
    });
};