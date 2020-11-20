import React from 'react'
import './App.css';
import amazon from './assets/amazon.png'
import MenuIcon from '@material-ui/icons/Menu';
import { Switch, Card, makeStyles,IconButton, CardContent,Grid, List, ListItem, ListItemText, Divider, Container, Typography, Toolbar, AppBar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme)=> ({

  toolbar: {
    backgroundColor: '#263238'
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  pricing: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '15px', 
    color: '#4527a0'
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  data: {
    textAlign: 'center',
  },
  mediumData: {
    textAlign: 'center',
    color: '#fff',
  },
  mediumPrice: {
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#5c6bc0',
    padding: '20px',
    borderRadius: '10px',
    color: '#fff',
  },
  medium: {
    backgroundColor: '#3f51b5',
    textAlign: 'center'
  },
  mediumButton: {
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#5c6bc0',
    padding: '20px',
    borderRadius: '10px',
  },
  account: {
    position: 'absolute',
    right: 6,
    color: '#fff',
  },
}));
function App() {
  const styling = useStyles();
  return (
    <Container maxWidth ="lg">
      <div className="nav">
        <AppBar position="static">
          <Toolbar className={styling.toolbar}>
          <IconButton edge="start"  color="inherit" aria-label="menu" >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={styling.title}>
            Amazon
          </Typography>
          <IconButton className={styling.account}>
            <AccountCircle />
          </IconButton>
          </Toolbar>
        </AppBar>
      </div> 
      <img src ={amazon} className="img" alt="No Preview"/>
      <Typography variant="h5" className={styling.pricing} >Our Pricings</Typography>
      <div className="switch">
        <label>Automatic</label>
        <Switch color="primary"/>
        <label>Manually</label>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={styling.data}>Basic</Typography>
              <Typography variant="h3" className={styling.price} >$19.99</Typography>
              <List component="nav" aria-label="mailbox folders">
                <Divider/>
                <ListItem>
                  <ListItemText primary="500 GB Storage" className={styling.data} />
                </ListItem>
                <Divider />
                <ListItem divider>
                  <ListItemText primary="2 Users Allowed" className={styling.data} />
                </ListItem>
                <ListItem >
                  <ListItemText primary="Send up to 3 GB" className={styling.data} />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Learn More" className={styling.button}/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={styling.medium}>
            <CardContent>
              <Typography variant="h6" className={styling.mediumData} >Professional</Typography>
              <Typography variant="h3" className={styling.mediumPrice}>$24.99</Typography>
              <List component="nav" aria-label="mailbox folders">
                <Divider/>
                <ListItem>
                  <ListItemText primary="1TB Storage" className={styling.mediumData}/>
                </ListItem>
                <Divider/>
                <ListItem divider>
                  <ListItemText primary="5 Users Allowed" className={styling.mediumData}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Send up to 10 GB" className={styling.mediumData} />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Learn More" className={styling.mediumButton}/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" className={styling.data} >Master</Typography>
              <Typography variant="h3" className={styling.price} >$39.99</Typography>
              <List component="nav" aria-label="mailbox folders">
                <Divider/>
                <ListItem>
                  <ListItemText primary="2TB Storage" className={styling.data} />
                </ListItem>
                <Divider/>
                <ListItem divider>
                  <ListItemText primary="10 Users Allowed"  className={styling.data}/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Send up to 20 GB" className={styling.data}/>
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary="Learn More" className={styling.button}/>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
export default App;
