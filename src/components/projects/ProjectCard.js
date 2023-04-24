import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Link } from '@mui/icons-material';
import { Box } from '@mui/system';

const ProjectCard = ({ title, description, image, webURL, githubURL }) => {
  return (
    <>
      <Card className='mb-3'>
        <CardContent className='d-flex'>
          <CardMedia
            image={image}
            component='img'
            sx={{ maxWidth: 130, borderRadius: 5 }}
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
              <Button
                endIcon={<Link />}
                variant='contained'
                href={webURL}
                target='_blank'
                sx={{
                  m: 1,
                }}
              >
                Website
              </Button>
              <Button
                endIcon={<Link />}
                variant='contained'
                href={githubURL}
                target='_blank'
                sx={{
                  m: 1,
                }}
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </CardContent>
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
