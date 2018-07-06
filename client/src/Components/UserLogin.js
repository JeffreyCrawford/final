import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});


class UserLogin extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
		<div>
			<ListItem>
				<FormControl
				className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
				aria-describedby="weight-helper-text"
				>
				<InputLabel htmlFor="email">Email</InputLabel>
				<Input
					id="email"
					value={this.state.email}
					onChange={this.handleChange('email')}
					style = {{width: 300}}
					margin="normal"
				/>
				</FormControl>
			</ListItem>

			<ListItem>
				<FormControl className={classNames(classes.margin, classes.textField)}>
				<InputLabel htmlFor="password">Password</InputLabel>
				<Input
					id="password"
					type={this.state.showPassword ? 'text' : 'password'}
					value={this.state.password}
					onChange={this.handleChange('password')}
					endAdornment={
					<InputAdornment position="end">
						<IconButton
						aria-label="Toggle password visibility"
						onClick={this.handleClickShowPassword}
						onMouseDown={this.handleMouseDownPassword}
						>
						{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
					}
					style = {{width: 300}}
					margin="normal"
				/>
				</FormControl>
			</ListItem>
		</div>
    );
  }
}

UserLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserLogin);