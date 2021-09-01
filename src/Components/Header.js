import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../Images/logo.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';
import Switch from '@material-ui/core/Switch';
// import Grid from '@material-ui/core/Grid';

function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} style={{color:'rgb(61, 198, 193)'}} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" style={{color:'rgb(61, 198, 193)'}}>{`${Math.round(
            props.value,
          )}`}</Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress <= 0 ? 60 : prevProgress - 1));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);   

  return (
      <>
      <div container style={{margin:'20px', marginTop:'0px'}} >
        <div style={{display:'flex', justifyContent:"space-evenly", flexWrap:'wrap', paddingTop:'20px', margin:'10px'}} >
            <div>
                <a href="/#" ><img src={logo} alt="logo" style={{width:"250px", height:'auto'}} /></a>
                <p style={{color:'gray', fontFamily:'sans-serif, Oswald', margin:'0'}} >
                    Powered By 
                    <a style={{color:'rgb(61, 198, 193)', textDecoration:'none'}} href="https://www.finstreet.in" > Finstreet</a>
                </p>
            </div>
            <div style={{display:'flex', padding:'5px'}} >
            <div className="dropdown" style={{marginRight:'10px'}}>
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none', width:'75px'}} >
                     <b>INR</b>
                 </button>
                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                     <li><button className="dropdown-item" type="button">INR</button></li>
                 </ul>
                 </div>
                 <div className="dropdown" style={{marginRight:'10px'}} >
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none', width:'75px'}} >
                     <b>BTC</b>
                 </button>
                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                     <li><button className="dropdown-item" type="button">BTC</button></li>
                     <li><button className="dropdown-item" type="button">ETH</button></li>
                     <li><button className="dropdown-item" type="button">USDT</button></li>
                     <li><button className="dropdown-item" type="button">XRP</button></li>
                     <li><button className="dropdown-item" type="button">TRX</button></li>
                     <li><button className="dropdown-item" type="button">DASH</button></li>
                     <li><button className="dropdown-item" type="button">ZEC</button></li>
                     <li><button className="dropdown-item" type="button">XEM</button></li>
                     <li><button className="dropdown-item" type="button">IOST</button></li>
                 </ul>
                 </div>
                 <div>
                <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" >
                 <button type="button" className="btn btn-primary" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none', width:'75px'}} >
                     <b>BUY BTC</b>
                 </button>
                 </a>
                 </div>
            </div>

            <div>
            <div style={{display:'inline-flex', verticalAlign:'center', position:'relative'}} >
                 <CircularProgressWithLabel value={progress} />
                 <Button
                     variant="contained"
                     style={{backgroundColor:'rgb(61, 198, 193)', color:'white', textTransform:'none', marginLeft:'10px', borderRadius:'10px'}}
                     className={classes.button}
                     startIcon={<TelegramIcon />}
                     disableElevation
                 >
                     Connect Telegram
                 </Button>
                 <Switch
                     color="default"
                     style={{color:'rgb(61, 198, 193)'}}
                     inputProps={{ 'aria-label': 'checkbox with default color' }}
                     onClick={() => props.themeToggler()}
                 />
             </div>
            </div>
        </div>
      </div>
      
     {/* <div className={classes.root} style={{display:'flex', justifyContent:"space-evenly"}} >
       <AppBar position="static" elevation={0} style={{backgroundColor:"white", padding:'20'}} >
         <Toolbar>
             <Grid container>
                 <Grid item xs={4}>
                 <div>
                     <a href="/#" >
                     <img src={logo} alt="logo" style={{width:"180px", height:'auto'}} />
                     </a>

                     <p style={{color:'gray', fontFamily:'sans-serif, Oswald', margin:'0'}} >
                     Powered By 
                     <a style={{color:'rgb(61, 198, 193)', textDecoration:'none'}} href="https:www.finstreet.in" > Finstreet</a>
                     </p>
                 </div>
                 </Grid>

             <Grid item xs={4}>
             <div style={{display:'flex', justifyContent:'center'}} >
                 <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none'}} >
                     INR
                 </button>
                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                     <li><button className="dropdown-item" type="button">Action</button></li>
                     <li><button className="dropdown-item" type="button">Another action</button></li>
                     <li><button className="dropdown-item" type="button">Something else here</button></li>
                 </ul>
                 </div>
                 <div className="dropdown">
                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none'}} >
                     BTC
                 </button>
                 <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                     <li><button className="dropdown-item" type="button">Action</button></li>
                     <li><button className="dropdown-item" type="button">Another action</button></li>
                     <li><button className="dropdown-item" type="button">Something else here</button></li>
                 </ul>
                 </div>
                 <a href="https:wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" >
                 <button type="button" className="btn btn-primary" style={{backgroundColor:'#f8f9fa', color:'#0c0f48', borderRadius:'10px', border:'none'}} >
                     BUY BTC
                 </button>
                 </a>
             </div>
             </Grid>

             <Grid item xs={4}>
             <div style={{display:'flex', justifyContent:'center'}} >
                 <CircularProgressWithLabel value={progress} />
                 <Button
                     variant="contained"
                     style={{backgroundColor:'rgb(61, 198, 193)', color:'white', textTransform:'none'}}
                     className={classes.button}
                     startIcon={<TelegramIcon />}
                 >
                     Connect Telegram
                 </Button>
                 <Switch
                     color="default"
                     style={{color:'rgb(61, 198, 193)'}}
                     inputProps={{ 'aria-label': 'checkbox with default color' }}
                 />
             </div>
             </Grid>
             </Grid>
         </Toolbar>
       </AppBar>
     </div> */}
     </>
  );
}
