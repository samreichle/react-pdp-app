import React from 'react';
import {connect} from 'react-redux';
import jsPDF from 'jspdf';
import selectGoals from '../selectors/goals';
import moment from 'moment';

class FormGeneratorPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goals: props.goals
        }
    }

    generatePDF = () => {
        var doc = new jsPDF();
      
        doc.text('Professional Development Planner', 35, 15)

        doc.setFont('helvetica')
        doc.setFontType('normal')
        const docText = this.state.goals.map((goal) => {
            const newDeadline=  (moment(goal.deadline));
                    return (`Goal: ${goal.goalName} ${'\n'} Strategies: ${goal.strategies} Deadline: ${newDeadline.format('MMMM Do, YYYY').toString()}`)
                })

        doc.text(docText, 0, 25)

      doc.save('demo.pdf')
    }   
    
   render() {
       console.log(this.state.goals);
      return (
         <div>
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
         </div>
      );
   }
}

const mapStateToProps = (state) => {
    return {
        goals: selectGoals(state.goals, state.filters)
    };
};

export default connect(mapStateToProps)(FormGeneratorPage);