import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Swiper from "./sliders/sample";
import SpotifyPlayer from "./spotify";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <div className="container-fluid p-5">
          <div className="container pt-5 pb-5">
            <h1 className="pb-5 text-center">Artists</h1>

            <div className="row pb-5">
              <div className="col">
                <Swiper />
              </div>
            </div>
          </div>
        </div>
      </ServicesContainer>
    </>
  );
};

export default connect(Services);

const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100vw;

  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  margin: auto;
  padding: 0rem 0;
  .col {
    text-align: center;
  }
  svg.uptown-icons {
    text-align: center !important;
    margin: auto;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    font-weight: 600;
    width: 100%;
    max-width: 620px;
    text-align: center !important;
    margin: auto;
    padding: 1rem;
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
  }
`;
