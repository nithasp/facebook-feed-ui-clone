import React, { useState, useEffect } from "react";
import styled from "styled-components";

import UserData from "../../data/contact_users.json";

const Contacts = () => {
  const [contactUsers, setContactUsers] = useState([]);

  useEffect(() => {
    setContactUsers(UserData);
  }, []);

  return (
    <ContactsWrapper className="contacts">
      <div className="contacts-section1">
        <div className="contacts-section1-1">Contacts</div>
        <div className="contacts-section1-2">
          <div className="wrap-icon">
            <div className="icon new-room"></div>
            <div className="tooltip-box">New Room</div>
          </div>
          <div className="wrap-icon">
            <div className="icon search-by-name-or-group"></div>
            <div className="tooltip-box">Search by name or group</div>
          </div>
          <div className="wrap-icon">
            <div className="icon options"></div>
            <div className="tooltip-box">Options</div>
          </div>
        </div>
      </div>
      <div className="contacts-section2">
        {contactUsers.map((user) => {
          const { id, thumbnail, user_name } = user;
          return (
            <div className="contact-user" key={id}>
              <div className="wrap-thumbnail">
                <img src={thumbnail} alt="thumbnail" className="thumbnail" />
              </div>
              <span className="username">{user_name}</span>
            </div>
          );
        })}
      </div>
    </ContactsWrapper>
  );
};

const ContactsWrapper = styled.div`
  .contacts-section1 {
    display: flex;
    justify-content: space-between;
    .contacts-section1-1 {
      font-size: 1.0625rem;
      font-family: inherit;
      font-weight: 600;
      color: ${(props) => props.theme.titleTextColor};
      padding-left: 8px;
    }
    .contacts-section1-2 {
      display: flex;
      align-items: center;
      .wrap-icon {
        position: relative;
        margin-right: 5px;
        cursor: pointer;
        padding: 5px 8px;
        border-radius: 50%;
        transition: 0.2s ease;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          background: ${(props) =>
            props.theme.navbarIconBackgroundSection2Hover};
          .tooltip-box {
            opacity: 1;
            visibility: visible;
          }
        }

        .tooltip-box {
          position: absolute;
          bottom: -25px;
          right: 0px;
          width: auto;
          text-align: right;
          opacity: 0;
          visibility: hidden;

          font-size: 13px;
          color: ${(props) => props.theme.tooltipText};
          background-color: ${(props) => props.theme.tooltipBackground};
          padding: 5px 10px;
          border-radius: 8px;
          white-space: nowrap;
        }
      }
      .icon {
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        display: inline-block;
        filter: ${(props) => props.theme.contactIcon};
      }
      .icon.new-room {
        background-image: url("./images/shortcut-images/all_background2.png");
        background-position: -48px -220px;
        background-size: 502px 246px;
      }
      .icon.search-by-name-or-group {
        background-image: url("./images/shortcut-images/all_background.png");
        background-position: -36px -446px;
        background-size: 74px 520px;
      }
      .icon.options {
        background-image: url("./images/shortcut-images/all_background.png");
        background-position: -18px -380px;
        background-size: 74px 444px;
      }
    }
  }

  .contacts-section2 {
    .contact-user {
      display: flex;
      align-items: center;
      transition: 0.1s ease;
      padding: 5px 8px;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => props.theme.hoverItemBackground};
      }
    }
    .wrap-thumbnail {
      position: relative;
      margin-right: 10px;
      &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        right: 0;
        width: 6px;
        height: 6px;
        background-color: green;
        border-radius: 50%;
        border: 1.5px solid #000;
      }
    }
    .thumbnail {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .username {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
`;

export default Contacts;
