import React from "react";

import { IntroductionContainer } from "./Introduction.styles";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

interface IntroductionProps {
  name: string;
  twitter_link: string;
  linkedin_link: string;
  facebook_link: string;
  email: string;
  job_role: string;
  experince: string;
  address: string;
}

const Introduction: React.FC<IntroductionProps> = (props) => {
  const {
    name,
    twitter_link,
    linkedin_link,
    facebook_link,
    email,
    job_role,
    experince,
    address,
  } = props;
  return (
    <IntroductionContainer>
      <h1 className="home-header_title">{name} </h1>

      <div className="home-header-container">
        <div className="left-side">
          <a className="home-header_email lines-shift-container" href={email}>
            <span className="shift-line">
              <span>{email}</span>
            </span>
          </a>
          <div className="home-header_position">
            <span className="shift-line">
              <span>/{job_role}</span>
            </span>
          </div>
        </div>
        <div className="right-side">
          <div className="home-header_about-text">
            {experince}
            <br />
            Based in {address}
            <span
              className="home-header__local-time local-time-container"
              data-timezone="Nigeria/Lagos"
            >
              {" "}
              03:04 PM
            </span>
            .
            <br />
            Get in touch for availability.
          </div>

          <div className="home-header_social-links">
            <a
              className="home-header_social-link link-underline"
              href={linkedin_link}
            >
              <FaLinkedin />
            </a>

            <a
              className="home-header_social-link link-underline"
              href={twitter_link}
            >
              <FaTwitterSquare />
            </a>
            <a
              className="home-header_social-link link-underline"
              href={facebook_link}
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>
          </div>
          <div className="underline"></div>
    </IntroductionContainer>
  );
};

export default Introduction;
