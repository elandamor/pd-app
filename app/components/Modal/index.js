/**
 *
 * Modal.js
 *
 */

import React, { Component, Fragment } from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
// Components
import Portal from '../Portal';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen, // eslint-disable-line react/prop-types
    };
  }

  closeModal = () => {
    const { onClose } = this.props;

    if (onClose) {
      onClose();
    }

    this.setState({
      isOpen: false,
    });
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { unmountOnExit } = this.props;
    const { isOpen } = this.state;

    const trigger = React.cloneElement(this.props.trigger, {
      onClick: this.openModal,
    });

    return (
      <Fragment>
        {trigger}
        <Transition
          in={isOpen}
          timeout={{
            enter: 0,
            exit: 300,
          }}
          unmountOnExit={unmountOnExit}
        >
          {(status) => (
            <Portal
              className={` ${status}`}
              onClose={this.closeModal}
            >
              {this.props.children}
            </Portal>
          )}
        </Transition>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  styles: PropTypes.object,
  trigger: PropTypes.node,
  unmountOnExit: PropTypes.bool,
};

export default Modal;
