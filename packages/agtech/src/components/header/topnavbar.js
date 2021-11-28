import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import MobileMenu from "./menu";
import logo from "../../images/logo.svg";
import darkLogo from "../../images/darklogo.svg";
import Toggle from "../toggle";

const TopNavbar = ({ state }) => {
  const { mode } = state.theme;

  return (
    <>
      <TopNavContainer>
        <div>
        <Logo>
          <Link link="/" alt="Forside link">
            <img
              src={mode === "light" ? logo : darkLogo}
              alt="logo"
              width="250px"
              height="250px"
            />
          </Link>
        </Logo>
        </div>
        <div></div>
        <div className="mobhide">
          <ul className="navlink">
            <li>
              <Link link="/">
                <h3>Home</h3>
              </Link>
            </li>
          
            <li>
              <Link link="/usluge/">
                <h3>Usluge</h3>
              </Link>
            </li>
            <li>
              <Link link="/portfolio/">
                <h3>Portfolio</h3>
              </Link>
            </li>

            <li>
              <Link link="/kontakt/">
                <h3>Kontakt</h3>
              </Link>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <Toggle />
          <MobileMenu />
        </div>
      </TopNavContainer>
    </>
  );
};

export default connect(TopNavbar);

const TopNavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 15px 50px;
  transition: padding 0.5s ease;
  background-color: var(--background);
  transition: background-color var(--transition);
  z-index: 99;
  max-width: 100%;
  width: 100%;
  border-bottom: 1px solid var(--border);
  .buttons {
    display: flex;
  }
  @media (max-width: 1230px) {
    padding: 20px;
  }
  
  h3:hover {
    color:#148fa8;
  }
  .navlink {
    list-style: none;
    display: inline-block;
    margin-bottom:0rem;
    text-align:right;
    
    
    li {
      display:inline-block;
      padding-left:2rem;
      h3{
        line-height:0rem;
        text-align:center;
      }

    
      
    }
    ]
  }

  @media (max-width: 1000px) {
    .mobhide {
      display: none;
    }
  }
`;

const Logo = styled.div`
  img {
    width: 150px;
    height: 50px;
    margin-top: -20px;
  }
`;
