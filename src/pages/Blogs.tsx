import { Typography } from '@mui/material';
import BlogCard from '../components/blogs/BlogCard';
import { blogsData } from '../constants/constant';

const Blogs = () => {
  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        Blogs
      </Typography>
      {blogsData.length > 0 &&
        blogsData.map((blogData) => (
          <BlogCard
            key={blogData.blogTitle}
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
