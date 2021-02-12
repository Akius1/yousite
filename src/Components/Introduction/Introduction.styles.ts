import styled from "styled-components";

export const IntroductionContainer = styled.div`
  padding-top: 150px;

  .home-header_title {
    font-size: 190px;
    margin-bottom: 35px;
  }
  .home-header-container {
    display: flex;
    justify-content: space-between;
    .left-side {
      .home-header_email {
        color: inherit;
        margin-bottom: 20px;
        display: inline-block;
        .shift-line {
          --line-number: var(--nth-child-idx);
          overflow: hidden;
          display: inline-flex;
          position: relative;
          width: 100%;
          span {
            transform: translateY(0%);
          }
        }
      }
      .home-header_position {
        font-size: 30px;
        line-height: 36px;
        .shift-line {
          --line-number: var(--nth-child-idx);
          overflow: hidden;
          display: inline-flex;
          position: relative;
          width: 100%;
          span {
            transform: translateY(0%);
          }
        }
      }
    }

    .right-side {
      margin-right: 19px;
      .home-header_about-text {
        font-size: 16px;
        margin-bottom: 15px;
      }
      a {
        background-color: transparent;
      }
      .home-header_social-link:not(:last-child) {
        margin-right: 20px;
      }
      .home-header_social-link {
        position: relative;
        display: inline-block;
        color: #999;
        font-size: 16px;
        line-height: 1.5em;
        text-decoration: none;
      }
    }
  }
  .underline{
      width:100%;
      margin-top: 50px; 
      border: 2px solid black;
  }
`;
