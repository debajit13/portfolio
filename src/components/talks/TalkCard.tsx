import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from '@mui/icons-material';

const TalkCard: React.FC<{
  date: string;
  type: string;
  title: string;
  organiser: string;
  youtubeLink?: string;
  slidesLink?: string;
}> = ({ date, type, title, organiser, youtubeLink, slidesLink }) => {
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
        {(youtubeLink || slidesLink) && (
          <Box marginTop={2}>
            {youtubeLink && (
              <Button
                endIcon={<Link />}
                variant='contained'
                href={youtubeLink}
                target='_blank'
              >
                Youtube
              </Button>
            )}
            {slidesLink && (
              <Button
                endIcon={<Link />}
                variant='contained'
                href={slidesLink}
                target='_blank'
                sx={{
                  ml: youtubeLink ? 1 : 0,
                }}
              >
                Slides
              </Button>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TalkCard;
