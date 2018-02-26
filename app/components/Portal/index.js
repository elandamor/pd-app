/**
 *
 * Portal.js
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import noScroll from 'no-scroll';

const modalContainer = document.getElementById('c-modal-container');
const modalOverlay = document.getElementById('c-modal-overlay');

class Portal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');

    this.el.className = `c-modal${props.className || ''}`;

    this.el.setAttribute('role', 'dialog');
    // this.el.setAttribute('aria-labelledby', 'dialog-title');
    // this.el.setAttribute('aria-describedby', 'dialog-description');
  }

  componentDidMount = () => {
    modalContainer.appendChild(this.el);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.className !== this.props.className) {
      this.el.className = `c-modal${this.props.className}`;

      if (this.el.classList.contains('entering')) {
        modalOverlay.className = '-active';
        noScroll.on();
      }

      if (this.el.classList.contains('exiting')) {
        noScroll.off();
        modalOverlay.className = '-inactive';
      }
    }
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

Portal.propTypes = {
  children: PropTypes.any,
};

export default Portal;
