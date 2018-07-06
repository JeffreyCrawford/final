import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import FormControl from '@material-ui/core/FormControl';
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






class ProfileForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    county: "",
    community: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <ListItem>
            <TextField
                required
                id="name"
                label="Your Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="phone"
                label="Contact Phone"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange('phone')}
                style = {{width: 300}}
                margin="normal"
            />
        </ListItem>

        <Divider />

        <ListItem>

            <TextField
                required
                id="community"
                label="Community Name"
                className={classes.textField}
                value={this.state.community}
                onChange={this.handleChange('community')}
                style = {{width: 300}}
                margin="normal"
            />

            <TextField
                required
                id="county"
                label="County Where Community is Located"
                className={classes.textField}
                value={this.state.county}
                onChange={this.handleChange('county')}
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

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);