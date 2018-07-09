import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});



class ProfileExpansion extends React.Component {
  state = {
    expanded: null,
    profiles: []
  };


getInitialState = () => {
    return {
      profiles: []
    }
};

  componentDidMount = () => {
    var _this = this;
    fetch("/api/profiles", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      
    })
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        console.log(res)
        _this.setState({
            profiles: res
        }) 
    })
  }

  

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;


    return (
        <div>
            <div className={classes.root}>
                {this.state.profiles.map((profile, i) => {
                    return( 
                    <ExpansionPanel  >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{profile.id} {profile.name}</Typography>
                        <Typography className={classes.secondaryHeading}>{profile.community}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            <ListItem>
                                {profile.address}
                            </ListItem>
                            <ListItem>
                                {profile.city}
                            </ListItem>
                            <ListItem>
                                {profile.state}
                            </ListItem>
                            <ListItem>
                                {profile.zip}
                            </ListItem>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    )}
                )} 
            </div>
            
        </div>

    );
  }
}

ProfileExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileExpansion);