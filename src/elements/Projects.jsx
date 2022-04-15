// REACT INTERSECTION OBSERVER
import { useInView } from 'react-intersection-observer'

// // IMPORT MUI KEYFRAMES
// import { keyframes } from '@mui/material'

// IMPORT IMAGES
import euchreGIF from '../assets/euchre.gif'
import restrantIMG from '../assets/in-progress-restrant.PNG';
import toDoIMG from '../assets/in-progress-toDo.png';

// IMPORT MUI COMPONENTS 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide'
import Zoom from '@mui/material/Zoom';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';

import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

// MUI USE MEDIA QUERY IMPORT
import useMediaQuery from '@mui/material/useMediaQuery'

const Projects = (props) => {

    const [projRef1, ref1InView] = useInView({
        threshold: 0,
        // rootMargin: '-10px'
    })

    const [projRef2, ref2InView] = useInView({
        threshold: 0,
        // rootMargin: '-10px'
    })

    const [projRef3, ref3InView] = useInView({
        threshold: 0,
        // rootMargin: '-10px'
    })

    const matches = useMediaQuery('(max-width: 1375px)')

    const projectIntersections = [{
        ref: projRef1,
        inView: ref1InView
    }, {
        ref: projRef2,
        inView: ref2InView
    }, {
        ref: projRef3,
        inView: ref3InView
    }]

    const images = [{
        url: euchreGIF,
        // text: 'Here is my solitaire project. Something I learned with this project is the advantages and disadvantages of pure HTML, CSS, and JS especially when DOM manipulation was involved.',
        techList: (
            <ul style={{ color: 'white', margin: '0 auto', height: '70px', fontWeight: 'bold' }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        ),
        title: 'Euchre Game',
        learnedList: (
            <ul style={{ color: 'white', margin: '0 auto', fontSize: '18px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <li>Advantages in control with vanilla HTML, CSS, and JS</li>
                <li>A solid grasp on most basic actions in HTML, CSS, and JS.</li>
                <li>A solid grasp on many advanced actions including DOM manipulation, pseudo-classes, and semantic tags.</li>
                <li>Disadvantages of vanilla when it comes to DOM manipulation.(Makes React seem a lot more valuable)</li>
            </ul>
        )
    }, {
        url: toDoIMG,
        // text: 'Here is the classic React To Do. This was the first React project I did on my own with classes???use better words??? It taught me state and props with react and dataflow. It also later showed me why hooks, context, and redux can be useful when building a react app.',
        techList: (
            <ul style={{ color: 'white', margin: '0 auto', height: '70px', fontWeight: 'bold' }}>
                <li>REACT</li>
                <li>CSS</li>
            </ul>
        ),
        title: 'To-Do App',
        learnedList: (
            <ul style={{ color: 'white', margin: '0 auto', fontSize: '18px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <li>Basics of React and the value in it's Virtual DOM</li>
                <li>Using class components and passing data up and down my components using state and props</li>
                <li>The value of conditional rendering compared to vanilla JS</li>
                <li>The value of being able to modularize components for a clean workspace</li>
            </ul>
        )
    }, {
        url: restrantIMG,
        // text: 'Here is my restaurant rating website, Rest-Rant. During this project I learned to make a MERN stack website with CRUD operations on restaurants and comments for the restaurants. I maybe also learned authentication and authorization. SQL??. AND DEPLOYING WEBSITES. AND SASS',
        techList: (
            <ul style={{ color: 'white', margin: '0 auto', height: '70px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <li>MONGODB</li>
                <li>EXPRESS</li>
                <li>REACT</li>
                <li>NODEJS</li>
                <li>SASS</li>
            </ul>
        ),
        title: 'Restaurant Rating App',
        learnedList: (
            <ul style={{ color: 'white', margin: '0 auto', fontSize: '18px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <li>How to make a server using Express</li>
                <li>How to connect and manipulate and a non-relational database using MongoDB and Mongoose</li>
                <li>Using Node.JS to utilize JS on the backend</li>
                <li>How to connect and show react views depending on the route</li>
                <li>The benfit of using hooks in React like useState, useEffect, useContext, etc.</li>
            </ul>
        )
    }]

    const actions = [
        { name: 'Top', icon: <ArrowUpwardIcon />, action: props.scrollToTop },
        { name: 'Projects', icon: <WorkIcon />, action: props.scrollToProjects },
        { name: 'About', icon: <AccountBoxRoundedIcon />, action: props.scrollToAbout },
        { name: 'Contact', icon: <ConnectWithoutContactIcon />, action: props.scrollToContact }
    ]

    return (
        <Container maxWidth='xxl' name='projects' className='element' ref={props.projectsRef} sx={{ minHeight: '100vh', backgroundColor: '#2F2E41', py: 5, textAlign: 'center', position: 'relative', overflowX: 'hidden' }}>
            {matches
            ? <Slide in={props.navInView} direction='left'>
                <SpeedDial
                    ariaLabel='navigation speedial'
                    direction='down'
                    icon={<NavigationOutlinedIcon />}
                    sx={{ position: 'fixed', top: '1px', right: '1px', mt: 2, mr: 2 }}
                    FabProps={{ sx: { bgcolor: '#FF8D8D', color: '#2F2E41', '&:hover': { bgcolor: '#FF8D8D' } }, disableRipple: true }}
                >
                    {actions.map(action => {
                        return (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                tooltipOpen
                                tooltipPlacement='left'
                                onClick={action.action}
                                FabProps={{ sx: { bgcolor: '#FF8D8D', color: '#2F2E41', '&:hover': {bgcolor: 'white'} } }}
                                sx={{ '& .MuiSpeedDialAction-staticTooltipLabel': { bgcolor: '#FF8D8D', color: '#2F2E41' } }}
                            />
                        )
                    })}
                </SpeedDial>
            </Slide>
            : <Slide in={props.navInView} direction='right'>
                <ButtonGroup orientation='vertical' variant='text' sx={{position: 'fixed', top: 0, left: 0, mt: 2, ml: 2, bgcolor: '#FF8D8D', width: 200, border: '2px solid #2F2E41', zIndex: 10}}> 
                    <Button onClick={props.scrollToTop} sx={{color: '#2F2E41', borderColor: '#2F2E41!important'}}>Top</Button>
                    <Button onClick={props.scrollToProjects} sx={{color: '#2F2E41', borderColor: '#2F2E41!important'}}>Projects</Button>
                    <Button onClick={props.scrollToAbout} sx={{color: '#2F2E41', borderColor: '#2F2E41!important'}}>About Me</Button>
                    <Button onClick={props.scrollToContact} sx={{color: '#2F2E41', borderColor: '#2F2E41!important'}}>Contact</Button>
                </ButtonGroup>
            </Slide>}
            <Box>
                <Typography variant='h1' component='h2' sx={{ color: '#FF8D8D', textShadow: '0 2px 10px black', fontWeight: 600, fontSize: [40, 50, 70, 70, 80, 90] }}>Projects</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, textAlign: 'left', mt: 5, pt: 5 }}>
                    {images.map((image, i) => {
                        return (
                            <Zoom in={projectIntersections[i].inView} key={i}>
                                
                                 <Card ref={projectIntersections[i].ref} sx={{ boxShadow: '2px 3px 15px 8px', maxWidth: 650, bgcolor: '#2F2E41', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <CardMedia
                                        component='img'
                                        height='400'
                                        image={image.url}
                                        alt={`image of ${image.title}`}
                                    />
                                    <CardContent sx={{ flex: 2 }}>
                                        <Typography gutterBottom variant='h5' sx={{ color: '#FF8D8D', fontWeight: 600, fontSize: [25, 30, 30, null, 35, 40], mb: 2 }}>{image.title}</Typography>
                                        <Box sx={{ ml: 0 }}>
                                            <Typography variant='subtitle1' sx={{ color: '#FF8D8D', fontSize: [15, 20, 20, 22], fontWeight: 600, display: 'inline', p: '5px', borderRadius: '10px' }}>Tech Used</Typography>
                                            {/* USE CHIPS WITH TECH LOGOS */}
                                            {image.techList}
                                            <Typography variant='subtitle1' sx={{ color: '#FF8D8D', fontSize: [15, 20, 20, 22], fontWeight: 600, display: 'inline', p: '5px', borderRadius: '10px', mt: 2 }}>Things I Learned</Typography>
                                            {image.learnedList}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{py: 0, justifyContent: 'space-evenly', gap: 1, borderTop: '2px solid #FF8D8D' }}>
                                        <Button size='medium' sx={{ flex: 1, bgcolor: '#2F2E41', py: 2.5, color: '#FF8D8D', width: [160, 160, 160, 160, 160, 160], fontWeight: 600, '&:hover': { bgcolor: '#2F2E41' }, fontSize: [20, 20, 20, 20, 20, 20] }}>Live</Button>
                                        <Divider orientation='vertical' sx={{flex: 0, '&.MuiDivider-vertical': {border: '1px solid #FF8D8D'}}} />
                                        <Button size='medium' sx={{ flex: 1, bgcolor: '#2F2E41', py: 2.5, color: '#FF8D8D', width: [160, 160, 160, 160, 160, 160], fontWeight: 600, '&:hover': { bgcolor: '#2F2E41' }, fontSize: [20, 20, 20, 20, 20, 20] }}>Repository</Button>
                                    </CardActions>
                                </Card> 
                            </Zoom>
                        )
                    })}
                </Box>
            </Box>
        </Container >
    )
}

export default Projects