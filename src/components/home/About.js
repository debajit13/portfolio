import { Typography } from '@mui/material';

const About = () => {
  return (
    <section>
      <Typography
        variant='h2'
        sx={{ fontWeight: 'bold' }}
        component='h1'
        padding={1}
      >
        👋 Hi, Welcome to my space
      </Typography>

      <Typography padding={1} variant='body1'>
        I am Debajit, a 23 years old Software Engineer with 2+ years of
        experience. Currently, I am working at{' '}
        <span className='fw-bold'>P360</span> as a{' '}
        <span className='fw-bold'>Software Engineer</span>. My expertise is in{' '}
        <span className='fw-bold'>Frontend Web Development</span>.
      </Typography>
      <Typography padding={1} variant='body1'>
        Currently, I am learning Angular. I am very active in technical
        communities. I am the{' '}
        <span className='fw-bold'>Organizer of GDG Siliguri</span>,{' '}
        <span className='fw-bold'>Ex β-MLSA</span>,{' '}
        <span className='fw-bold'>Ex Hack Club Lead</span>, and{' '}
        <span className='fw-bold'>Ex GSSOC Ambassador</span>.
      </Typography>
      <Typography padding={1} variant='body1'>
        Also, I am a <span className='fw-bold'>Tech Speaker</span> too. I have
        given technical talks at many events like{' '}
        <span className='fw-bold'>GDSC WOW KOLKATA</span>,{' '}
        <span className='fw-bold'>FrontendDays Siliguri</span>,{' '}
        <span className='fw-bold'>GDG Bhopal</span>,{' '}
        <span className='fw-bold'>JWOC</span>,{' '}
        <span className='fw-bold'>Azure Devday</span>,{' '}
        <span className='fw-bold'>Hack Club SIT</span>,{' '}
        <span className='fw-bold'>GirlScript Siliguri</span>,{' '}
        <span className='fw-bold'>GDSC SIT</span>,{' '}
        <span className='fw-bold'>Codecademy Frontend Marathon</span> and many
        more.
      </Typography>
      <Typography padding={1} variant='body1'>
        I also like to participate in Hackathons and Open Source events. I won
        the <span className='fw-bold'>Smart India Hackathon 2020</span> and
        contributed to <span className='fw-bold'>HacktoberFest 2019</span>,{' '}
        <span className='fw-bold'>HacktoberFest 2020</span>,{' '}
        <span className='fw-bold'>JWOC</span> and{' '}
        <span className='fw-bold'>GWOC</span>. Also, I mentored a team for{' '}
        <span className='fw-bold'>Smart India Hackathon 2022</span> that later
        won the Hackathon.
      </Typography>
    </section>
  );
};

export default About;
