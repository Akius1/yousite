import React from "react";

import styled from "styled-components";

interface AboutContentProps {
  title: string;
    services: string[];
    content: string;
}

const AboutContent: React.FC<AboutContentProps> = (props) => {
  const AboutContainer = styled.div`
    color: white;
    max-width: 100%;
    .home-about__content-head{
        display: inline-block;
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    .home-about__content{
        margin-bottom: 30px;
        /* color: #333; */
        font-size: 20px;
        line-height: 30px;
        .shift-line {
          display: inline-flex;
          position: relative;
          width: 100%;
          line-height: 1em;
        }
    }
    .services{
        font-size: 16px;
        line-height: 1.5em;
        font-weight: 600;
        margin-bottom: 0px;
    }
    .home-services__content-head ul li{
        list-style: none;
        color: inherit;
    }
    
  `;
  return (
    <AboutContainer>
      <div className="home-about__content-head ">
        <span className="shift-line">
                  <span>{props.title}</span>
        </span>
        </div>
    <div className="home-about__content ">
        <span className="shift-line">
                  <span>{ props.content}</span>
        </span>
          </div>
          <div className="home-services__content-head ">

              <div className="services">
                  Services
              </div>
              {props.services.map((item, index) => (
                  <ul key={index}>
                      <li>{ item}</li>
                  </ul>
              ))}
      </div>
    </AboutContainer>
  );
};

export default AboutContent;
