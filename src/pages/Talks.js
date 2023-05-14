import { Typography } from '@mui/material';
import TalkCard from '../components/talks/TalkCard';

const Talks = () => {
  const talks = [
    {
      title: 'Take Your First Steps with VueJS',
      date: 'September 10, 2022',
      organiser: 'Frontenddays Siliguri',
      type: 'Offline',
    },
    {
      title: 'Overview of Azure Technology',
      date: 'June 12, 2022',
      organiser: 'Azure DevDay Siliguri',
      type: 'Offline',
    },
    {
      title: 'Intro to ReactJS (Frontend Marathon)',
      date: 'June 6, 2021',
      organiser: 'Codecademy',
      type: 'Offline',
    },
    {
      title: 'Frontend: The Hard Parts',
      date: 'March 3, 2023',
      organiser: 'GDSC SIT',
      type: 'Offline',
    },
    {
      title: 'How to become a Job Ready Frontend Developer',
      date: 'February 18, 2023',
      organiser: 'JWOC',
      type: 'Offline',
    },
    {
      title: 'Demystifying The Frontend Development ',
      date: 'August 13, 2022',
      organiser: 'GDG Siliguri',
      type: 'Offline',
    },
    {
      title: 'Get Started with Git and GitHub',
      date: 'February 3, 2022',
      organiser: 'Microsoft Learn Student Ambassadors',
      type: 'Online',
    },
    {
      title: 'Getting Started with Git and GitHub',
      date: 'November 18, 2019',
      organiser: 'Hack Club SIT',
      type: 'Offline',
    },
    {
      title: 'All About Frontend',
      date: 'May 11, 2022',
      organiser: 'Hack Club SIT',
      type: 'Offline',
    },
    {
      title: 'How you should React: For Beginners',
      date: 'January 12, 2022',
      organiser: 'GDG Bhopal X NEXTJS Developer Community India',
      type: 'Online',
    },
    {
      title: 'Hack the Best: Hacktoberfest',
      date: 'October 2, 2020',
      organiser: 'DSC SIT X Hack Club SIT',
      type: 'Online',
    },
    {
      title: 'Boost Your Career in Frontend Development ',
      date: 'March 24, 2023',
      organiser: 'Techne Association',
      type: 'Offline',
    },
    {
      title: 'An Introduction to Engineering',
      date: 'October 11, 2020',
      organiser: 'Hack Club SIT',
      type: 'Online',
    },
    {
      title: 'Learn Git and GitHub with Abhinav and Debajit',
      date: 'March 18, 2020',
      organiser: 'GDG Siliguri',
      type: 'Online',
    },
    {
      title: 'Open Source and GSSoC 2020',
      date: 'December 15, 2019',
      organiser: 'GirlScript Siliguri',
      type: 'Offline',
    },
    {
      title: 'Build Your First CRUD App using React and Firebase',
      date: 'April 9, 2023',
      organiser: 'GDSC WOW Kolkata',
      type: 'Offline',
    },
  ];

  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        Talks
      </Typography>
      {talks.map((talk) => (
        <TalkCard
          title={talk.title}
          date={talk.date}
          type={talk.type}
          organiser={talk.organiser}
        />
      ))}
    </div>
  );
};

export default Talks;
