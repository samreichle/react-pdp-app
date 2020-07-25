import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import { startEditGoal, startRemoveGoal } from '../actions/goals';

export class EditGoalPage extends React.Component {
  onSubmit = (goal) => {
    this.props.startEditGoal(this.props.goal.id, goal);
    this.props.history.push(`/goal/${this.props.goal.id}`);
  };
  onRemove = () => {
    this.props.startRemoveGoal({ id: this.props.goal.id });
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
          <GoalForm
            goal={this.props.goal}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove}>Remove Goal</button>
        
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  goal: state.goals.find((goal) => goal.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditGoal: (id, goal) => dispatch(startEditGoal(id, goal)),
  startRemoveGoal: (data) => dispatch(startRemoveGoal(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGoalPage);
