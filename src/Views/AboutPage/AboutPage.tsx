import React from 'react';

import styled from 'styled-components';
import Identity from '../../Components/Identity/Identity.component';
import ProjectInfo from '../../Components/Projects/ProjectInfo.component';

const AboutPage = () => {
    const AboutPageContainer = styled.div`
    height: 400px;
    border-bottom: 1px solid #444;
            color: white;
            padding-top: 100px;
            /* position: relative; */
        .wrapper{
            
            
            display: grid;
            grid-template-columns: 60% 40%; 
            justify-content: space-between;
        }
        
    `
    return (
        <AboutPageContainer>
            <div className="wrapper">
        <Identity  comment ="I love designing websites and keep things as simple as possible. My
          goals is to focus on minimalism and conveying the message that you
          want to send"/>
                
                <ProjectInfo name="About Me" title="UX/UI Website Design" text="I am a performance-driven and results-oriented software engineer offering a pro-active approach and determination to meet all assigned goals and objectives. Effective team player with excellent analytical skills and the important ability to solve complex problems.
."/>
            </div>
            
        </AboutPageContainer>
    )
}

export default AboutPage;
