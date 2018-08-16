import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import v4 from 'uuid4';

import Row from './Row';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
    };
  }

  handleChange = (i, name) => event => {
    const { list } = this.state;
    const tempList = list;
    if (name === 'select') {
      tempList[i].type = event.target.value;
    } else {
      tempList[i].number = event.target.value;
    }
    this.setState({ list: tempList });
  };

  createRow = () => {
    this.setState(prevState => ({
      list: [...prevState.list, { type: '', number: 0 }],
    }));
  }

  deleteRow = i => {
    const { list } = this.state;
    const tempList = list;
    tempList.splice(i, 1);
    this.setState({ list: tempList });
  }

  render() {
    const { list } = this.state;
    const { updateList } = this.props;
    return (
      <Fragment>
        <div className="list-container">
          {
            list.map((item, i) => (
              <Row
                key={v4()}
                type={item.type}
                number={item.number}
                onChangeSelect={this.handleChange(i, 'select')}
                onChangeInput={this.handleChange(i, 'input')}
                onClickButton={() => this.deleteRow(i)}
              />
            ))
        }
          <Button onClick={this.createRow} color="primary">Create</Button>
        </div>
        <Button variant="contained" color="primary" onClick={() => { updateList(list); }}>Save</Button>
      </Fragment>
    );
  }
}

export default List;

List.propTypes = {
  updateList: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
