import { Card, Skeleton, Typography } from '@mui/material';

const Achievements: React.FC<{
  achivements: string[];
  isError: boolean;
  isLoading: boolean;
}> = ({ achivements, isError, isLoading }) => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Key Achievements</Typography>

      <Card className='p-3 w-100 mt-4' variant='elevation'>
        {isLoading ? (
          <>
            <Skeleton animation='wave' />
            <Skeleton animation='wave' />
          </>
        ) : isError ? (
          <Typography>
            Something went wrong! Achivements data not available
          </Typography>
        ) : (
          <ul>
            {achivements.map((achievement) => (
              <li key={achievement}>
                <Typography variant='body1' className='mt-2'>
                  {achievement}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default Achievements;
