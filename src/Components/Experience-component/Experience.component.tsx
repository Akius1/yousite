import React from "react";

import styled from "styled-components";

interface ExperienceContentProps {
  title: string;
  skills?: string[];
  content?: string;
  soft_skills?: string[];
  
  passions?: string[];
    passion_title?: string;
    
    exp?: {
        company?: string;
        date?: string;
        role?: string;
        location?: string;
    }
    exp_two?: {
        company?: string;
        date?: string;
        role?: string;
        location?: string;
    }
}

const Experience: React.FC<ExperienceContentProps> = (props) => {
    const ExpContainer = styled.div`
    padding: 0 2rem 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    max-width: 100%;
    .home-exp__content-head {
      display: inline-block;
      font-size: 32px;
      line-height: 1.5em;
      font-weight: 600;
      text-transform: uppercase;
      /* margin-bottom: 10px; */
    }

    .home-exp__content{
        .shift-line{
            padding-bottom: 1rem;
        }
    }

    .home-skill__content-head{
        display: inline-block;
      font-size: 32px;
      line-height: 1.5em;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .home-skills__content-head ul li{
        list-style: none;
        color: inherit;
    }
    
  `;
  return (
    <>
      {props.title === "Experience" ? (
        <ExpContainer>
          <div className="home-exp__content-head ">
            <span className="shift-line">
              <span>{props.title}</span>
            </span>
          </div>
          <div className="home-exp__content ">
            <div className="shift-line">
                          <p> {props.exp?.company}</p>
                          <p>Address: {props.exp?.location}</p>
                          <p>Role: {props.exp?.role}</p>
                          <p>Date: {props.exp?.date}</p>
            </div>
            <div className="shift-line">
                          <p> {props.exp_two?.company}</p>
                          <p>Address: {props.exp_two?.location}</p>
                          <p>Role: {props.exp_two?.role}</p>
                          <p>Date: {props.exp_two?.date}</p>
            </div>
                  </div>
                  <div className="home-services__content-head ">
            <div className="services">{props.passion_title}</div>
            {props.passions?.map((item, index) => (
              <span key={index}>
                {item}
              </span>
            ))}
          </div>
        </ExpContainer>
      ) : (
        <ExpContainer>
          <div className="home-skill__content-head">
            <span className="shift-line">
              <span>{props.title}</span>
            </span>
          </div>
          <div className="home-skills__content-head ">
            {props.skills?.map((item, index) => (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        </ExpContainer>
      )}
    </>
  );
};

export default Experience;
