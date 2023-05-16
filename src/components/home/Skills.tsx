import { Card, Grid, Typography } from '@mui/material';
import { skillsData } from '../../constants/constant';

const Skills = () => {
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Skills</Typography>
      <Grid container spacing={2} marginTop={1}>
        {skillsData.map((skill) => (
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
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
