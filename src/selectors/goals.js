// Get visible goals
export default (goals, { text, completionStatus}) => {
    return goals.filter((goal) => {
        const textMatch = goal.goalName.toLowerCase().includes(text.toLowerCase());
        const completionStatusMatch = goal.completionStatus.toString().includes(completionStatus) || completionStatus === '';
        return textMatch && completionStatusMatch;
    }).sort((a, b) => (a.deadline < b.deadline ? -1 : 1))
};