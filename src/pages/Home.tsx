import { Box, Grid, Skeleton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react';
import { get, ref, child } from 'firebase/database';
import { database } from '../firebase.config';
import { HomeInterface } from '../interfaces/homeInterface';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';
import Testimonial from '../components/home/Testimonials';
import Achievements from '../components/home/Achievements';
import { Helmet } from 'react-helmet';

const initialHomeData = {
  profileImage: '',
  achivements: [],
  skills: [],
  testimonials: [],
};

const contactsData = [
  {
    id: 'Github',
    icon: <GitHubIcon fontSize='large' />,
    url: 'https://github.com/debajit13',
  },
  {
    id: 'LinkedIn',
    icon: <LinkedInIcon fontSize='large' />,
    url: 'https://www.linkedin.com/in/debajit-mallick/',
  },
  {
    id: 'Twitter',
    icon: <TwitterIcon fontSize='large' />,
    url: 'https://twitter.com/MallickDebajit',
  },
  {
    id: 'Email',
    icon: <EmailIcon fontSize='large' />,
    url: 'mailto:mallickdebajit3@gmail.com',
  },
];

const Home = () => {
  const [homeData, setHomeData] = useState<HomeInterface>(initialHomeData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    get(child(ref(database), '/home'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data: any = snapshot.val();
          setHomeData({ ...data });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.log('Data is not available.');
          setHomeData(initialHomeData);
          setIsLoading(false);
        }
      })
      .catch((errror) => {
        setIsLoading(false);
        setIsError(true);
        console.error(errror);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Debajit Mallick</title>
      </Helmet>
      <Grid container>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className='d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0 mt-md-0'
        >
          {isLoading ? (
            <Skeleton
              variant='circular'
              sx={{
                minHeight: '250px',
                minWidth: '250px',
                height: {
                  md: '400px',
                  sm: '300px',
                  xs: '250px',
                },
                width: {
                  md: '400px',
                  sm: '300px',
                  xs: '250px',
                },
              }}
            />
          ) : isError ? (
            <Typography>Something went wrong! Image not available.</Typography>
          ) : (
            <Box
              component='img'
              src={homeData?.profileImage}
              alt='profile pic'
              sx={{
                borderRadius: '50%',
                border: '4px solid #fff',
                boxShadow: '0px 6px 12px #ccc',
                minHeight: '200px',
                minWidth: '200px',
                height: {
                  md: '400px',
                  sm: '300px',
                  xs: '250px',
                },
                width: {
                  md: '400px',
                  sm: '300px',
                  xs: '250px',
                },
              }}
            />
          )}
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

      <Skills
        skills={homeData.skills}
        isLoading={isLoading}
        isError={isError}
      />
      <Testimonial
        testimonials={homeData.testimonials}
        isLoading={isLoading}
        isError={isError}
      />
      <Achievements
        achivements={homeData.achivements}
        isLoading={isLoading}
        isError={isError}
      />
      <Contact contacts={contactsData} />
    </>
  );
};

export default Home;
