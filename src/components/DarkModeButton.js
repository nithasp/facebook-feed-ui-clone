import React from "react";
import styled from "styled-components";
import {UseGlobalContext2} from '../context/GlobalContext';
const DarkModeButton = () => {

  const {mode, setMode} = UseGlobalContext2();
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }

  return (
    <DarkModeButtonWrapper className="darkmode-button">
      {mode === "light" ? (
        <div className="wrap-icon" onClick={() => toggleMode()}>
          <div className="icon-moon"></div>
        </div>
      ) : (
        <div className="wrap-icon" onClick={() => toggleMode()}>
          <div className="icon-sun">☀️</div>
        </div>
      )}
    </DarkModeButtonWrapper>
  );
};

const DarkModeButtonWrapper = styled.div`
  position: fixed;
  right: 26px;
  bottom: 100px;
  .wrap-icon {
    background: #4b4c4f;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease;
    cursor: pointer;

    .icon-moon {
      background-image: url(./images/shortcut-images/all_background7.png);
      background-position: 0px -1098px;
      background-size: 26px 1930px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
      filter: invert(89%);
    }
    .icon-sun {
      outline: none;
      &:focus {
      }
    }
  }
`;
export default DarkModeButton;
