import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work } from '@mui/icons-material';
import { Chip } from '@mui/material';
import { Box } from '@mui/system';

const ExperienceTimeline = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: '#272727', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #272727' }}
      date='May 2022 - Present'
      iconStyle={{ background: '#272727', color: '#fff' }}
      icon={<Work />}
    >
      <h3 className='vertical-timeline-element-title'>P360</h3>
      <h4 className='vertical-timeline-element-subtitle'>Software Engineer</h4>
      <h5>Skills:</h5>
      <Box sx={{ marginBottom: '10px' }}>
        <Chip label='React.js' sx={{ margin: '3px' }} />
        <Chip label='Vue.js' sx={{ margin: '3px' }} />
        <Chip label='TypeScript' sx={{ margin: '3px' }} />
        <Chip label='MUI' sx={{ margin: '3px' }} />
        <Chip label='Azure Devops' sx={{ margin: '3px' }} />
      </Box>

      <h5>Key Achivements:</h5>
      <ul>
        <li>
          Developed reusable component for capturing user audio data using
          webRTC and Vue.js.
        </li>
        <li>
          Built reusable component and integrate APIs with them in React.js and
          TypeScript.
        </li>
        <li>
          Optimised the frontend code of a communication application to improve
          web performance.
        </li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: '#272727', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #272727' }}
      date='Oct 2021 - Apr 2022'
      iconStyle={{ background: '#272727', color: '#fff' }}
      icon={<Work />}
    >
      <h3 className='vertical-timeline-element-title'>Blackspektro</h3>
      <h4 className='vertical-timeline-element-subtitle'>Software Engineer</h4>
      <h5>Skills:</h5>
      <Box sx={{ marginBottom: '10px' }}>
        <Chip label='Vue.js' sx={{ margin: '3px' }} />
        <Chip label='JavaScript' sx={{ margin: '3px' }} />
        <Chip label='BootstrapVue' sx={{ margin: '3px' }} />
        <Chip label='API Integration' sx={{ margin: '3px' }} />
      </Box>

      <h5>Key Achivements:</h5>
      <ul>
        <li>Refactored the frontend code to make it more modular.</li>
        <li>Integrated REST APIs with reusable frontend components.</li>
        <li>Optimised the frontend to make the performance better.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: '#272727', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #272727' }}
      date='Apr 2021 - Sep 2021'
      iconStyle={{ background: '#272727', color: '#fff' }}
      icon={<Work />}
    >
      <h3 className='vertical-timeline-element-title'>Blackspektro</h3>
      <h4 className='vertical-timeline-element-subtitle'>
        Junior Software Engineer
      </h4>
      <h5>Skills:</h5>
      <Box sx={{ marginBottom: '10px' }}>
        <Chip label='Vue.js' sx={{ margin: '3px' }} />
        <Chip label='JavaScript' sx={{ margin: '3px' }} />
        <Chip label='BootstrapVue' sx={{ margin: '3px' }} />
        <Chip label='API Integration' sx={{ margin: '3px' }} />
      </Box>

      <h5>Key Achivements:</h5>
      <ul>
        <li>Integrate APIs with VueJS frontend of a dashboard application.</li>
        <li>Fixed bugs of the dashboard application.</li>
        <li>Built reusable components to make application modular.</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: '#272727', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #272727' }}
      date='Feb 2021 - Apr 2021'
      iconStyle={{ background: '#272727', color: '#fff' }}
      icon={<Work />}
    >
      <h3 className='vertical-timeline-element-title'>TIKAJ</h3>
      <h4 className='vertical-timeline-element-subtitle'>Full Stack Intern</h4>
      <h5>Skills:</h5>
      <Box sx={{ marginBottom: '10px' }}>
        <Chip label='Vue.js' sx={{ margin: '3px' }} />
        <Chip label='TypeScript' sx={{ margin: '3px' }} />
        <Chip label='Storybook' sx={{ margin: '3px' }} />
        <Chip label='API Integration' sx={{ margin: '3px' }} />
      </Box>

      <h5>Key Achivements:</h5>
      <ul>
        <li>
          Built a reusable multi-input component for taking users' contact
          numbers using Vue.js.
        </li>
        <li>Exposed API endpoints using Node.js and TypeScript.</li>
        <li>Documented and Tested frontend components using Storybook.</li>
      </ul>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default ExperienceTimeline;
