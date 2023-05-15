import { Link, Typography } from '@mui/material';
import { contactsData } from '../../constants/constant.js';

const Contact = () => {
  return (
    <section className='mt-5'>
      <Typography variant='h5' textAlign='center'>
        Contact Me
      </Typography>
      <div className='d-flex mt-3 mb-4 justify-content-around w-50 m-auto'>
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
