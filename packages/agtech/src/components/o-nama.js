import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const About = () => {
  return (
    <>
      <AboutContainer>
        <div className="container pt-5">
          <div className="row ">
            <div className="col-6">
              <h1 className="pb-5">Zašto Crna Ovca?</h1>
              <h3>
                <i>Skalabilna rješenja koja si mogu priuštiti mala poduzeća</i>
              </h3>
            </div>
            <div className="col-6">
              <p>
                Web dizajn obuhvaća mnogo različitih vještina i disciplina u
                izradi i održavanju web stranica. Različita područja web dizajna
                uključuju web grafički dizajn; UI i UX dizajn; autorski rad i
                optimizacija za tražilice. Za male tvrtke presudno je posaditi i
                proširiti svoju digitalnu prisutnost.
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
  background-size: contain;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: -200% 0%;
  margin: 0 auto;
  @media (max-width: 430px) {
    .col {
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 0rem;
    font-weight: 600;
    width: 100%;
    max-width: 620px;
    text-align: left !important;
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
`;
