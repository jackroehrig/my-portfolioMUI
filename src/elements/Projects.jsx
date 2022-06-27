// REACT INTERSECTION OBSERVER
import { useInView } from 'react-intersection-observer'

// // IMPORT MUI KEYFRAMES
// import { keyframes } from '@mui/material'

// IMPORT IMAGES
import euchreGIF from '../assets/euchre.gif'
import restRantGif from '../assets/restRant.gif'
// import toDoGif from '../assets/toDo.gif';
import clothingStoreGIF from '../assets/clothingStore.gif'

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
// import ButtonGroup from '@mui/material/ButtonGroup';

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
                <li>Strong control over the basics in HTML, CSS, and JS.</li>
                <li>Advanced actions in HTML, CSS, and JS including DOM manipulation, pseudo-classes, and semantic tags.</li>
                <li>Disadvantages of vanilla JS, specifically when it comes to DOM manipulation. (Makes React seem a lot more valuable)</li>
            </ul>
        ),
        liveLink: 'https://jackroehrig.github.io',
        repoLink: 'https://github.com/jackroehrig/jackroehrig.github.io.git'
    }, {
        url: clothingStoreGIF,
        // text: 'Here is the classic React To Do. This was the first React project I did on my own with classes???use better words??? It taught me state and props with react and dataflow. It also later showed me why hooks, context, and redux can be useful when building a react app.',
        techList: (
            <ul style={{ color: 'white', margin: '0 auto', height: '70px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <li>POSTGRESQL</li>
                <li>EXPRESS</li>
                <li>REACT W/ TYPESCRIPT</li>
                <li>NODE.JS</li>
            </ul>
        ),
        title: 'Clothing Store App',
        learnedList: (
            <ul style={{ color: 'white', margin: '0 auto', fontSize: '18px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <li>Typescript and it's advantages with development. Also its use along with React.</li>
                <li>SQL and how to create a relational database. Specifically PostgreSQL alongside Express as well as deploying it using Heroku's built in PostgreSQL support.</li>
                <li>Bcrypt and JSON web token to implement authentication and authorization which was fun and extremely useful.</li>
            </ul>
        ),
        liveLink: 'https://radiant-ridge-27206.herokuapp.com/',
        repoLink: 'https://github.com/jackroehrig/clothing-store.git'
    }, {
        url: restRantGif,
        // text: 'Here is my restaurant rating website, Rest-Rant. During this project I learned to make a MERN stack website with CRUD operations on restaurants and comments for the restaurants. I maybe also learned authentication and authorization. SQL??. AND DEPLOYING WEBSITES. AND SASS',
        techList: (
            <ul style={{ color: 'white', margin: '0 auto', height: '70px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <li>MONGODB</li>
                <li>EXPRESS</li>
                <li>REACT</li>
                <li>NODE.JS</li>
                <li>SASS</li>
            </ul>
        ),
        title: 'Restaurant Rating App',
        learnedList: (
            <ul style={{ color: 'white', margin: '0 auto', fontSize: '18px', fontWeight: 400, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <li>How to make a server using Express.</li>
                <li>Connecting and manipulating and a non-relational database using MongoDB and Mongoose.</li>
                <li>Using Node.JS to utilize JS on the backend.</li>
                <li>Showing different react views depending on the express route.</li>
                <li>The benefit of using hooks and functional components in React as opposed to class components.</li>
            </ul>
        ),
        liveLink: 'https://limitless-castle-20301.herokuapp.com/',
        repoLink: 'https://github.com/jackroehrig/project-REST-rant.git'
    }]

    const actions = [
        { name: 'Top', icon: <ArrowUpwardIcon />, action: props.scrollToTop },
        { name: 'Projects', icon: <WorkIcon />, action: props.scrollToProjects },
        { name: 'About', icon: <AccountBoxRoundedIcon />, action: props.scrollToAbout },
        { name: 'Contact', icon: <ConnectWithoutContactIcon />, action: props.scrollToContact }
    ]

    return (
        <Container maxWidth='xxl' name='projects' className='element' ref={props.projectsRef} sx={{ minHeight: '100vh', bgcolor: '#3F314B', py: 5, textAlign: 'center', position: 'relative', overflowX: 'hidden' }}>
            {matches
                ? <Slide in={props.navInView} direction='left'>
                    <SpeedDial
                        ariaLabel='navigation speedial'
                        direction='down'
                        icon={<NavigationOutlinedIcon />}
                        sx={{ position: 'fixed', top: '1px', right: '1px', mt: 2, mr: 2 }}
                        FabProps={{ sx: { bgcolor: 'white', color: '#0059F7', '&:hover': { bgcolor: 'white' } }, disableRipple: true }}
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
                                    FabProps={{ sx: { bgcolor: 'white', color: '#0059F7', '&:hover': { bgcolor: 'white' } } }}
                                    sx={{ '& .MuiSpeedDialAction-staticTooltipLabel': { bgcolor: 'white', color: '#0059F7' } }}
                                />
                            )
                        })}
                    </SpeedDial>
                </Slide>
                : <Slide in={props.navInView} direction='right'>
                    <Box orientation='vertical' variant='text' sx={{ position: 'fixed', top: 0, left: 0, mt: 2, ml: 2, bgcolor: 'transparent', width: 200, zIndex: 10 }}>
                        <Typography onClick={props.scrollToTop} sx={{ '&:hover': {cursor: 'pointer', ml: 2}, color: '#0059F7', WebkitTextStroke: '0.5px white', fontWeight: 'bold', textAlign: 'start', fontSize: 28 }}>- Top</Typography>
                        <Typography onClick={props.scrollToProjects} sx={{ '&:hover': {cursor: 'pointer', ml: 2}, color: '#0059F7', WebkitTextStroke: '0.5px white', fontWeight: 'bold', textAlign: 'start', fontSize: 28 }}>- Projects</Typography>
                        <Typography onClick={props.scrollToAbout} sx={{ '&:hover': {cursor: 'pointer', ml: 2}, color: '#0059F7', WebkitTextStroke: '0.5px white', fontWeight: 'bold', textAlign: 'start', fontSize: 28 }}>- About Me</Typography>
                        <Typography onClick={props.scrollToContact} sx={{ '&:hover': {cursor: 'pointer', ml: 2}, color: '#0059F7', WebkitTextStroke: '0.5px white', fontWeight: 'bold', textAlign: 'start', fontSize: 28 }}>- Contact</Typography>
                    </Box>
                </Slide>}
            <Box>
                <Typography variant='h1' component='h2' sx={{ color: 'white', fontWeight: 600, fontSize: [40, 50, 70, 70, 80, 90], WebkitTextStroke: '2px #0059F7' }}>Projects</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, textAlign: 'left', mt: 5, pt: 5 }}>
                    {images.map((image, i) => {
                        return (
                            <Zoom in={projectIntersections[i].inView} key={i}>

                                <Card ref={projectIntersections[i].ref} sx={{ boxShadow: '2px 3px 15px 8px', maxWidth: 600, bgcolor: '#2F2E41', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <CardMedia
                                        component='img'
                                        height='350'
                                        image={image.url}
                                        alt={`image of ${image.title}`}
                                        sx={{borderBottom: '4px solid #0059F7'}}
                                    />
                                    <CardContent sx={{ flex: 2 }}>
                                        <Typography gutterBottom={image.title === 'Clothing Store App' || image.title === 'Restaurant Rating App' ? false : true} variant='h5' sx={{ color: '#0059F7', fontWeight: 600, fontSize: [25, 30, 30, null, 35, 40], textShadow: '0 2px 10px black' }}>{image.title}</Typography>
                                        {image.title === 'Clothing Store App' || image.title === 'Restaurant Rating App' ? <Typography gutterBottom variant='subtitle2' sx={{color: 'red'}}>*Project deployed using Heroku. Might take a second to spin up.*</Typography> : null}
                                        <Box sx={{ ml: 0 }}>
                                            <Typography variant='subtitle1' sx={{ color: '#0059F7', fontSize: [15, 20, 20, 22], fontWeight: 600, display: 'inline', p: '5px', borderRadius: '10px' }}>Tech Used</Typography>
                                            {/* USE CHIPS WITH TECH LOGOS */}
                                            {image.techList}
                                            <Typography variant='subtitle1' sx={{ color: '#0059F7', fontSize: [15, 20, 20, 22], fontWeight: 600, display: 'inline', p: '5px', borderRadius: '10px', mt: 2 }}>I Learned...</Typography>
                                            {image.learnedList}
                                        </Box>
                                    </CardContent>
                                    <CardActions sx={{ py: 0, justifyContent: 'space-evenly', gap: 1, borderTop: '2px solid #0059F7' }}>
                                        <Button target='#blank' href={image.liveLink} size='medium' sx={{ flex: 1, bgcolor: '#2F2E41', py: 2.5, color: '#0059F7', width: [160, 160, 160, 160, 160, 160], fontWeight: 600, '&:hover': { bgcolor: '#2F2E41' }, fontSize: [20, 20, 20, 20, 20, 20], textShadow: '0 2px 10px black' }}>Live</Button>
                                        <Divider orientation='vertical' sx={{ flex: 0, '&.MuiDivider-vertical': { border: '1px solid #0059F7' } }} />
                                        <Button target='#blank' href={image.repoLink} size='medium' sx={{ flex: 1, bgcolor: '#2F2E41', py: 2.5, color: '#0059F7', width: [160, 160, 160, 160, 160, 160], fontWeight: 600, '&:hover': { bgcolor: '#2F2E41' }, fontSize: [20, 20, 20, 20, 20, 20], textShadow: '0 2px 10px black' }}>Repository</Button>
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