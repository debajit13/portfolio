import { Box, Card, Grid, Skeleton, Typography } from '@mui/material';

const Skills: React.FC<{
  skills: any[];
  isLoading: boolean;
  isError: boolean;
}> = ({ skills, isLoading, isError }) => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Skills</Typography>
      <Grid container spacing={2} marginTop={1}>
        {isLoading ? (
          <Box
            display={'flex'}
            flexBasis={0}
            flexGrow={1}
            justifyContent='center'
            alignItems='center'
          >
            <Skeleton
              sx={{
                m: 1,
                borderRadius: 10,
              }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={210}
            />
            <Skeleton
              sx={{
                m: 1,
                borderRadius: 10,
              }}
              variant='rectangular'
              animation='wave'
              width={'100%'}
              height={210}
            />
          </Box>
        ) : isError ? (
          <Typography>
            Something went wrong! Skills data not available.
          </Typography>
        ) : (
          skills.map((skill) => (
            <Grid
              item={true}
              key={skill.name}
              md={4}
              sm={6}
              xs={6}
              textAlign='center'
            >
              <Card className='p-4 w-100' variant='elevation'>
                <img src={skill.image} alt={skill.name} loading='lazy' />
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </section>
  );
};

export default Skills;
