import { Skeleton, Typography } from '@mui/material';
import TalkCard from '../components/talks/TalkCard';
import { useEffect, useState } from 'react';
import { TalkInterface } from '../interfaces/talkInterface';
import { child, get, ref } from 'firebase/database';
import { database } from '../firebase.config';
import { Helmet } from 'react-helmet';

const Talks = () => {
  const [talks, setTalks] = useState<TalkInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    get(child(ref(database), '/talks'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data: any[] = snapshot.val();
          setTalks([...data]);
          setIsLoading(false);
        } else {
          console.log('Data is not available!');
          setTalks([]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Talks | Debajit Mallick</title>
        <meta
          name='description'
          content='20+ talks on several topics from frontend tools like React, Vue to Version Control Systems like Git and GitHub.'
        />
        <meta
          name='keywords'
          content='Talks, YouTube Videos, Slides URL, Frontend Developer, ReactJS, VueJS, TypeScript, JavaScript, HTML5, CSS3, NuxtJS, NextJS'
        />
      </Helmet>
      <Typography variant='h3' className='mb-4 mt-3'>
        Talks
      </Typography>
      {isLoading ? (
        <>
          <Skeleton animation='wave' width='100%' height={300} />
          <Skeleton animation='wave' width='100%' height={300} />
        </>
      ) : isError ? (
        <Typography>Something went wrong! Talks data not available.</Typography>
      ) : talks.length === 0 ? (
        <Typography>No talks available!</Typography>
      ) : (
        talks.map((talk) => (
          <TalkCard
            key={talk.title}
            title={talk.title}
            date={talk.date}
            type={talk.type}
            organiser={talk.organiser}
            youtubeLink={talk?.youtubeLink}
            slidesLink={talk?.slidesLink}
            topics={talk.topics}
          />
        ))
      )}
    </div>
  );
};

export default Talks;
