import PropTypes from 'prop-types';
import { Card, CardMedia, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ProjectCard = ({ title, description, image, webURL, githubURL }) => {
  return (
    <>
      <Card className='d-flex mb-3'>
        <CardMedia
          image={image}
          component='img'
          sx={{ maxWidth: 130 }}
          alt={`${title} logo`}
          loading='lazy'
        />
        <Box className='ms-3 d-flex flex-column pt-1'>
          <Typography variant='h4' component='h1'>
            {title}
          </Typography>
          <Typography>
            <span className='fw-bold'>Description: </span>
            {description}
          </Typography>
          <Box>
            <Link href={webURL} target='_blank'>
              Website
            </Link>{' '}
            |{' '}
            <Link href={githubURL} target='_blank'>
              GitHub
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  webURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
};

export default ProjectCard;
