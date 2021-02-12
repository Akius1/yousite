import React from 'react';

import { ProjectContainer } from './ProjectPage.styles';
import Project from '../../Components/Project-component/Project.component';
import ProjectInfo from '../../Components/Projects/ProjectInfo.component';

const ProjectPage = () => {
   


//  const ProjectContainer = styled.div`

// `
    return (<>
        <ProjectContainer>
            <div className="wrapper">
                <ProjectInfo name="Egoski Ecommence Website" title="UX/UI Website Design" text="For a brand that is represented as “a dark minimal twisted aesthetic for tomorrows youth” and as a faceless brand with no emotion, I wanted customers to truly experience what the brand represented within a branded online experience. The website features two major sections: a simplified shopping experience with an innovative approach to e-commerce in the digital space as well as a live brand experience connecting social media platforms on to the website letting customers experience the brand and what it represents."/>
                <Project name="Egoski" button_color="inside-page__btn--city" card_front_color="card-front__tp--city" /> 
            </div>
            <div className="underline"></div>
            
        </ProjectContainer>

        <ProjectContainer>
            <div className="wrapper">
                <ProjectInfo name="Stare Movie Website" title="UX/UI Website Design" text="For a brand that is represented as “a dark minimal twisted aesthetic for tomorrows youth” and as a faceless brand with no emotion, I wanted customers to truly experience what the brand represented within a branded online experience. The website features two major sections: a simplified shopping experience with an innovative approach to e-commerce in the digital space as well as a live brand experience connecting social media platforms on to the website letting customers experience the brand and what it represents."/>
                <Project name="Egoski" button_color="inside-page__btn--city" card_front_color="card-front__tp--city" /> 
            </div>
            <div className="underline"></div>
            
        </ProjectContainer>

        <ProjectContainer>
            <div className="wrapper">
                <ProjectInfo name="Healtritas" title="UX/UI Website Design" text="For a brand that is represented as “a dark minimal twisted aesthetic for tomorrows youth” and as a faceless brand with no emotion, I wanted customers to truly experience what the brand represented within a branded online experience. The website features two major sections: a simplified shopping experience with an innovative approach to e-commerce in the digital space as well as a live brand experience connecting social media platforms on to the website letting customers experience the brand and what it represents."/>
                <Project name="Egoski" button_color="inside-page__btn--city" card_front_color="card-front__tp--city" /> 
            </div>
            <div className="underline"></div>
            
        </ProjectContainer>
        
        </>
    )
}

export default ProjectPage;
