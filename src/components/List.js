import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit,
  },
  textField: {
    maxWidth: 60,
    margin: theme.spacing.unit,
  },
  button: {
    backgroundColor: red[50],
    '&:hover': {
      backgroundColor: red[100],
    },
  },
});

class List extends Component {
  state = {
    type: '',
    number: 0,
  };

  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { type, number } = this.state;
    return (
      <Fragment>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <Select
              value={type}
              onChange={this.handleSelect}
              displayEmpty
              name="type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2}>Twin</MenuItem>
              <MenuItem value={3}>Tripple</MenuItem>
              <MenuItem value={4}>Quadro</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="number"
            value={number}
            onChange={this.handleChange('number')}
            type="number"
            className={classes.textField}
          />
          <IconButton variant="contained" color="secondary" className={classes.button}>
            <Icon color="error">close</Icon>
          </IconButton>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(List);
