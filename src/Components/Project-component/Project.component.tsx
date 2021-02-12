import React from "react";
import styled from "styled-components";

interface projectProps {
  name?: string;
  text?: string;
  button_color: string;
  card_front_color: string;
}

const Project: React.FC<projectProps> = ({
  name,
  button_color,
  card_front_color,
}) => {
    const Container = styled.div`

    margin-top: 50px;
  
    *,
    *::after,
    *::before {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }
    font-size: 62.5%;

    box-sizing: border-box;

    .card-front__heading {
      font-size: 1.5rem;
      margin-top: 0.25rem;
    }

    /* Main heading for inside page */
    .inside-page__heading {
      padding-bottom: 1rem;
      width: 100%;
    }

    /* Mixed */

    /* For both inside page's main heading and 'view me' text on card front cover */
    .inside-page__heading,
    .card-front__text-view {
      font-size: 1.3rem;
      font-weight: 800;
      margin-top: 0.2rem;
    }

    .inside-page__heading--city,
    .card-front__text-view--city {
      color: #ff62b2;
    }

    /* Front cover */

    .card-front__tp {
      color: #fafbfa;
    }

    /* Back cover */

    /* For inside page's body text */
    .inside-page__text {
      color: #333;
    }

    /* Icons ===========================================*/

    .card-front__icon {
      fill: #fafbfa;
      font-size: 3vw;
      height: 3.25rem;
      margin-top: -0.5rem;
      width: 3.25rem;
    }

    /* Buttons =================================================*/

    .inside-page__btn {
      background-color: transparent;
      border: 3px solid;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 2rem;
      overflow: hidden;
      padding: 0.7rem 0.75rem;
      position: relative;
      text-decoration: none;
      transition: all 0.3s ease;
      width: 90%;
      z-index: 10;
    }

    .inside-page__btn::before {
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: scaleY(0);
      transition: all 0.3s ease;
      width: 100%;
      z-index: -1;
    }

    .inside-page__btn--city {
      border-color: #ff40a1;
      color: #ff40a1;
    }

    .inside-page__btn--city::before {
      background-color: #ff40a1;
    }

    /*  */

    .inside-page__btn:hover {
      color: #fafbfa;
    }

    .inside-page__btn:hover::before {
      transform: scaleY(1);
    }
  `;
  const Main = styled.div`
    /* background: linear-gradient(to bottom right, #eee8dd, #e3d9c6); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    .card-section {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 100%;
    }

    /* A container to hold the flip card and the inside page */
    .card {
      background-color: rgba(0, 0, 0, 0.05);
      box-shadow: -0.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.5);
      height: 20rem;
      position: relative;
      transition: all 1s ease;
      width: 20rem;
    }
    .flip-card {
      height: 20rem;
      perspective: 100rem;
      position: absolute;
      right: 0;
      transition: all 1s ease;
      visibility: hidden;
      width: 20rem;
      z-index: 100;
    }

    /* The outer container's visibility is set to hidden. This is to make everything within the container NOT set to hidden  */
    /* This is done so content in the inside page can be selected */
    .flip-card > * {
      visibility: visible;
    }

    /* An inner container to hold the flip card. This excludes the inside page */
    .flip-card__container {
      height: 100%;
      position: absolute;
      right: 0;
      transform-origin: left;
      transform-style: preserve-3d;
      transition: all 1s ease;
      width: 100%;
    }

    .card-front,
    .card-back {
      backface-visibility: hidden;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    /* Styling for the front side of the flip card */

    /* container for the front side */
    .card-front {
      background-color: #fafbfa;
      height: 20rem;
      width: 20rem;
    }

    /* Front side's top section */
    .card-front__tp {
      align-items: center;
      clip-path: polygon(
        0 0,
        100% 0,
        100% 90%,
        57% 90%,
        50% 100%,
        43% 90%,
        0 90%
      );
      display: flex;
      flex-direction: column;
      height: 15rem;
      justify-content: center;
      padding: 0.75rem;
    }

    .card-front__tp--city {
      background: linear-gradient(to bottom, #ff73b9, #ff40a1);
    }

    /* Front card's bottom section */
    .card-front__bt {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    /* Styling for the back side of the flip card */

    .card-back {
      background-color: #fafbfa;
      transform: rotateY(180deg);
    }

    /* Specifically targeting the <video> element */
    .video__container {
      clip-path: polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%);
      height: auto;
      min-height: 100%;
      object-fit: cover;
      width: 100%;
    }

    /* Inside page */

    .inside-page {
      background-color: #fafbfa;
      box-shadow: inset 20rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.25);
      height: 100%;
      padding: 1rem;
      position: absolute;
      right: 0;
      transition: all 1s ease;
      width: 20rem;
      z-index: 1;
    }

    .inside-page__container {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      text-align: center;
      width: 100%;
      font-size: 16px;
    }

    .card:hover {
      box-shadow: -0.1rem 1.7rem 6.6rem -3.2rem rgba(0, 0, 0, 0.75);
      width: 40rem;
    }

    /* When the card is hovered, the flip card container will rotate */
    .card:hover .flip-card__container {
      transform: rotateY(-180deg);
    }

    /* When the card is hovered, the shadow on the inside page will shrink to the left */
    .card:hover .inside-page {
      box-shadow: inset 1rem 0px 5rem -2.5rem rgba(0, 0, 0, 0.1);
    }
  `;
  return (
    <Container>
      <Main>
        <section className="card-area">
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className={`card-front__tp ${card_front_color}`}>
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        style={{ background: "0 0 60 60" }}
                        xmlSpace="preserve"
                        className="card-front__icon"
                      >
                        {/*  Enter image */}
                      </svg>

                      <h2 className="card-front__heading">{name}</h2>
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoPlay muted loop>
                      <source
                        className="video__media"
                        src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    Your one stop shop
                  </h3>
                  <p className="inside-page__text">
                    For a brand that is represented as “a dark minimal twisted aesthetic for tomorrows youth” and as a faceless brand with no emotion, I wanted customers to truly experience what the brand represented within a branded online experience!! Technologies
                    Used: React , Sass, Firebase, Stripes.
                  </p>
                  <a
                    href="​https://egoski.herokuapp.com"
                    className={`inside-page__btn ${button_color}`}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Main>
    </Container>
  );
};

export default Project;
