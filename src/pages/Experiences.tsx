import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExperienceTimeline from '../components/experiences/ExperienceTimeline';
import { Helmet } from 'react-helmet';

const Experiences = () => {
  return (
    <div>
      <Helmet>
        <title>Experiences | Debajit Mallick</title>
      </Helmet>
      <Typography variant='h3' className='mb-4 mt-3'>
        Experiences
      </Typography>
      <Box>
        <ExperienceTimeline />
      </Box>
    </div>
  );
};

export default Experiences;
