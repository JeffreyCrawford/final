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
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '70%',
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
    }
});



class NewDisbursement extends React.Component {
    state = {
        name: "",
        amount: "",
        finalDisbursement: null,
        signature: "",
        date: "",
      };
    
      
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
          fetch("/api/disbursementrequests", {
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




            <div className={classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<AddIcon />}>
                <Typography className={classes.heading}>New Disbursement Request</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                    <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                        <ListItem>
                            <TextField
                                required
                                id="name"
                                label="Project Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                style = {{width: 457.5}}
                                margin="normal"
                            />
                        </ListItem>
                        <ListItem>
        
                            <TextField
                                required
                                id="amount"
                                label="Amount to be Disbursed"
                                className={classes.textField}
                                value={this.state.amount}
                                onChange={this.handleChange('amount')}
                                style = {{width: 457.5}}
                                margin="normal"
                            />
                        </ListItem>
                        <ListItem>
        
                            <TextField
                                required
                                id="finalDisbursement"
                                label="Final Disbursement for this Project?"
                                className={classes.textField}
                                value={this.state.finalDisbursement}
                                onChange={this.handleChange('finalDisbursement')}
                                style = {{width: 457.5}}
                                margin="normal"
                            />
                        </ListItem>
                        <ListItem>
        
                            <TextField
                                required
                                id="signature"
                                label="Signature"
                                className={classes.textField}
                                value={this.state.signature}
                                onChange={this.handleChange('signature')}
                                style = {{width: 457.5}}
                                margin="normal"
                            />
                        </ListItem>
                        <ListItem>
        
                            <TextField
                                required
                                id="date"
                                label="Date"
                                className={classes.textField}
                                value={this.state.date}
                                onChange={this.handleChange('date')}
                                style = {{width: 457.5}}
                                margin="normal"
                            />
        
                        </ListItem>
        
                        <ListItem>
                        <Button variant="contained" color="primary" className={classes.buttonCancel}>
                            Cancel
                        </Button>
                        <Button type="submit"  variant="contained" color="primary" className={classes.buttonSubmit}>
                            Submit
                        </Button>
                        </ListItem>
            
                    </form>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>








            
        );
    }
}

NewDisbursement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewDisbursement);