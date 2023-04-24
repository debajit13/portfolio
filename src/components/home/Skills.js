import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import skillsImage from '../../assets/images/skills/skills.png';
import BorderLinearProgress from '../UI/BorderLinerProgress';

const Skills = () => {
  const skills = [
    {
      name: 'HTML 5',
      value: 90,
    },
    {
      name: 'CSS 3',
      value: 60,
    },
    {
      name: 'JavaScript',
      value: 80,
    },
    {
      name: 'React.js',
      value: 70,
    },
    {
      name: 'Vue.js',
      value: 60,
    },
  ];

  return (
    <section className='mt-5'>
      <Typography variant='h3'>Skills</Typography>
      <Grid container>
        <Grid md={4} sm={12} xs={12}>
          <img
            src={skillsImage}
            alt='Skills logo'
            width='100%'
            style={{
              maxWidth: '500px',
            }}
          />
        </Grid>
        <Grid
          md={8}
          sm={12}
          xs={12}
          display='flex'
          justifyContent='space-between'
          flexDirection='column'
        >
          {skills.map((skills) => (
            <Box
              key={skills.name}
              sx={{
                margin: {
                  xs: '12px',
                },
              }}
            >
              <Typography className='mb-2'>{skills.name}</Typography>
              <BorderLinearProgress
                variant='determinate'
                value={skills.value}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </section>
  );
};

export default Skills;
