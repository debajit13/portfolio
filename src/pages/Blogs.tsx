import { Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { get, ref, child } from 'firebase/database';
import { database } from '../firebase.config';
import { BlogInterface } from '../interfaces/blogInterface';
import BlogCard from '../components/blogs/BlogCard';

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    get(child(ref(database), '/blogs'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data: any[] = snapshot.val();
          setBlogs([...data]);
          setIsLoading(false);
        } else {
          console.log('Data is not available!');
          setIsLoading(false);
          setBlogs([]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        Blogs
      </Typography>
      {isLoading ? (
        <>
          <Skeleton animation='wave' width='100%' height={300} />
          <Skeleton animation='wave' width='100%' height={300} />
        </>
      ) : isError ? (
        <Typography>Something went wrong! Blogs data not available.</Typography>
      ) : blogs.length === 0 ? (
        <Typography>No blogs available!</Typography>
      ) : (
        blogs.map((blogData) => (
          <BlogCard
            key={blogData.blogTitle}
            blogTitle={blogData.blogTitle}
            blogDescription={blogData.blogDescription}
            blogLink={blogData.blogLink}
            blogImage={blogData.blogImage}
          />
        ))
      )}
    </div>
  );
};

export default Blogs;
