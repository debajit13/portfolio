import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import { Link, SentimentDissatisfied } from '@mui/icons-material';

const TalkCard: React.FC<{
  date: string;
  type: string;
  title: string;
  organiser: string;
  youtubeLink?: string;
  slidesLink?: string;
  topics: string[];
}> = ({ date, type, title, organiser, youtubeLink, slidesLink, topics }) => {
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
        <Box sx={{ marginTop: '10px' }}>
          {topics &&
            topics.map((topic) => (
              <Chip
                key={topic}
                label={topic}
                sx={{ margin: '3px 6px 3px 0px' }}
              />
            ))}
        </Box>
        <Box marginTop={2} display={'flex'}>
          <Button
            endIcon={youtubeLink && <Link />}
            variant='contained'
            href={youtubeLink || ''}
            target='_blank'
            disabled={youtubeLink ? false : true}
          >
            {youtubeLink ? 'Youtube' : <SentimentDissatisfied />}
            {!youtubeLink && ' Video is Unavailable!'}
          </Button>
          <Button
            endIcon={<Link />}
            variant='contained'
            href={slidesLink || ''}
            target='_blank'
            sx={{
              ml: 1,
            }}
            disabled={slidesLink ? false : true}
          >
            {slidesLink ? 'Slides' : <SentimentDissatisfied />}
            {!slidesLink && ' Slides are Unavailable!'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TalkCard;
