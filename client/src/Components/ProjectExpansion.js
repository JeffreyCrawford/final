import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import Paper from '@material-ui/core/Paper';
import StatusButton from './StatusButton';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  buttonSubmit: {
	margin: theme.spacing.unit,
	backgroundColor: blue[600]
  },
  buttonCancel: {
	margin: theme.spacing.unit,
	backgroundColor: yellow[700]
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 1000
    },

});



class ProjectExpansion extends React.Component {
  state = {
    expanded: null,
    projects: []
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


getInitialState = () => {
    return {
      projects: []
    }
};

  componentDidMount = () => {
    var _this = this;
    fetch("/api/projects", {
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
            projects: res
        }) 
    });

    
  }

  

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;


    return (
        <div>
            <div className={classes.root}>
                {this.state.projects.map(project => {
                    return( 
                    <ExpansionPanel>
                            
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{project.id} {project.project_name}</Typography>
                        <Typography className={classes.secondaryHeading}></Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                        <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">

                            <ListItem>
                                <TextField
                                    required
                                    id="county"
                                    label="County"
                                    className={classes.textField}
                                    value={project.county}
                                    onChange={this.handleChange('county')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="community"
                                    label="Community"
                                    className={classes.textField}
                                    value={project.community}
                                    onChange={this.handleChange('community')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="escrow"
                                    label="Escrow"
                                    className={classes.textField}
                                    value={project.escrow}
                                    onChange={this.handleChange('escrow')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="projectName"
                                    label="Project Name"
                                    className={classes.textField}
                                    value={project.project_name}
                                    onChange={this.handleChange('projectName')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="category"
                                    label="Project Category"
                                    className={classes.textField}
                                    value={project.category}
                                    onChange={this.handleChange('category')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="authorize"
                                    label="Check to Authorize Account Access"
                                    className={classes.textField}
                                    value={project.authorize}
                                    onChange={this.handleChange('authorize')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="fundsRequested"
                                    label="Grant Funds Requested"
                                    className={classes.textField}
                                    value={project.funds_requested}
                                    onChange={this.handleChange('fundsRequested')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="additionalFunds"
                                    label="Additional Funds Approved"
                                    className={classes.textField}
                                    value={project.additional_funds}
                                    onChange={this.handleChange('additionalFunds')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="totalCost"
                                    label="Total Project Cost"
                                    className={classes.textField}
                                    value={project.total_cost}
                                    onChange={this.handleChange('totalCost')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="startDate"
                                    label="Estimated Start Date"
                                    className={classes.textField}
                                    value={project.start_date}
                                    onChange={this.handleChange('startDate')}
                                    style = {{width: 457.5}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="endDate"
                                    label="Estimated End Date"
                                    className={classes.textField}
                                    value={project.end_date}
                                    onChange={this.handleChange('endDate')}
                                    style = {{width: 457.5}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="description"
                                    label="Project Description"
                                    className={classes.textField}
                                    value={project.description}
                                    onChange={this.handleChange('description')}
                                    style = {{width: 930}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="siteName"
                                    label="Site Name"
                                    className={classes.textField}
                                    value={project.site_name}
                                    onChange={this.handleChange('siteName')}
                                    style = {{width: 457.5}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="siteAddress"
                                    label="Site Address"
                                    className={classes.textField}
                                    value={project.site_address}
                                    onChange={this.handleChange('siteAddress')}
                                    style = {{width: 457.5}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="siteCity"
                                    label="Site City"
                                    className={classes.textField}
                                    value={project.site_city}
                                    onChange={this.handleChange('siteCity')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="sitestate"
                                    label="Site State"
                                    className={classes.textField}
                                    value={project.site_state}
                                    onChange={this.handleChange('siteState')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />

                                <TextField
                                    required
                                    id="siteZip"
                                    label="Site Zip Code"
                                    className={classes.textField}
                                    value={project.site_zip}
                                    onChange={this.handleChange('siteZip')}
                                    style = {{width: 300}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="signature"
                                    label="Signature"
                                    className={classes.textField}
                                    value={project.signature}
                                    onChange={this.handleChange('signature')}
                                    style = {{width: 400}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="date"
                                    label="Date"
                                    className={classes.textField}
                                    value={project.date}
                                    onChange={this.handleChange('date')}
                                    style = {{width: 400}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    required
                                    id="printedName"
                                    label="Printed Name and Title"
                                    className={classes.textField}
                                    value={project.printed_name}
                                    onChange={this.handleChange('printedName')}
                                    style = {{width: 400}}
                                    margin="normal"
                                />
                            </ListItem>

                            <ListItem>
                                <Button variant="contained" color="primary" className={classes.buttonCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained" color="primary" className={classes.buttonSubmit}>
                                    Submit
                                </Button>
                            </ListItem>

                        </form>


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

ProjectExpansion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectExpansion);