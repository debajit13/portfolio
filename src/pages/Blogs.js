import { Typography } from '@mui/material';
import BlogCard from '../components/blogs/BlogCard';
import thisKeywordImage from '../assets/images/blogs/thisKeywordBlog.png';
import javaScriptVariablesImage from '../assets/images/blogs/javascriptVariables.png';
import getStartedWithTypeScriptImage from '../assets/images/blogs/getStartedWithTypeScript.png';
import deepDiveIntoGit1 from '../assets/images/blogs/deepDiveIntoGit1.png';
import deepDiveIntoGit2 from '../assets/images/blogs/deepDiveIntoGit2.png';
import indepthStateImage from '../assets/images/blogs/InDepthState.png';
import allAboutPropsImage from '../assets/images/blogs/AllAboutProps.png';
import propTypesAndDefaultPropsImage from '../assets/images/blogs/prop-types-default-props.png';

const Blogs = () => {
  const blogsData = [
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

  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        Blogs
      </Typography>
      {blogsData.length > 0 &&
        blogsData.map((blogData) => (
          <BlogCard
            blogTitle={blogData.blogTitle}
            blogDescription={blogData.blogDescription}
            blogLink={blogData.blogLink}
            blogImage={blogData.blogImage}
          />
        ))}
    </div>
  );
};

export default Blogs;
