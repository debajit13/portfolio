import { Grid } from '@mui/material';
import About from '../components/home/About';
import profileImage from '../assets/images/profile_pic.jpeg';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import Testimonial from '../components/home/Testimonials';
import Achievements from '../components/home/Achievements';

const Home = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className='d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0 mt-md-0'
        >
          <img
            src={profileImage}
            alt='profile pic'
            width='80%'
            style={{
              borderRadius: '50%',
              border: '4px solid #fff',
              boxShadow: '0px 6px 12px #ccc',
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className='d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0 mt-md-0'
        >
          <About />
        </Grid>
      </Grid>

      <Skills />
      <Testimonial />
      <Achievements />
      <Contact />
    </>
  );
};

export default Home;
