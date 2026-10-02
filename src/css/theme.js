import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor1: "#f0f2f5",
  backgroundColor2: "#ffffff",
  hoverItemBackground: "#e4e6e8",
  searchFacebookText: "#797b7e",

  textColor1: "#050505",
  textColor2: "#65676b",
  titleTextColor: "#65676b",
  lineColor: "#d6d8dc",

  seeMoreButton: "invert(0%)",
  seeMoreButtonBackground: "#e4e6eb",

  sidebarBackgroundColor: "#18191a",
  feedBackgroundColor: "#242526",

  // Navbar
  navbarText: "#e4e6eb",
  navbarBackgroundColor: "#FFFFFF",
  navbarSearchTextColor: "#65676B",
  navbarSearchIcon: "invert(40%)",
  navbarSearchBackgroundColor: "#f0f2f5",
  navbarBottomBorderColor: "#e4e6e9",

  navbarIconSection2: "#717377",
  navbarIconSection2Hover: "#b0b3b8",
  navbarIconBackgroundSection2Hover: "#f2f2f2",

  navbarIconSection3IconSVG: "#1d1f23",
  navbarIconSection3Icon: "invert(0%)",
  navbarIconSection3Background: "#e4e6eb",
  navbarIconSection3Hover: "#b0b3b8",
  navbarIconBackgroundSection3Hover: "#d8dadf",

  tooltipText: "#d1d3d7",
  tooltipBackground: "#39393a",

  // Contact
  contactIcon: "invert(40%)",

  // Story
  allStoryButton: "invert(0%)",
  allStoryButtonBackground: "#ffffff",
  allStoryButtonBackgroundHover: "#f2f2f2",

  storyBackgroundColor: "#FFFFFF",
  storyTextColor: "#FFFFFF",
  storyCreateTextColor: "#050505",
  storyCreateBackgroundColor: "red",
  storyCreateBorderColor: "#ffffff",

  // New Post
  dateTextColor: "#8394b8",
  dateIconColor: "invert(40%)",
  seeMoreColor: "#0b0b0b",
  newPostTextColor1: "#9c9d9f",
  newPostTextColor2: "#8b7b7d",

  likeAndAnswerTextColor: "#717076",
  likeAndAnswerIconColor: "invert(50%)",
  likeAndAnswerIconColorBackgroundHover: "#f2f2f2",

  mostRelevantTextColor: "#70696b",
  mostRelevantIconColor: "invert(50%)",

  commentTextColor: "#050505",
  commentPlaceholderColor: "#7c718d",
  commentBackgroundColor: "#f0f2f5",

  emojiColor: "invert(45%)",
  emijiBackgroundColorHover: "#e4e6e8",

  likeAndReplyTextColor: "#65676b",

  viewMoreCommentTextColor: "#6b6d70",
  viewMoreCommentTextColor2: "#9c9d9f",
};

export const darkTheme = {
  backgroundColor1: "#18191a",
  backgroundColor2: "#242526",
  hoverItemBackground: "#3a3b3c",
  searchFacebookText: "#797b7e",

  textColor1: "#e4e6eb",
  textColor2: "#b0b3b8",
  titleTextColor: "#b0b3b8",
  lineColor: "#404052",

  seeMoreButton: "invert(89%)",
  seeMoreButtonBackground: "#303031",

  sidebarBackgroundColor: "#18191a",
  feedBackgroundColor: "#242526",

  // Navbar
  navbarText: "#e4e6eb",
  navbarBackgroundColor: "#242526",
  navbarSearchTextColor: "#b0b3b8",
  navbarSearchIcon: "invert(65%)",
  navbarSearchBackgroundColor: "#3a3b3c",
  navbarBottomBorderColor: "#343536",

  navbarIconSection2: "#b0b3b8",
  navbarIconSection2Hover: "#b0b3b8",
  navbarIconBackgroundSection2Hover: "#3a3b3c",

  navbarIconSection3IconSVG: "#e4e6eb",
  navbarIconSection3Icon: "invert(89%)",
  navbarIconSection3Background: "#3a3b3c",
  navbarIconSection3Hover: "#b0b3b8",
  navbarIconBackgroundSection3Hover: "#4e4f50",

  tooltipText: "#474747",
  tooltipBackground: "#c8c8c8",

  // Contact
  contactIcon: "invert(65%)",

  // Story
  allStoryButton: "invert(70%)",
  allStoryButtonBackground: "#3e4042",
  allStoryButtonBackgroundHover: "#525355",

  storyBackgroundColor: "#242526",
  storyTextColor: "#FFFFFF",
  storyCreateTextColor: "#E4E6EB",

  storyCreateBackgroundColor: "red",
  storyCreateBorderColor: "#242526",

  // New Post
  dateTextColor: "#b0b3b8",
  dateIconColor: "invert(60%)",
  seeMoreColor: "#e4e6eb",
  newPostTextColor1: "#b0b3b8",
  newPostTextColor2: "#b0b3b8",

  likeAndAnswerTextColor: "#B0B3B8",
  likeAndAnswerIconColor: "invert(60%)",
  likeAndAnswerIconColorBackgroundHover: "#3a3b3c",

  mostRelevantTextColor: "#B0B3B8",
  mostRelevantIconColor: "invert(70%)",

  commentTextColor: "#E4E1E0",
  commentPlaceholderColor: "#B0B3B8",
  commentBackgroundColor: "#3A3B3C",

  emojiColor: "invert(70%)",
  emijiBackgroundColorHover: "#4E4F50",

  likeAndReplyTextColor: "#B0B3B8",

  viewMoreCommentTextColor: "#B0B3B8",
  viewMoreCommentTextColor2: "#B0B3B8",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    color: ${(props) => props.theme.textColor1};
    background: ${(props) => props.theme.backgroundColor1};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
}

img {
  object-fit: cover;
}

.inner {
  width: 95vw;
  margin: 0 auto;
  position: relative;
}

.ul-cleargap {
  display: flex;
  list-style: none;
  margin: 0 !important;
}

a a:hover,
a:focus {
  text-decoration: none;
}

.capitalize {
  text-transform: uppercase !important;
}

/* .sidebar {
  position: sticky;
  top: 70px;
  max-width: 280px;
  width: 100%;
  height: 100%;
  padding-top: 0px;
} */


`;
