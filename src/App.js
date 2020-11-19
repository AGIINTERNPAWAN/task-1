import React from 'react'
import './App.css';
import amazon from './assets/amazon.png'
import { Switch,Card,IconButton, CardContent,Grid, List, ListItem, ListItemText, Divider, Container, Typography, Toolbar, AppBar } from '@material-ui/core';
function App() {
  return (
    <Container maxWidth ="lg">
    <AppBar position="static">
  <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6">
      Amazon
    </Typography>
  </Toolbar>
</AppBar>
    <img src ={amazon} className="img" alt="No Preview"/>
    <Typography variant="h5" className="title" >Our Pricings</Typography>
    <div className="switch">
    <label>Automatic</label>
    <Switch color="primary"/>
    <label>Manually</label>
    </div>
    <Grid container spacing={3} className="container">
    <Grid item xs={12} sm={4}>
    <Card>
    <CardContent>
    <Typography variant="h6" >Basic</Typography>
    <Typography variant="h3" >$19.99</Typography>
    <List component="nav" aria-label="mailbox folders" className="new">
  <ListItem button divider/>
    <ListItem button>
    <ListItemText primary="500 GB Storage" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="2 Users Allowed" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Send up to 3 GB" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Learn More"/>
  </ListItem>
  
</List>
    </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Card>
    <CardContent>
    <Typography variant="h6" >Professional</Typography>
    <Typography variant="h3" >$24.99</Typography>
    <List component="nav" aria-label="mailbox folders">
    <ListItem button divider/>
  <ListItem button>
    <ListItemText primary="1TB Storage" />
  </ListItem>
  <Divider/>
  <ListItem button divider>
    <ListItemText primary="5 Users Allowed" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Send up to 10 GB" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Learn More"/>
  </ListItem>
</List>
    </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} sm={4}>
    <Card>
    <CardContent>
    <Typography variant="h6" >Master</Typography>
    <Typography variant="h3" >$39.99</Typography>
    <List component="nav" aria-label="mailbox folders">
    <ListItem button divider/>
  <ListItem button>
    <ListItemText primary="2TB Storage" />
  </ListItem>
  <Divider/>
  <ListItem button divider>
    <ListItemText primary="10 Users Allowed" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Send up to 20 GB" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Learn More"/>
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
