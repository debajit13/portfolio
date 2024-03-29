import Carousel from 'react-material-ui-carousel';
import { Card, Paper, Skeleton, Typography } from '@mui/material';

const Testimonial: React.FC<{
  testimonials: any[];
  isLoading: boolean;
  isError: boolean;
}> = ({ testimonials, isLoading, isError }) => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Testimonials</Typography>
      {isLoading ? (
        <Card className='p-3 w-100 mt-4' variant='elevation'>
          <Skeleton animation='wave' />
          <Skeleton animation='wave' />
        </Card>
      ) : isError ? (
        <Card className='p-3 w-100 mt-4' variant='elevation'>
          <Typography>
            Something went wrong! Testimonials data not available
          </Typography>
        </Card>
      ) : (
        <Carousel className='mt-4'>
          {testimonials.map((testimonialData) => (
            <Paper className='p-4 text-center' key={testimonialData.name}>
              <img
                src={testimonialData.image}
                alt={testimonialData.name}
                className='rounded-circle mb-2'
                height='150px'
                loading='lazy'
              />
              <Typography variant='h4' component='h2'>
                {testimonialData.name}
              </Typography>
              <Typography variant='h5' component='h3' marginTop={1}>
                {testimonialData.role}
              </Typography>
              <Typography variant='body1' marginTop={1}>
                {testimonialData.testimonial}
              </Typography>
            </Paper>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default Testimonial;
