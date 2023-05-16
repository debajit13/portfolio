import { Link } from '@mui/icons-material';
import { Button, Card, Grid, Typography } from '@mui/material';

const BlogCard: React.FC<{
  blogTitle: string;
  blogDescription: string;
  blogLink: string;
  blogImage: string;
}> = ({ blogTitle, blogDescription, blogLink, blogImage }) => {
  return (
    <Card className='mb-4'>
      <Grid container>
        <Grid md={4}>
          <img
            src={blogImage}
            alt='blog logo'
            width='100%'
            height='100%'
            loading='lazy'
          />
        </Grid>
        <Grid md={8} padding={2}>
          <Typography variant='h5' className='ms-2 mb-3'>
            {blogTitle}
          </Typography>
          <Typography variant='body1' className='ms-2 mb-3'>
            {blogDescription}
          </Typography>
          <Button
            href={blogLink}
            variant='contained'
            endIcon={<Link />}
            target='_blank'
            className='ms-2'
          >
            Blog Link
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default BlogCard;
