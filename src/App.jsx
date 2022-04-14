// IMPORT REACT
import { useState, useRef } from 'react';

// IMPORT REACT INTERSECTION
import { useInView } from 'react-intersection-observer';

// IMPORT IMAGES/GIF
import backgroundGif from './assets/367f918571959eb12d9143db08c39833.gif'

// MUI CORE IMPORTS
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card'
// import CardMedia from '@mui/material/CardMedia'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button';

// MUI ICONS IMPORTS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// MUI KEYFRAMES IMPORT
import { keyframes } from '@mui/system'

// ELEMENT IMPORT
import Projects from './elements/Projects';

function App() {
  // let [tabVal, setTabVal] = useState(0)

  const [navRef, navInView] = useInView({
    threshold: 0,
    rootMargin: '-10%'
  })

  const topRef = useRef(null)
  const scrollToTop = () => topRef.current.scrollIntoView({ behavior: 'smooth' })

  const projectsRef = useRef(null)
  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth' })

  const aboutRef = useRef(null)
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' })

  const contactRef = useRef(null)
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth' })

  // const handleChange = (event, newVal) => {
  //   setTabVal(newVal)
  // }

  const hovering = keyframes`
    from {
      transform: translateY(0)
    }
    to{
      transform: translateY(8px);
    }
  `;

  const pulsing = keyframes`
    from {
      transform: scale(1)
    }
    to {
      transform: scale(1.4)
    }
  `;

  return (
    <>
      <Container ref={topRef} maxWidth='xxl' sx={{ height: '100vh', background: `url(${backgroundGif})`, backgroundSize: 'cover' }}>
        {/* <Tabs
          centered
          value={tabVal}
          onChange={handleChange}
          aria-label='upper navigation tabs'
          textColor='dark'
          TabIndicatorProps={{ sx: { bgcolor: 'black' } }}
        >
          <Tab disableRipple label='Home' id='upper-tab-0' aria-controls='upper-tabpanel-0' />
          <Tab disableRipple label='Projects' id='upper-tab-1' aria-controls='upper-tabpanel-1' />
          <Tab disableRipple label='About' id='upper-tab-2' aria-controls='upper-tabpanel-2' />
          <Tab disableRipple label='Contact' id='upper-tab-3' aria-controls='upper-tabpanel-3' />
        </Tabs> */}
        <Box sx={{ height: '100%', weight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ backgroundImage: 'radial-gradient(#352E52, #4B4F8C)', color: '#FF8D8D', p: [2, 3], borderRadius: '30px', border: '10px rgba(65, 60, 109)', textAlign: 'center' }}>
            <Typography variant='h1' fontWeight={400} sx={{ fontSize: [40, 50, 60, 70, 80, 90], mb: [1, 2] }}>
              Jack Roehrig
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
              <a href='https://linkedin.com/in/jack-roehrig' target='#blank'><LinkedInIcon sx={{
                '&:hover': {
                  cursor: 'pointer',
                  animation: `${pulsing} 0.5s alternate infinite`
                },
                color: '#DCFEFF',
                fontSize: [30, 40, null, null, null, null]
              }} /></a>
              {/* <a href='https://linkedin.com/in/jack-roehrig' target='#blank'><EmailIcon sx={{
              '&:hover': {
                cursor: 'pointer',
                animation: `${pulsing} 0.5s alternate infinite`
              },
              color: 'black'
            }} /></a> */}
              <a href='https://github.com/jackroehrig' target='#blank'><GitHubIcon sx={{
                '&:hover': {
                  cursor: 'pointer',
                  animation: `${pulsing} 0.5s alternate infinite`
                },
                color: '#DCFEFF',
                fontSize: [30, 40, null, null, null, null]
              }} /></a>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, mt: [1, 2] }}>
              <Box onClick={scrollToProjects} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                  '& .MuiSvgIcon-fontSizeMedium': {
                    animation: `${hovering} 0.5s alternate infinite`
                  },
                  cursor: 'pointer'
                }
              }}>
                <Typography sx={{ fontSize: [15, null, 20, 20, 20, 30] }} variant='button'>Projects</Typography>
                <ArrowDownwardIcon sx={{ color: '#DCFEFF' }} />
              </Box>
              <Box onClick={scrollToAbout} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                  '& .MuiSvgIcon-fontSizeMedium': {
                    animation: `${hovering} 0.5s alternate infinite`
                  },
                  cursor: 'pointer'
                }
              }}>
                <Typography sx={{ fontSize: [15, null, 20, 20, 20, 30] }} variant='button'>About</Typography>
                <ArrowDownwardIcon sx={{ color: '#DCFEFF' }} />
              </Box>
              <Box onClick={scrollToContact} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                  '& .MuiSvgIcon-fontSizeMedium': {
                    animation: `${hovering} 0.5s alternate infinite`
                  },
                  cursor: 'pointer'
                }
              }}>
                <Typography sx={{ fontSize: [15, null, 20, 20, 20, 30] }} variant='button'>Contact</Typography>
                <ArrowDownwardIcon sx={{ color: '#DCFEFF' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <span ref={navRef}>
        <Projects scrollToTop={scrollToTop} projectsRef={projectsRef} navInView={navInView} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
        <Container maxWidth='xxl' ref={aboutRef} sx={{ height: '100vh', background: 'linear-gradient(to bottom left, #55619D, #352E52)', textAlign: 'center', py: 5}}>
        <Typography variant='h1' component='h2' sx={{ color: '#FF8D8D', textShadow: '0 2px 10px black', fontWeight: 600, fontSize: [40, 50, 60, 70, 80, 90]}}>About Me</Typography>
        </Container>
        <Container maxWidth='xxl' ref={contactRef} sx={{ height: '100vh', bgcolor: 'lightgray', background: 'linear-gradient(to top left, #55619D, #352E52)' }}>
          <Typography variant='h2' fontWeight={400} >Contact</Typography>
        </Container>
      </span>
    </>
  );
}

export default App;
