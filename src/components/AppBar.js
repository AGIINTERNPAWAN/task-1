import { AppBar, makeStyles ,Toolbar, Typography, IconButton } from '@material-ui/core';
import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
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
    link: {
        marginRight: '100px',
        marginLeft: '100px',
        color: '#fff',
    },
}))
export default function AppNav() {
    const styling = useStyles();
    return (
        <AppBar position="static">
          <Toolbar className={styling.toolbar} >
          <IconButton edge="start"  color="inherit" aria-label="menu" >
            <MenuIcon/>
          </IconButton>
          <div className="nav-links">
          <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h5" className={styling.link}>Amazon</Typography></Link>
          <Link to="/pricings" style={{ textDecoration: 'none' } }><Typography variant="h5" className={styling.link}>Pricings</Typography></Link>
          <Link to="/about" style={{ textDecoration: 'none' }}><Typography variant="h5" className={styling.link}>About Dev</Typography></Link>
          </div>
          </Toolbar>
        </AppBar>
    );
};
