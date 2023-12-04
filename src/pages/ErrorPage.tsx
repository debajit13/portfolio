import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
      }}
    >
      <img
        src='https://ik.imagekit.io/debajit13/utilitis/404-not-found.svg?updatedAt=1701668953919'
        alt='404 Page Not Found'
        width='100%'
      />
      <Typography variant='h3' marginBottom={2}>
        Something went wrong!
      </Typography>
      <Typography variant='h4'>Page Not Found</Typography>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginTop={3}
      >
        <Link to='/'>
          <Button
            variant='contained'
            sx={{
              marginBottom: 4,
            }}
          >
            Go Back To Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default ErrorPage;
