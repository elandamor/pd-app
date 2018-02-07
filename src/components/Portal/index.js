/**
 *
 * Modal.js
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('c-modal-container');

class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    modalContainer.appendChild(this.el);
  }

  componentWillUnmount = () => {
    modalContainer.removeChild(this.el);
  }

  render() {
    const { children, ...rest } = this.props;

    const childrenWithProps = React.Children.map(children,
      (child) => React.cloneElement(child, {
        ...rest,
      })
    );

    return ReactDOM.createPortal(
      React.Children.toArray(childrenWithProps),
      this.el,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.any,
};

export default Modal;
