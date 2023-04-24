import { Typography } from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import shortLinkLogo from '../assets/images/projects/short_link_logo.png';
import gameStarLogo from '../assets/images/projects/game_star_logo.png';
import jokeReactLogo from '../assets/images/projects/joke_react.png';
import jseekrLogo from '../assets/images/projects/jseekr.svg';

const Projects = () => {
  const projectsData = [
    {
      title: 'Short Link',
      description: 'A ReactJS based URL shortener',
      image: shortLinkLogo,
      webURL: 'https://short-link-app.netlify.app/',
      githubURL: 'https://github.com/debajit13/short-link',
    },
    {
      title: 'Game Star',
      description: 'A project to display the list of your favourite games',
      image: gameStarLogo,
      webURL: 'https://gamestar.netlify.app/',
      githubURL: 'https://github.com/debajit13/Game-Star',
    },
    {
      title: 'Joke React',
      description: 'A simple Joke App that makes you laugh.',
      image: jokeReactLogo,
      webURL: 'https://joke-react.netlify.app/',
      githubURL: 'https://github.com/debajit13/joke-react',
    },
    {
      title: 'JSeekr',
      description: 'Find jobs of top multinational companies',
      image: jseekrLogo,
      webURL: 'https://jseekr.netlify.app/',
      githubURL: 'https://github.com/debajit13/JSeeker',
    },
  ];

  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        My Projects
      </Typography>
      {projectsData.length > 0 &&
        projectsData.map((projectData) => (
          <ProjectCard
            title={projectData.title}
            description={projectData.description}
            image={projectData.image}
            webURL={projectData.webURL}
            githubURL={projectData.githubURL}
          />
        ))}
    </div>
  );
};

export default Projects;
