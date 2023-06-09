import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from '@mui/icons-material';
import { Box } from '@mui/system';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  webURL: string;
  githubURL: string;
}> = ({ title, description, image, webURL, githubURL }) => {
  return (
    <>
      <Card className='mb-3'>
        <CardContent className='d-flex'>
          <Grid container>
            <Grid item sm={2}>
              <CardMedia
                image={image}
                component='img'
                sx={{ maxWidth: '100%', borderRadius: 5 }}
                alt={`${title} logo`}
                loading='lazy'
              />
            </Grid>
            <Grid item sm={8}>
              <Box className='d-flex flex-column ms-md-3 mt-3 mt-md-0'>
                <Typography variant='h4' component='h2'>
                  {title}
                </Typography>
                <Typography>
                  <span className='fw-bold'>Description: </span>
                  {description}
                </Typography>
                <Box marginTop={2}>
                  <Button
                    endIcon={<Link />}
                    variant='contained'
                    href={webURL}
                    target='_blank'
                  >
                    Website
                  </Button>
                  <Button
                    endIcon={<Link />}
                    variant='contained'
                    href={githubURL}
                    target='_blank'
                    sx={{
                      ml: 1,
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
