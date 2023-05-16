import { Card, CardContent, Typography } from '@mui/material';

const TalkCard: React.FC<{
  date: string;
  type: string;
  title: string;
  organiser: string;
}> = ({ date, type, title, organiser }) => {
  return (
    <Card className='mb-3'>
      <CardContent>
        <Typography variant='body1' component='h3' className='mb-3'>
          {date} | {type}
        </Typography>
        <Typography variant='h4' component='h2'>
          {title}
        </Typography>
        <Typography variant='h5' component='h3' className='mt-3'>
          {organiser}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TalkCard;
