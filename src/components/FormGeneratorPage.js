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

addWrappedText = ({text, textWidth, doc, fontSize = 10, fontType = 'normal', lineSpacing = 7, xPosition = 10, initialYPosition = 10, pageWrapInitialYPosition = 10}) => {
    var textLines = doc.splitTextToSize(text, textWidth); // Split the text into lines
    var pageHeight = doc.internal.pageSize.height;        // Get page height, well use this for auto-paging
    doc.setFontType(fontType);
    doc.setFontSize(fontSize);

    var cursorY = initialYPosition;

    textLines.forEach(lineText => {
        if (cursorY > pageHeight) { // Auto-paging
        doc.addPage();
        cursorY = pageWrapInitialYPosition;
        }
        doc.text(xPosition, cursorY, lineText);
        cursorY += lineSpacing;
    })
}
generatePDF = () => {

    let goals = this.state.goals;

        const doc = new jsPDF();
            for (var i = 0; i < goals.length; i++) {
                let count = i + 1;
                let goals = this.state.goals;
                let newDeadline=  (moment(goals[i].deadline));

                this.addWrappedText({
                    text: (count.toString() + '.' + '\n'
                                            + 'GOAL:' + '\n' + '        ' + goals[i].goalName + '\n'
                                            + 'STRATEGIES: ' + '\n' + '         ' + goals[i].strategies + '\n'
                                            + 'DEADLINE: ' + '\n' + '       ' + newDeadline.format('MMMM Do, YYYY').toString()), // Put a really long string here
                    textWidth: 220,
                    doc,
                  
                    // Optional
                    fontSize: '12',
                    fontType: 'normal',
                    lineSpacing: 7,               // Space between lines
                    xPosition: 10,                // Text offset from left of document
                    initialYPosition: 30 + i * 50,         // Initial offset from top of document; set based on prior objects in document
                    pageWrapInitialYPosition: 10  // Initial offset from top of document when page-wrapping
                  });
            }

        doc.save('demo.pdf');
}
    
   render() {
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