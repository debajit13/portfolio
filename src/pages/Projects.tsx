import { Typography } from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import { projectsData } from '../constants/constant';

const Projects = () => {
  return (
    <div>
      <Typography variant='h3' className='mb-4 mt-3'>
        My Projects
      </Typography>
      {projectsData.length > 0 &&
        projectsData.map((projectData) => (
          <ProjectCard
            key={projectData.title}
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
