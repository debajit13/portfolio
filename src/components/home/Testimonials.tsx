import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import { testimonialsData } from '../../constants/constant';

const Testimonial = () => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Testimonials</Typography>
      <Carousel className='mt-4'>
        {testimonialsData.map((testimonialData) => (
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
    </section>
  );
};

export default Testimonial;
