import React from 'react';

import styled from 'styled-components';
import AboutContent from '../../Components/AboutContent/AboutContent';
import Experience from '../../Components/Experience-component/Experience.component';
import Identity from '../../Components/Identity/Identity.component';

const AboutPage = () => {
    const AboutPageContainer = styled.div`
    /* height: 400px; */
    border-bottom: 1px solid #444;
            color: white;
            background-color: black;
            padding-top: 100px;
            /* position: relative; */
        .wrapper{
            
            
            display: grid;
            grid-template-columns: 60% 40%; 
            justify-content: space-between;
        }
        
    `
    const serviceArray = [
        "Web Development",
        "Application modernization",
        "Agile transformation",
        "Data management",
    ]

    const skillSets = [
        "Node Js",
        "TypeScript",
        "JavaScript",
        "React",
        "Firebase",
        "HTML",
        "CSS & SASS",
        "Docker",
        "Jest",
        "Mongo Db",
        "Postgres & MySql",
        "Github Action & Circle CI",
        "REST & GraphQl",
        "C#"
    ]

    const exp = {
        company: "Decagon Institute",
        location: "Lagos, Nigeria",
        role: "Software Engineer",
        date: "JUNE 2020 - PRESENT"
    }

    const exp_two = {
        company: "Andela Learning Community",
        location: "Delta, Nigeria",
        role: "Facilitator",
        date: "MARCH 2019 - AUGUST 2020"
    }
    return (<>
        <AboutPageContainer>
            <div className="wrapper">
        <Identity  comment ="I love designing websites and keep things as simple as possible. My
          goals is to focus on minimalism and conveying the message that you
          want to send"/>
                
                <AboutContent title="About Me" services={serviceArray} content="I am a performance-driven and results-oriented software engineer offering a pro-active approach and determination to meet all assigned goals and objectives. Effective team player with excellent analytical skills and the important ability to solve complex problems."/>
            </div>
            
        </AboutPageContainer>

        <AboutPageContainer>
            <div className="wrapper">
                <Experience title="Experience" exp={exp} exp_two={ exp_two}/>
                <Experience title="Skills" skills={skillSets} content="Decagon, ​Lagos — Software Engineer JUNE 2020 - PRESENT"/>
            </div>
            
        </AboutPageContainer>
        </>
    )
}

export default AboutPage;
