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
// import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider';

// MUI ICONS IMPORTS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// MUI KEYFRAMES IMPORT
import { keyframes } from '@mui/system'

// ELEMENT IMPORT
import Projects from './elements/Projects';
import AboutSVG from './elements/AboutSVG';



function App() {
  // let [tabVal, setTabVal] = useState(0)

  const [navRef, navInView] = useInView({
    threshold: 0,
    rootMargin: '-50%'
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
          <Box sx={{ bgcolor: '#2F2E41', color: '#FF8D8D', p: [2, 3], borderRadius: '30px', border: '10px rgba(65, 60, 109)', textAlign: 'center', boxShadow: 'inset 0 0 10px 8px black' }}>
            <Typography variant='h1' fontWeight={600} sx={{ fontSize: [40, 50, 60, 70, 80, 90], mb: [1, 2] }}>
              Jack Roehrig
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
              <a href='https://linkedin.com/in/jack-roehrig' target='#blank'><LinkedInIcon sx={{
                '&:hover': {
                  cursor: 'pointer',
                  animation: `${pulsing} 0.5s alternate infinite`
                },
                color: '#FF8D8D',
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
                color: '#FF8D8D',
                fontSize: [30, 40, null, null, null, null]
              }} /></a>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, mt: [1, 2] }}>
              <Box onClick={scrollToProjects} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', '&:hover': {
                  '& .MuiSvgIcon-fontSizeMedium': {
                    animation: `${hovering} 0.5s alternate infinite`
                  },
                  cursor: 'pointer'
                }
              }}>
                <Typography sx={{ fontSize: [15, null, 20, 20, 20, 30] }} variant='button'>Projects</Typography>
                <ArrowDownwardIcon sx={{ color: '#FF8D8D' }} />
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
                <ArrowDownwardIcon sx={{ color: '#FF8D8D' }} />
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
                <ArrowDownwardIcon sx={{ color: '#FF8D8D' }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <span ref={navRef}>
        <Projects scrollToTop={scrollToTop} projectsRef={projectsRef} navInView={navInView} scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
        <Container maxWidth='xxl' ref={aboutRef} sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom left, #55619D, #352E52)', textAlign: 'center', py: 5 }}>
          <Typography variant='h1' gutterBottom component='h2' sx={{ color: '#FF8D8D', textShadow: '0 2px 10px black', fontWeight: 600, fontSize: [40, 50, 70, 70, 80, 90] }}>About Me</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexDirection: ['column-reverse', null, null, null, 'row', null], alignItems: 'center' }}>
            <Box sx={{ textAlign: 'left' }}>
              <Box sx={{ width: '70%', margin: 'auto', minWidth: '250px' }}>
                <Divider sx={{ mt: 1, '&.MuiDivider-withChildren': { '&::before': { borderTop: '5px solid #2F2E41' }, '&::after': { borderTop: '5px solid #2F2E41' } } }}>
                  <Typography variant='h6' sx={{ color: '#FF8D8D', fontSize: [20, 30, 40, 40, 35, 35] }}>Name</Typography>
                </Divider>
                <Typography variant='body1' sx={{ color: 'white', ml: 3, fontWeight: 'bold', fontSize: [15, 25, 35, 35, 25, 25] }}>Jack Roehrig</Typography>
                <Divider sx={{ mt: 1, '&.MuiDivider-withChildren': { '&::before': { borderTop: '5px solid #2F2E41' }, '&::after': { borderTop: '5px solid #2F2E41' } } }}>
                  <Typography variant='h6' sx={{ color: '#FF8D8D', fontSize: [20, 30, 40, 40, 35, 35] }}>Age</Typography>
                </Divider>
                <Typography variant='body1' sx={{ color: 'white', ml: 3, fontWeight: 'bold', fontSize: [15, 25, 35, 35, 25, 25] }}>20</Typography>
                <Divider sx={{ mt: 1, '&.MuiDivider-withChildren': { '&::before': { borderTop: '5px solid #2F2E41' }, '&::after': { borderTop: '5px solid #2F2E41' } } }}>
                  <Typography variant='h6' sx={{ color: '#FF8D8D', fontSize: [20, 30, 40, 40, 35, 35] }}>Skills</Typography>
                </Divider>
                {/* USE CHIPS SAME AS PROJECTS SECTION */}
                <Typography variant='body1' sx={{ color: 'white', ml: 3, fontWeight: 'bold', fontSize: [15, 25, 35, 35, 25, 25] }}>HTML, CSS, JS, REACT, MONGODB, PGSQL, EXPRESS, NODEJS, SASS</Typography>
                <Divider sx={{ mt: 1, '&.MuiDivider-withChildren': { '&::before': { borderTop: '5px solid #2F2E41' }, '&::after': { borderTop: '5px solid #2F2E41' } } }}>
                  <Typography variant='h6' sx={{ color: '#FF8D8D', fontSize: [20, 30, 40, 40, 35, 35] }}>Resume/Contact</Typography>
                </Divider>
                <Typography variant='body1' sx={{ color: 'white', ml: 3, fontWeight: 'bold', fontSize: [15, 25, 35, 35, 25, 25] }}>RESUME | EMAIL</Typography>
                <Divider sx={{ mt: 1, '&.MuiDivider-withChildren': { '&::before': { borderTop: '5px solid #2F2E41' }, '&::after': { borderTop: '5px solid #2F2E41' } } }}>
                  <Typography variant='h6' sx={{ color: '#FF8D8D', fontSize: [20, 30, 40, 40, 35, 35] }}>Hobbies</Typography>
                </Divider>
                <Typography variant='body1' sx={{ color: 'white', ml: 3, fontWeight: 'bold', fontSize: [15, 25, 35, 35, 25, 25] }}>Video games, watching sports, playing golf, fantasy football, and coding of course :)</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '70%', minWidth: '250px', maxWidth: '1000px', py: 4 }}>
              <AboutSVG />
            </Box>
          </Box>
        </Container>
        <Container maxWidth='xxl' ref={contactRef} sx={{ minHeight: '100vh', bgcolor: '#2F2E41', textAlign: 'center', py: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h1' component='h2' sx={{ color: '#FF8D8D', textShadow: '0 2px 10px black', fontWeight: 600, fontSize: [40, 50, 70, 70, 80, 90], flex: 0 }}>Contact</Typography>
          <Typography variant='subtitle2' sx={{color: '#FF8D8D', fontWeght: 400}}>My email is <span style={{color: 'white'}}>jack.roe13@gmail.com</span> if you prefer to manually email yourself</Typography>
          <Box sx={{ width: '80%', margin: 'auto', borderRadius: '20px', py: 3, flex: 1, minWidth: '280px' }}>
            {/* <Typography variant='h4' sx={{ color: '#FF8D8D', fontWeight: 'bold' }}>Email Form</Typography> */}
            <form autoComplete='off' style={{ width: '75%', margin: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'center' }}>
              <section style={{ flex: 0, width: '100%' }}>
                <label htmlFor='user-email' style={{ marginLeft: '10px', color: '#FF8D8D', fontSize: '1.2rem', fontWeight: 'bold' }}>Your Email</label><br />
                <input id='user-email' name='user-email' style={{ backgroundColor: '#2F2E41', width: 'calc(100% - 20px)', color: 'white', border: '2px solid #FF8D8D', borderRadius: '4px', height: '20px', padding: '10px', fontSize: '1rem' }} />
              </section>
              <section style={{ flex: 0, width: '100%' }}>
                <label htmlFor='user-subject' style={{ marginLeft: '10px', color: '#FF8D8D', fontSize: '1.2rem', fontWeight: 'bold' }}>Your Subject</label><br />
                <input id='user-subject' name='user-subject' style={{ backgroundColor: '#2F2E41', width: 'calc(100% - 20px)', color: 'white', border: '2px solid #FF8D8D', borderRadius: '4px', height: '20px', padding: '10px', fontSize: '1rem' }} />
              </section>
              <section style={{ flex: 1, width: '100%' }}>
                <label htmlFor='user-content' style={{ marginLeft: '10px', color: '#FF8D8D', fontSize: '1.2rem', fontWeight: 'bold' }}>Message</label><br />
                <textarea id='user-content' name='user-content' rows='10' style={{ backgroundColor: '#2F2E41', width: 'calc(100% - 20px)', color: 'white', border: '2px solid #FF8D8D', borderRadius: '4px', padding: '10px', fontSize: '1rem' }} />
              </section>
              <section style={{ flex: 0, display: 'flex', justifyContent: 'center' }}>
                <button type='submit' style={{ width: '200px', height: '45px', borderRadius: '4px', backgroundColor: '#2F2E41', color: '#FF8D8D', border: '2px solid #FF8D8D', fontSize: '1rem', fontWeight: 'bold' }}>Submit</button>
              </section>
            </form>
          </Box>
        </Container>
      </span>
    </>
  );
}

export default App;
