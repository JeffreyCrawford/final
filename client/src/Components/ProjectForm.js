import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

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

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <ListItem>
            <TextField
                required
                id="county"
                label="County"
                className={classes.textField}
                value={this.state.county}
                onChange={this.handleChange('county')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="community"
                label="Community"
                className={classes.textField}
                value={this.state.community}
                onChange={this.handleChange('community')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="escrow"
                label="Escrow"
                className={classes.textField}
                value={this.state.escrow}
                onChange={this.handleChange('escrow')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>

        <Divider />

        <ListItem>

            <TextField
                required
                id="projectName"
                label="Project Name"
                className={classes.textField}
                value={this.state.projectName}
                onChange={this.handleChange('projectName')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="category"
                label="Category"
                className={classes.textField}
                value={this.state.category}
                onChange={this.handleChange('category')}
                style = {{width: 300}}
                margin="normal"
            />


            <TextField
                required
                id="address"
                label="Community Mailing Address"
                className={classes.textField}
                value={this.state.address}
                onChange={this.handleChange('address')}
                style = {{width: 300}}
                margin="normal"
            />

        </ListItem>

        <ListItem>

            <TextField
                required
                id="city"
                label="City"
                className={classes.textField}
                value={this.state.city}
                onChange={this.handleChange('city')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="state"
                label="State"
                className={classes.textField}
                value={this.state.state}
                onChange={this.handleChange('state')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="zip"
                label="Zip Code"
                className={classes.textField}
                value={this.state.zip}
                onChange={this.handleChange('zip')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>





      </form>
    );
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectForm);