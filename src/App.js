import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

import Modal from './components/Modal';
import List from './components/List';

const styles = () => ({
  chip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    borderRadius: '5px',
    fontSize: '16px',
    height: '50px',
  },
});

class App extends Component {
  state = {
    isModalOpen: false,
    initialList: [
      { type: 2, number: 22 },
      { type: 3, number: 12 },
      { type: 4, number: 4 },
    ],
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  updateList = (newList) => {
    this.setState({
      initialList: newList,
    });
    this.closeModal();
  }

  render() {
    const { isModalOpen, initialList } = this.state;
    const { classes } = this.props;
    return (
      <div className="App">
        <h1>Hello!</h1>
        <p>Welcome to my page with the new Modal Component!</p>
        <Button variant="contained" color="primary" onClick={this.openModal}>
          Open Modal
        </Button>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <Chip
              label="Number Structure"
              onDelete={this.closeModal}
              className={classes.chip}
            />
            <List list={initialList} updateList={this.updateList} />
            <Button onClick={this.closeModal}>
              Cancel
            </Button>
          </Modal>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(App);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
