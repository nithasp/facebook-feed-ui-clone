import React, { useState, useEffect } from "react";
import styled from "styled-components";

import shortcutList1 from "../../data/shortcut_lists1.json";
import shortcutList2 from "../../data/shortcut_lists2.json";
const ShortCut = () => {
  const [shortcutData1, setShortcutData1] = useState([]);
  const [shortcutData2, setShortcutData2] = useState([]);

  useEffect(() => {
    setShortcutData1(shortcutList1);
    setShortcutData2(shortcutList2);
  }, []);

  return (
    <ShortCutWrapper className="shortcut-wrapper">
      <div className="shortcut-section1">
        {shortcutData1.map((item, index) => {
          const { id, icon, shortcut_name } = item;
          return (
            <div className="shortcut-item" key={id}>
              <div className="wrap-shortcut-item">
                <div className="wrap-icon">
                  <img src={icon} className="icon" alt={shortcut_name} />
                </div>
                <span className="name">{shortcut_name}</span>
              </div>
              {/* {shortcut_name === "Watch" && (
                <small>
                  <span className="circle"></span>
                  <span className="text">3 new video</span>
                </small>
              )} */}
            </div>
          );
        })}
      </div>
      <div className="see-more-section shortcut-item">
        <div className="wrap-shortcut-item">
          <div className="wrap-icon">
            <span></span>
          </div>
          <span>See More</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="shortcut-section2">
        <div className="title">
          <span>Your Shortcuts</span>
          <span>Edit</span>
        </div>
        {shortcutData2.map((item, index) => {
          const { id, icon, shortcut_name } = item;
          return (
            <div className="shortcut-item" key={id}>
              <div className="wrap-shortcut-item">
                <div className="wrap-icon">
                  <img src={icon} className="icon" alt={shortcut_name} />
                </div>
                <span className="name">{shortcut_name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shortcut-section3 footer">
        <div className="wrap-left-sidebar-footer">
          <span className="title">
            Privacy
            <span className="dot"> · </span>
          </span>
          <span className="title">
            Terms<span className="dot"> · </span>
          </span>
          <span className="title">
            Advertising<span className="dot"> · </span>
          </span>
          <span className="title">
            Ad Choices
            <div className="ads-logo"></div>
            <span className="dot"> · </span>
          </span>
          <span className="title">
            Cookies<span className="dot"> · </span>
          </span>
          <span className="title">
            More<span className="dot"> · </span>
          </span>
          <span className="title">
            Facebook © 2021<span className="dot"> · </span>
          </span>
        </div>
      </div>
    </ShortCutWrapper>
  );
};

const ShortCutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 97vh;
  padding-top: 70px;
  overflow-y: auto;

  border-color: transparent;
  transition: border-color 0.2s linear;
  &:hover {
    border-color: #5e5e5f;
  }

  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    border-right-style: inset;
    border-right-color: inherit;
    border-right-width: calc(100vw + 100vh);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    margin-top: 70px;
  }

  .shortcut-section1 {
  }
  .shortcut-item {
    transition: 0.1s ease;
    padding: 8px 5px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.hoverItemBackground};
    }
  }
  .wrap-shortcut-item {
    display: flex;
    align-items: center;
  }
  .wrap-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  .icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .name {
    font-size: 0.9rem;
    font-weight: 500;
  }
  small {
    position: relative;
    top: -10px;
    left: 38px;
    .circle {
      display: inline-block;
      border-radius: 50%;
      width: 7px;
      height: 7px;
      background-color: #2e89ff;
    }
    .text {
      position: relative;
      left: 3px;
      color: #2e89ff;
      font-size: 12px;
    }
  }
  .see-more-section {
    .wrap-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.seeMoreButtonBackground};
      width: 28px;
      height: 28px;
      border-radius: 50%;
      span {
        background: url(./images/shortcut-images/all_background.png);
        background-position: -46.5px -211px;
        background-size: 74px 500px;
        filter: invert(89%);
        width: 15px;
        height: 15px;
        display: block;
        background-repeat: no-repeat;
        border-radius: 50%;
        filter: ${(props) => props.theme.seeMoreButton};
      }
    }
  }
  .line {
    width: 95%;
    height: 0.5px;
    background-color: ${(props) => props.theme.lineColor};
    margin-left: 7px;
    margin-top: 20px;
  }

  .shortcut-section2 {
    flex-grow: 1;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 5px 10px;
      span:first-child {
        color: ${(props) => props.theme.titleTextColor};
        font-size: 1.0625rem;
        font-weight: 600;
      }
      span:nth-child(2) {
        opacity: 0;
        padding: 8px;
        color: #4599ff;
        font-size: 0.9375rem;
        font-weight: normal;
        transition: 0.2s;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: ${(props) => props.theme.hoverItemBackground};
        }
      }
    }
    &:hover {
      .title {
        span:nth-child(2) {
          opacity: 1;
        }
      }
    }
  }

  .shortcut-section3 {
    line-height: 15px;
    padding-top: 5px;
    span.title {
      font-size: 0.75rem;
      color: ${(props) => props.theme.textColor2};
      .ads-logo {
        background: url(./images/shortcut-images/all_background.png);
        background-position: -49px -477px;
        background-size: 73px 536px;
        width: 12px;
        height: 12px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: invert(80%);
        margin-left: 3px;
        position: relative;
        top: 2px;
      }
    }
  }
`;
export default ShortCut;
