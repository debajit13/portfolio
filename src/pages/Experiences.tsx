import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExperienceTimeline from '../components/experiences/ExperienceTimeline';

const Experiences = () => {
  return (
    <div>
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
