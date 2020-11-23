import { AppBar,makeStyles, TextField ,Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    
    home: {
      color: '#fff',
      margin: '20px',
  },
    link: {
      margin: '26px',
      color: '#fff',
      float: 'right',
    },

}));


const services = [
  { label: 'Amazon EC2', },
  { label: 'Amazon Lambda', },
  { label: 'Amazon RDS', },
  { label: 'AWS IoT Core', },
  { label: 'Amazon Cognito', },
  {  label: 'Amazon Redshift', amount: 400,  },
  { label: 'Elastic Load Balancing', amount: 500},
  {  label: 'Elasticsearch Sevice', amount: 300 },
  { label: 'Amazon Simple Email Service', },
  { label: 'Amazon Simple Queue Service', },
  { label: 'Amazon API Gateway', },
  { label: 'Amazon Kinesis Data Analytics', },
]
export default function AppNav() {
    const styling = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={styling.toolbar} >
            <IconButton edge="start"  color="inherit" aria-label="menu" >
              <MenuIcon/>
            </IconButton>
            <div className="nav-links">
              <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h5" className={styling.home}>Amazon</Typography></Link>
              <Autocomplete Search id="search-box" options={services.map((option) => option.label)} renderInput = {(params) =>
              <div className="search-box" style={{ width: 300}} >
              <TextField {...params} type="search" variant="outlined" size="small" />
              <Button variant="outlined"> <SearchIcon /></Button>
              </div>
              } />
          <Link to="/pricings" style={{ textDecoration: 'none' } }><Typography  className={styling.link}>Pricings</Typography></Link>
          <Link to="/about" style={{ textDecoration: 'none' }}><Typography className={styling.link}>About Dev</Typography></Link>
          </div>
          </Toolbar>
        </AppBar>
    );
};
