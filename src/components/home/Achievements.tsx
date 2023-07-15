import { Card, Typography } from '@mui/material';
import { achievementsData } from '../../constants/constant';

const Achievements = () => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Key Achievements</Typography>

      <Card className='p-3 w-100 mt-4' variant='elevation'>
        <ul>
          {achievementsData.map((achievementData) => (
            <li key={achievementData}>
              <Typography variant='body1' className='mt-2'>
                {achievementData}
              </Typography>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Achievements;
