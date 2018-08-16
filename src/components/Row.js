import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
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
    padding: '5px 0',
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

const Row = ({
  type, number, classes, onChangeSelect, onChangeInput, onClickButton,
}) => (
  <Fragment>
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select
          value={type}
          onChange={onChangeSelect}
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
        onChange={onChangeInput}
        type="number"
        className={classes.textField}
      />
      <IconButton variant="contained" color="secondary" className={classes.button} onClick={onClickButton}>
        <Icon color="error">close</Icon>
      </IconButton>
    </form>
  </Fragment>
);

export default withStyles(styles)(Row);

Row.propTypes = {
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  number: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
