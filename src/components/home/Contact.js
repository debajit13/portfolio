import { Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  const contactsData = [
    {
      id: 'Github',
      icon: <GitHubIcon fontSize='large' />,
      url: 'https://github.com/debajit13',
    },
    {
      id: 'LinkedIn',
      icon: <LinkedInIcon fontSize='large' />,
      url: 'https://www.linkedin.com/in/debajit-mallick/',
    },
    {
      id: 'Twitter',
      icon: <TwitterIcon fontSize='large' />,
      url: 'https://twitter.com/MallickDebajit',
    },
    {
      id: 'Email',
      icon: <EmailIcon fontSize='large' />,
      url: 'mailto:mallickdebajit3@gmail.com',
    },
  ];
  return (
    <section className='mt-5'>
      <Typography variant='h3'>Contact Me</Typography>
      <div className='d-flex mt-5 mb-5 justify-content-around w-50 m-auto'>
        {contactsData.map((contactData) => (
          <Link target='_blank' key={contactData.id} href={contactData.url}>
            {contactData.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Contact;
