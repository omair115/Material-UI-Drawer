import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { Router, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Home from "../pages/dashboard/Dashboard";
import UserDetails from '../pages/userDetails/UserDetails'
import ContactsIcon from '@material-ui/icons/Contacts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BallotIcon from '@material-ui/icons/Ballot';
import NotFoundPage from '../pages/Errors/404'
const drawerWidth = 240;
const history = createBrowserHistory();

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  drawerPaper: {
    marginTop:'65px',
    backgroundColor:'white',
    position: "relative",
    width: drawerWidth,
    
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
   
  },
  buttonAndIconColor:{
    color:'blue',
    overfolw:'hidden',
  //   '&:hover': {
  //     border: '1px solid black',
  //     padding:'5px',
  //     backgroundColor:'purple',
  //     borderRadius: '0px 100px 100px 0px',
     
  // },
  
  },
  iconContainer: {
    "&:hover ": {
        color: 'red',
    }
},
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(
  
  ({ classes, variant, open, onClose, onItemClick,openMenu,onItemClickExpandList }) => (
    <Router history={history}  >
    <Drawer elevation={0} variant={variant} open={open} onClose={onClose}
                classes={{
                  paper: classes.drawerPaper
                }}
              
    >
      
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'temporary'
        })}
      />
      
      <List >
        <ListItem button component={Link} to="/" onClick={onItemClick('DashBoard')} style={{alignItem:'center'}}>
        <ListItemIcon  className={classes.buttonAndIconColor} classes={{
          root: classes.iconContainer
      }}>
          <InboxIcon />
          <ListItemText style={{paddingLeft:'20px'}}>Dashboard</ListItemText>
          </ListItemIcon>
        </ListItem>
      
        <ListItem button component={Link} to="/UserDetails" >
        <ListItemIcon  className={classes.buttonAndIconColor} classes={{
          root: classes.iconContainer
      }}>
          <ContactsIcon />
          <ListItemText style={{paddingLeft:'20px'}} onMouseOver={onItemClickExpandList('User Deatils')}>User Details</ListItemText>
          </ListItemIcon>
          <span style={{marginLeft:'20px'}}/>
          {openMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMenu} timeout="auto" unmountOnExit style={{marginLeft:'30px'}}>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder  className={classes.buttonAndIconColor}/>
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </List>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AccountCircleIcon  className={classes.buttonAndIconColor}/>
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </List>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BallotIcon  className={classes.buttonAndIconColor}/>
            </ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>
        </List>
      </Collapse>
      </List>
    </Drawer>
    <main className={classes.content}>
        <Route exact path="/" component={Home} />
        <Route path="/UserDetails" component={UserDetails} />
        <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
    </main>
    </Router>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('Dashboard');
  const [openMenu, setOpenMenu] = useState(true);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = title => () => {
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(drawer);
    setDrawer(drawer);
  };

  const onItemClickExpandList = title =>() =>{
    setTitle(title);
    setDrawer(variant === 'temporary' ? false : drawer);
    setDrawer(drawer);
    setOpenMenu(openMenu);
  
  }

  return (
    <div className={classes.root}>
      <MyToolbar title={title} onMenuClick={toggleDrawer} />
      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
        openMenu={openMenu}
        onItemClickExpandList={onItemClickExpandList}
      />
    </div>
  );
}

export default withStyles(styles)(AppBarInteraction);
