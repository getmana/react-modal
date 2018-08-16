import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => (
  <Fragment>
    <div className="modal-outer" onClick={onClose} />
    <div className="modal">
      {children}
    </div>
  </Fragment>
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.shape({
    props: PropTypes.object.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  children: undefined,
};
