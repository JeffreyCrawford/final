	import React from 'react';
	import PropTypes from 'prop-types';
	import { withStyles } from '@material-ui/core/styles';
	import Drawer from '@material-ui/core/Drawer';
	import AppBar from '@material-ui/core/AppBar';
	import Toolbar from '@material-ui/core/Toolbar';
	import List from '@material-ui/core/List';
	import Typography from '@material-ui/core/Typography';
	import Divider from '@material-ui/core/Divider';
	import UserList from "./UserList";
	import UserLogin from "./UserLogin";

	import HeaderText from "./HeaderText";
	import MainBody from "./MainBody";
	import blue from '@material-ui/core/colors/blue';
	import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
	} from 'react-router-dom'


	const drawerWidth = 240;

	const styles = theme => ({
	root: {
	flexGrow: 1,
	height: 430,
	zIndex: 1,
	position: 'relative',
	display: 'flex',
	},
	appBar: {
	zIndex: theme.zIndex.drawer + 1,
	backgroundColor: blue[600]
	},
	drawerPaper: {
	position: 'relative',
	width: drawerWidth,
	},
	content: {
	flexGrow: 1,
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing.unit * 3,
	minWidth: 0, // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar,
	});

	function UserTemplate(props) {
	const { classes } = props;

	return (
	<div className={classes.root}>
		<AppBar position="absolute" className={classes.appBar}>
		<Toolbar>
			<Typography variant="title" color="inherit" noWrap>
			<HeaderText />
			</Typography>
		</Toolbar>
		</AppBar>
		<Drawer
		variant="permanent"
		classes={{
			paper: classes.drawerPaper,
		}}
		>
		<div className={classes.toolbar} />
		<UserList />
		</Drawer>
		<main className={classes.content}>
		<div className={classes.toolbar} />
			<MainBody />
		</main>
	</div>
	);
	}

	UserTemplate.propTypes = {
	classes: PropTypes.object.isRequired,
	};

	export default withStyles(styles)(UserTemplate);