import { Skeleton, Typography } from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import { useEffect, useState } from 'react';
import { get, ref, child } from 'firebase/database';
import { database } from '../firebase.config';
import { ProjectInterface } from '../interfaces/projectInterface';
import { Helmet } from 'react-helmet';

const Projects = () => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    get(child(ref(database), '/projects'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data: any[] = snapshot.val();
          setProjects([...data]);
          setIsLoading(false);
        } else {
          console.log('Data is not available!');
          setProjects([]);
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
        <title>Projects | Debajit Mallick</title>
      </Helmet>
      <Typography variant='h3' className='mb-4 mt-3'>
        My Projects
      </Typography>
      {isLoading ? (
        <>
          <Skeleton animation='wave' width='100%' height={300} />
          <Skeleton animation='wave' width='100%' height={300} />
        </>
      ) : isError ? (
        <Typography>
          Something went wrong! Projects data not available.
        </Typography>
      ) : projects.length === 0 ? (
        <Typography>No projects available!</Typography>
      ) : (
        projects.map((projectData) => (
          <ProjectCard
            key={projectData.title}
            title={projectData.title}
            description={projectData.description}
            image={projectData.image}
            webURL={projectData.webURL}
            githubURL={projectData.githubURL}
          />
        ))
      )}
    </div>
  );
};

export default Projects;
