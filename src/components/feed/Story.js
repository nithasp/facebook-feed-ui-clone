import React, { useState, useEffect } from "react";
import styled from "styled-components";

import StoryData from "../../data/story_data.json";
const Story = () => {
  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    setStoryData(StoryData);
  }, []);

  return (
    <StoryWrapper className="story">
      <div className="wrap-story">
        <div className="create-story item-story">
          <div className="create-story-section1">
            <img src="./images/story/1.jpg" alt="my-profile-story" />
          </div>
          <div className="create-story-section2">
            <div className="block">
              <div className="wrap-icon">
                <div className="icon"></div>
              </div>
            </div>
            <span>Create Story</span>
          </div>
        </div>

        {storyData.map((item) => {
          const { id, story_image, user_thumbnail, user_name } = item;
          return (
            <div className="friend-story item-story" key={id}>
              <div className="wrap-thumbnail">
                <img
                  src={user_thumbnail}
                  alt="thumbnail"
                  className="thumbnail"
                />
              </div>
              <div className="wrap-story-image">
                <img src={story_image} alt="friend-story" />
              </div>
              <div className="name">
                <span>{user_name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="see-all-stories">
        <div className="wrap-icon">
          <div className="icon"></div>
        </div>
      </div>
    </StoryWrapper>
  );
};

const StoryWrapper = styled.div`
  position: relative;
  .wrap-story {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
  .item-story {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 198.4px;
    background: ${(props) => props.theme.storyBackgroundColor};
    cursor: pointer;
  }
  .create-story {
    position: relative;
    .create-story-section1 {
      img {
        width: 100%;
        height: 149.4px;
        transition: 0.3s ease;
        filter: brightness(0.78);
        &:hover {
          transform: scale(1.03);
        }
      }
    }
    .create-story-section2 {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
      .wrap-icon {
        position: relative;
        top: 2px;
        margin: 0 auto;
        width: 40px;
        height: 40px;
        background: #2e89ff;
        border-radius: 50%;
        border: 4px solid ${(props) => props.theme.storyCreateBorderColor};
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          background-image: url("./images/shortcut-images/all_background4.png");
          background-position: 0 -422px;
          background-size: 50px 514px;
          width: 24px;
          height: 24px;
          filter: invert(89%);
        }
      }

      span {
        font-family: inherit;
        font-size: 0.8125rem;
        font-weight: 600;
        color: ${(props) => props.theme.storyCreateTextColor};
      }
    }
  }

  .friend-story {
    position: relative;
    .wrap-thumbnail {
      position: absolute;
      left: 10px;
      top: 10px;
      border: 5px solid #2e89ff;
      border-radius: 50%;
      overflow: hidden;
      width: 40px;
      height: 40px;
      z-index: 1;
      img {
        transform: scale(1.2);

        width: 100%;
        height: 100%;
      }
    }
    .wrap-story-image {
      height: 100%;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        filter: brightness(0.8);
        transition: 0.3s ease;
        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .name {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 5px 10px;
      span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        font-size: 0.9375rem;
        font-weight: 600;
        font-family: inherit;
        line-height: 1.3333;
        color: ${(props) => props.theme.storyTextColor};
      }
    }
  }
  .see-all-stories {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.allStoryButtonBackground};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease;
    border: 1.5px solid ${(props) => props.theme.navbarBottomBorderColor};
    &:hover {
      background-color: ${(props) => props.theme.allStoryButtonBackgroundHover};
    }
    .icon {
      background-image: url("./images/shortcut-images/all_background3.png");
      background-position: 0 -184px;
      background-size: 34px 974px;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
      filter: ${(props) => props.theme.allStoryButton};
    }
  }
  @media (max-width: 1150px) {
    .wrap-story {
      grid-template-columns: repeat(4, 1fr);
    }
    .wrap-story .item-story:last-child {
      display: none;
    }
  }

  @media (max-width: 610px) {
    .friend-story:last-child {
      display: none;
    }
    .wrap-story {
      grid-template-columns: repeat(4, 1fr);
    }
    .see-all-stories {
      right: 5px;
    }
  }
`;

export default Story;
