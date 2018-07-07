import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ProfileIcon from '@material-ui/icons/AccountBox';
import ProjectIcon from '@material-ui/icons/Build';
import DisbursementIcon from '@material-ui/icons/AttachMoney';
import HomeIcon from '@material-ui/icons/Home';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function UserList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component="a" href="/home">
            <ListItemIcon>
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/profile">
            <ListItemIcon >
            <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component="a" href="/project">
            <ListItemIcon>
            <ProjectIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component="a" href="/disbursement">
            <ListItemIcon>
            <DisbursementIcon />
            </ListItemIcon>
            <ListItemText primary="Disbursements" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Help" />
        </ListItem>
        <ListItem button component="a" href="https://www.google.com">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);