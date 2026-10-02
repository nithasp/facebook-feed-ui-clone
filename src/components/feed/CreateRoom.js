import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserData from "../../data/create_room_users.json";

const CreateRoom = () => {
  const [contactUsersCreateRoom, setContactUsersCreateRoom] = useState([]);

  useEffect(() => {
    setContactUsersCreateRoom(UserData);
  }, []);

  return (
    <CreateRoomWrapper className="create-room-wrapper">
      <div className="create-room-section1">
        <div className="wrap-create-room-button">
          <div className="create-room-icon"></div>
          <span className="create-room-button">Create Room</span>
        </div>
      </div>
      <div className="create-room-section2">
        {contactUsersCreateRoom.map((user) => {
          const { id, thumbnail } = user;
          return (
            <div className="contact-user" key={id}>
              <div className="wrap-thumbnail">
                <img src={thumbnail} alt="thumbnail" className="thumbnail" />
              </div>
              {/* <span className="username">{user_name}</span> */}
            </div>
          );
        })}
      </div>
      {/* <div className="next-button">
        <div className="wrap-icon">
          <svg
            viewBox="0 0 20 20"
            width="1em"
            height="1em"
            class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv rgmg9uty b73ngqbp"
          >
            <path d="m7.8 4.53 5.473 5.47-5.473 5.47a.75.75 0 0 0 1.061 1.06l6-6a.751.751 0 0 0 0-1.06l-6-6a.75.75 0 0 0 -1.061 1.06z"></path>
          </svg>
        </div>
      </div> */}
    </CreateRoomWrapper>
  );
};

const CreateRoomWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor2};
  padding: 10px 15px;
  border-radius: 8px;
  margin-top: 15px;

  .create-room-section1 {
    border: 2.5px solid ${(props) => props.theme.navbarBottomBorderColor};
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      background-color: #3a3b3c;
      border: 2.5px solid #3c4d63;
    }
    .wrap-create-room-button {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .create-room-icon {
      background-image: url("./images/shortcut-images/all_background2.png");
      background-position: 0 -220px;
      background-size: 502px 246px;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      display: inline-block;
      position: relative;
      top: 1px;
    }
    .create-room-button {
      font-size: 0.9375rem;
      font-weight: 600;
      color: #4393f4;
      white-space: nowrap;
    }
  }

  .create-room-section2 {
    display: flex;
    .contact-user {
      display: flex;
      align-items: center;
      transition: 0.1s ease;
      border-radius: 8px;
      transition: 0.3s ease;
      cursor: pointer;
      margin-right: 15px;
      &:hover {
        filter: brightness(1.2);
      }
    }
    .wrap-thumbnail {
      position: relative;
      left: 20px;

      &::after {
        content: "";
        position: absolute;
        bottom: 4px;
        right: 0;
        width: 9px;
        height: 9px;
        background-color: green;
        border-radius: 50%;
        border: 1.5px solid #000;
      }
    }
    .thumbnail {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .username {
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  .next-button {
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    background-color: #3e4042;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease;
    .wrap-icon {
      position: relative;
      top: 2px;
    }
    svg {
      transition: 0.2s ease;
      fill: #b0b3b8;
      width: 27px;
      height: 27px;
    }
    &:hover {
      background-color: #525355;
      svg {
        fill: white;
      }
    }
  }

  @media (max-width: 460px) {
    .contact-user:last-child {
      display: none;
    }
  }
`;

export default CreateRoom;
