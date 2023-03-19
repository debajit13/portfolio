import { Typography } from '@mui/material';
import BlogCard from '../components/blogs/BlogCard';
import thisKeywordImage from '../assets/images/blogs/thisKeywordBlog.png';
import javaScriptVariablesImage from '../assets/images/blogs/javascriptVariables.png';
import getStartedWithTypeScriptImage from '../assets/images/blogs/getStartedWithTypeScript.png';
import deepDiveIntoGit1 from '../assets/images/blogs/deepDiveIntoGit1.png';
import deepDiveIntoGit2 from '../assets/images/blogs/deepDiveIntoGit2.png';

const Blogs = () => {
  const blogsData = [
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