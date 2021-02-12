import React from "react";
import styled from "styled-components";

interface ProjectInfoProps {
  name?: string;
  text?: string;
  title?: string;
}
const ProjectInfo: React.FC<ProjectInfoProps> = ({ name, text, title }) => {
  const ProjectInfoContainer = styled.div`
    max-width: 100%;
    margin-top: 50px;
    .home-project__content-head {
      display: inline-block;
      font-size: 16px;
      line-height: 1.5em;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 40px;
      .shift-line {
        display: inline-flex;
        position: relative;
        width: 100%;
        line-height: 1em;
        /* background-color: rgba(255, 0, 0, 0.2); */
        span {
          display: inline-block;

          transition: opacity calc(var(--anim-duration) / 3) linear,
            transform var(--anim-duration) cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateY(0%);
          transform: translateY(103%);
          opacity: 1;
        }
      }
    }

    .home-project__title-link{
        text-decoration: none;
        color: inherit;
    a {
      background-color: transparent;
      .home-project__title {
        font-size: 65px;
        line-height: 75px;
        margin-bottom: 0px;
        .shift-line {
          display: inline-flex;
          position: relative;
          width: 100%;
          line-height: 1em;
        }
      }
    }}
    .home-project__description{
        margin-bottom: 30px;
        color: #333;
        font-size: 20px;
        line-height: 30px;
        .shift-line {
          display: inline-flex;
          position: relative;
          width: 100%;
          line-height: 1em;
        }
    }
  `;
  return (
    <ProjectInfoContainer>
      <div className="home-project__content-head lines-shift-container">
        <span className="shift-line">
          <span>Project</span>
        </span>
      </div>
      <a
        className="home-project__title-link"
        href="​https://egoski.herokuapp.com"
      >
        <h2 className="home-project__title heading--display">
          <span className="shift-line">
            <span>{name}</span>
          </span>
        </h2>
          </a>
          
          <div className="home-project__description">
              <span className="shift-line">
                  {text}
            </span>
          </div>
    </ProjectInfoContainer>
  );
};

export default ProjectInfo;
