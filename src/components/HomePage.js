import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => (
    <div className="content-container">
        <p> </p>
        <center><h3>"Unless you try to do something beyond what you have already mastered, you will never grow." </h3></center>
        <center><p>-Ralph Waldo Emerson</p></center>
        <hr/>
        <p className="home-page__paragraph">
            Professional development is an essential component of career growth. Keeping your skills and 
            knowledge current will provide you with a competitive advantage in advancing your career. This Professional Development Planner is a tool to help plan and 
            structure your journey towards professional growth.
        </p>
        <p></p>
        <p className="home-page__paragraph">
        Before jumping into the process of creating goals, take some time to assess your current knowledge and skills. 
        This will make it easier to identify areas in which you can improve and begin to obtain your goals. Some questions to help in 
        identifying these areas are listed below.
        </p>
        <ul className="home-page__ul">
            <li>How can I improve or strengthen my work performance?</li>
            <li>What are the key areas I want or need to develop to remain proficient in my profession?</li>
            <li>What are new skills and knowledge I will need in the future?</li>
        </ul>
        <p className="home-page__paragraph"> 
            After determining the key learning areas in which you want to focus, it is time to begin creating your professional goals. This planner allows you to include strategies, 
            a deadline, and a completion status for each goal you add. These components incorporate the SMART model and ensure your goals will be <b>S</b>pecific, <b>M</b>easurable, <b>A</b>ttainable, <b>R</b>ealistic, and within a specific <b>T</b>imeframe. 
            Keep this model in mind as you begin creating your <Link className="home-page__link" to={"/dashboard"}><b>goals</b></Link>!
        </p>
        <p></p>
    </div>
);


export default HomePage;

