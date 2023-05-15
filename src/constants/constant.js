// import blog images
import thisKeywordImage from '../assets/images/blogs/thisKeywordBlog.png';
import javaScriptVariablesImage from '../assets/images/blogs/javascriptVariables.png';
import getStartedWithTypeScriptImage from '../assets/images/blogs/getStartedWithTypeScript.png';
import deepDiveIntoGit1 from '../assets/images/blogs/deepDiveIntoGit1.png';
import deepDiveIntoGit2 from '../assets/images/blogs/deepDiveIntoGit2.png';
import indepthStateImage from '../assets/images/blogs/InDepthState.png';
import allAboutPropsImage from '../assets/images/blogs/AllAboutProps.png';
import propTypesAndDefaultPropsImage from '../assets/images/blogs/prop-types-default-props.png';
import conditionalRenderingImage from '../assets/images/blogs/conditional rendering.png';
import deepDiveIntoUseReducerImage from '../assets/images/blogs/deepDiveUseReducer.png';
// import project images
import shortLinkLogo from '../assets/images/projects/short_link_logo.png';
import gameStarLogo from '../assets/images/projects/game_star_logo.png';
import jokeReactLogo from '../assets/images/projects/joke_react.png';
import jseekrLogo from '../assets/images/projects/jseekr.svg';

export const blogsData = [
  {
    blogTitle: 'Deep Dive Into the useReducer() hook',
    blogDescription:
      'In React, useReducer() is one of the most important hooks. We use the useState() hook for component-based state management. That is good if your component only has two or three states. But if you have many states in the component, then useReducer() can be a better choice.',
    blogImage: deepDiveIntoUseReducerImage,
    blogLink:
      'https://dev.to/debajit13/deep-dive-into-the-usereducer-hook-1kom',
  },
  {
    blogTitle: 'Conditional Rendering and Rendering List in React',
    blogDescription:
      'Sometimes we want to show a React component when a condition yields true. It is called Conditional Rendering. Also, rendering through a list of values to display a Component multiple times is very common in React. In this blog, we are discussing these two topics.',
    blogImage: conditionalRenderingImage,
    blogLink:
      'https://dev.to/debajit13/conditional-rendering-and-rendering-list-in-react-4886',
  },
  {
    blogTitle: 'Prop Types and Default Props in React',
    blogDescription:
      'prop-types is a library with which you can check the type of props in React. With defaultProps, we can pass default values to props.',
    blogImage: propTypesAndDefaultPropsImage,
    blogLink:
      'https://dev.to/debajit13/prop-types-and-default-props-in-react-55jh',
  },
  {
    blogTitle: 'All You Need to Know About Props in React',
    blogDescription:
      'In React, we always think about Components. These components need a way to communicate with each other. Props are a great way to communicate between components by sharing data between them.',
    blogImage: allAboutPropsImage,
    blogLink:
      'https://dev.to/debajit13/all-you-need-to-know-about-props-in-react-1l40',
  },
  {
    blogTitle: 'An in-depth guide on State in React',
    blogDescription:
      'In React, State is one of the essential concepts to learn. If you are new to React or an intermediate-level developer, this article will help you to dive deep into State and help you to write better code.',
    blogImage: indepthStateImage,
    blogLink:
      'https://dev.to/debajit13/an-in-depth-guide-on-state-in-react-34m7',
  },
  {
    blogTitle: "'this' keyword in JavaScript",
    blogDescription:
      "If you are new to the world of JavaScript, then you may find 'this' keyword a little bit tricky. In this blog, I will discuss some basics of 'this' keyword, how we can use and its problems.",
    blogImage: thisKeywordImage,
    blogLink: 'https://dev.to/debajit13/this-keyword-in-javascript-2gh',
  },
  {
    blogTitle: 'JavaScript Variables (var vs let vs const)',
    blogDescription:
      'If you are new to the world of JavaScript, then you might be thinking that why JavaScript uses different keywords to declare a simple variable. So in this blog, I am going to discuss all of this and clear all your doubts.',
    blogImage: javaScriptVariablesImage,
    blogLink:
      'https://dev.to/debajit13/javascript-variables-var-vs-let-vs-const-57nj',
  },
  {
    blogTitle: 'Get Started with TypeScript',
    blogDescription:
      'Do you want to take your first step in the world of TypeScript? Do read this blog to get started on this journey.',
    blogImage: getStartedWithTypeScriptImage,
    blogLink: 'https://debajit13.hashnode.dev/get-started-with-typescript',
  },
  {
    blogTitle: 'Deep Dive into Git (Part I)',
    blogDescription:
      'What is Git? Why understanding it is so much important? In this article, we are going to understand it.',
    blogImage: deepDiveIntoGit1,
    blogLink: 'https://medium.com/@debajit13/deep-dive-into-git-2e190c5404ea',
  },
  {
    blogTitle: 'Deep Dive into Git (Part II)',
    blogDescription:
      "In my previous blog, I discussed 'what is Git?'. In this blog, I am going to share how you can get started with git commands.",
    blogImage: deepDiveIntoGit2,
    blogLink:
      'https://medium.com/@debajit13/deep-dive-into-git-part-ii-e3fe2bb24456',
  },
];

export const projectsData = [
  {
    title: 'Short Link',
    description: 'A ReactJS based URL shortener',
    image: shortLinkLogo,
    webURL: 'https://short-link-app.netlify.app/',
    githubURL: 'https://github.com/debajit13/short-link',
  },
  {
    title: 'Game Star',
    description: 'A project to display the list of your favourite games',
    image: gameStarLogo,
    webURL: 'https://gamestar.netlify.app/',
    githubURL: 'https://github.com/debajit13/Game-Star',
  },
  {
    title: 'Joke React',
    description: 'A simple Joke App that makes you laugh.',
    image: jokeReactLogo,
    webURL: 'https://joke-react.netlify.app/',
    githubURL: 'https://github.com/debajit13/joke-react',
  },
  {
    title: 'JSeekr',
    description: 'Find jobs of top multinational companies',
    image: jseekrLogo,
    webURL: 'https://jseekr.netlify.app/',
    githubURL: 'https://github.com/debajit13/JSeeker',
  },
];

export const talksData = [
  {
    title: 'Take Your First Steps with VueJS',
    date: 'September 10, 2022',
    organiser: 'Frontenddays Siliguri',
    type: 'Offline',
  },
  {
    title: 'Overview of Azure Technology',
    date: 'June 12, 2022',
    organiser: 'Azure DevDay Siliguri',
    type: 'Offline',
  },
  {
    title: 'Intro to ReactJS (Frontend Marathon)',
    date: 'June 6, 2021',
    organiser: 'Codecademy',
    type: 'Offline',
  },
  {
    title: 'Frontend: The Hard Parts',
    date: 'March 3, 2023',
    organiser: 'GDSC SIT',
    type: 'Offline',
  },
  {
    title: 'How to become a Job Ready Frontend Developer',
    date: 'February 18, 2023',
    organiser: 'JWOC',
    type: 'Offline',
  },
  {
    title: 'Demystifying The Frontend Development ',
    date: 'August 13, 2022',
    organiser: 'GDG Siliguri',
    type: 'Offline',
  },
  {
    title: 'Get Started with Git and GitHub',
    date: 'February 3, 2022',
    organiser: 'Microsoft Learn Student Ambassadors',
    type: 'Online',
  },
  {
    title: 'Getting Started with Git and GitHub',
    date: 'November 18, 2019',
    organiser: 'Hack Club SIT',
    type: 'Offline',
  },
  {
    title: 'All About Frontend',
    date: 'May 11, 2022',
    organiser: 'Hack Club SIT',
    type: 'Offline',
  },
  {
    title: 'How you should React: For Beginners',
    date: 'January 12, 2022',
    organiser: 'GDG Bhopal X NEXTJS Developer Community India',
    type: 'Online',
  },
  {
    title: 'Hack the Best: Hacktoberfest',
    date: 'October 2, 2020',
    organiser: 'DSC SIT X Hack Club SIT',
    type: 'Online',
  },
  {
    title: 'Boost Your Career in Frontend Development ',
    date: 'March 24, 2023',
    organiser: 'Techne Association',
    type: 'Offline',
  },
  {
    title: 'An Introduction to Engineering',
    date: 'October 11, 2020',
    organiser: 'Hack Club SIT',
    type: 'Online',
  },
  {
    title: 'Learn Git and GitHub with Abhinav and Debajit',
    date: 'March 18, 2020',
    organiser: 'GDG Siliguri',
    type: 'Online',
  },
  {
    title: 'Open Source and GSSoC 2020',
    date: 'December 15, 2019',
    organiser: 'GirlScript Siliguri',
    type: 'Offline',
  },
  {
    title: 'Build Your First CRUD App using React and Firebase',
    date: 'April 9, 2023',
    organiser: 'GDSC WOW Kolkata',
    type: 'Offline',
  },
];