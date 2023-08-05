import { Typography } from '@mui/material';
import TalkCard from '../components/talks/TalkCard';
import { talksData } from '../constants/constant';

const Talks = () => {
  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        Talks
      </Typography>
      {talksData.map((talk) => (
        <TalkCard
          key={talk.title}
          title={talk.title}
          date={talk.date}
          type={talk.type}
          organiser={talk.organiser}
          youtubeLink={talk?.youtubeLink}
          slidesLink={talk?.slidesLink}
        />
      ))}
    </div>
  );
};

export default Talks;
