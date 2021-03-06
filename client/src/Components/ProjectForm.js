import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
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
    }
});



class ProjectForm extends React.Component {
    state = {
        county: "",
        community: "",
        escrow: null,
        projectName: "",
        category: "",
        authorize: null,
        fundsRequested: "",
        additionalFunds: "",
        totalCost: "",
        startDate: "",
        endDate: "",
        description: "",
        siteName: "",
        siteAddress: "",
        siteCity: "",
        siteState: "",
        siteZip: "",
        signature: "",
        date: "",
        printedName: ""
    };

  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event => {
	event.preventDefault();
	  fetch("/api/projects", {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(this.state)
    })
  }

  render() {
    const { classes } = this.props;

    return (
            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">

                <ListItem>
                    <TextField
                        
                        id="county"
                        label="County"
                        className={classes.textField}
                        value={this.state.county}
                        onChange={this.handleChange('county')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="community"
                        label="Community"
                        className={classes.textField}
                        value={this.state.community}
                        onChange={this.handleChange('community')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="escrow"
                        label="Escrow"
                        className={classes.textField}
                        value={this.state.escrow}
                        onChange={this.handleChange('escrow')}
                        style = {{width: 300}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="projectName"
                        label="Project Name"
                        className={classes.textField}
                        value={this.state.projectName}
                        onChange={this.handleChange('projectName')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="category"
                        label="Project Category"
                        className={classes.textField}
                        value={this.state.category}
                        onChange={this.handleChange('category')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="authorize"
                        label="Check to Authorize Account Access"
                        className={classes.textField}
                        value={this.state.authorize}
                        onChange={this.handleChange('authorize')}
                        style = {{width: 300}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="fundsRequested"
                        label="Grant Funds Requested"
                        className={classes.textField}
                        value={this.state.fundsRequested}
                        onChange={this.handleChange('fundsRequested')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="additionalFunds"
                        label="Additional Funds Approved"
                        className={classes.textField}
                        value={this.state.additionalFunds}
                        onChange={this.handleChange('additionalFunds')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="totalCost"
                        label="Total Project Cost"
                        className={classes.textField}
                        value={this.state.totalCost}
                        onChange={this.handleChange('totalCost')}
                        style = {{width: 300}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="startDate"
                        label="Estimated Start Date"
                        className={classes.textField}
                        value={this.state.startDate}
                        onChange={this.handleChange('startDate')}
                        style = {{width: 457.5}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="endDate"
                        label="Estimated End Date"
                        className={classes.textField}
                        value={this.state.endDate}
                        onChange={this.handleChange('endDate')}
                        style = {{width: 457.5}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="description"
                        label="Project Description"
                        className={classes.textField}
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        style = {{width: 930}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="siteName"
                        label="Site Name"
                        className={classes.textField}
                        value={this.state.siteName}
                        onChange={this.handleChange('siteName')}
                        style = {{width: 457.5}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="siteAddress"
                        label="Site Address"
                        className={classes.textField}
                        value={this.state.siteaddress}
                        onChange={this.handleChange('siteAddress')}
                        style = {{width: 457.5}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="siteCity"
                        label="Site City"
                        className={classes.textField}
                        value={this.state.siteCity}
                        onChange={this.handleChange('siteCity')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="sitestate"
                        label="Site State"
                        className={classes.textField}
                        value={this.state.siteState}
                        onChange={this.handleChange('siteState')}
                        style = {{width: 300}}
                        margin="normal"
                    />

                    <TextField
                        
                        id="siteZip"
                        label="Site Zip Code"
                        className={classes.textField}
                        value={this.state.siteZip}
                        onChange={this.handleChange('siteZip')}
                        style = {{width: 300}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="signature"
                        label="Signature"
                        className={classes.textField}
                        value={this.state.signature}
                        onChange={this.handleChange('signature')}
                        style = {{width: 400}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="date"
                        label="Date"
                        className={classes.textField}
                        value={this.state.date}
                        onChange={this.handleChange('date')}
                        style = {{width: 400}}
                        margin="normal"
                    />
                </ListItem>

                <ListItem>
                    <TextField
                        
                        id="printedName"
                        label="Printed Name and Title"
                        className={classes.textField}
                        value={this.state.printedName}
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
    );
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectForm);