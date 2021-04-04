import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const About = () => {
  return (
    <>
      <AboutContainer>
        <div className="container pt-5 pb-5">
          <div className="row ">
            <div className="col-6">
              <h1 className="">Tko smo?</h1>
            </div>
            <div className="col-6">
              <h3>Uptown Records Zagreb Croatia</h3>

              <p>
                S dugogodišnjim iskustvom na području glazbene produkcije i
                menadžmenta skupina glazbenika i glazbenih promotora odlučila je
                osnovati nezavisnu diskografsku kuću kako bi unijeli potrebne
                svježine na domaći glazbeni teren. Mi smo Uptown Music Records i
                usudimo se biti drugačiji od drugih.
              </p>
              <div className="buttons">
                <Link link="/o-nama/">
                  <button className="wp-block-button__link">
                    Saznajte više
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AboutContainer>
    </>
  );
};

export default connect(About);

const AboutContainer = styled.div`
  display: flex;
  height: calc(80vh - 80px);
  min-height: calc(80vh - 80px);
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 100vw;
  background: url();
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 600;
    width: 100%;
    max-width: 620px;
    text-align: center !important;
  }
  p {
    font-size: 24px;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 620px;
  }
  .nama-inner {
    display: flex;
    align-items: flex-end;
    width: 1200px;
    height: 80%;
  }

  .buttons .wp-block-button__link {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 1230px) {
    justify-content: center;
  }

  @media (max-width: 1230px) {
    padding-left: 15px;
    padding-right: 15px;
    width: auto;
  }

  @media (max-width: 600px) {
    height: auto;
    min-height: 600px;
    background: url();
    background-size: cover;
    background-position: 60% 50%;
    h1 {
      font-size: 40px;
    }
    /* Animation */

    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    .animated {
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .animatedFadeInUp {
      opacity: 0;
    }

    .fadeInUp {
      opacity: 0;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
    }
  }
`;
