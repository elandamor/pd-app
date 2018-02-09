import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
// Styled-Components
import Wrapper from './styles';

class Messager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minimized: false,
    }
  }

  handleMinimize = () => {
    this.setState({
      minimized: !this.state.minimized,
    })
  }

  render() {
    const { className, onClose } = this.props;
    const { minimized } = this.state;

    return (
      <Wrapper
        className={`c-messager${className ? className : ''}${minimized ? ' -minimized' : ''}`}
      >
        <header>
          <Button
            className="c-btn--minimize"
            aria-label="Minimize"
            onClick={this.handleMinimize}
          >
            <Icon icon={minimized ? ICONS.MAXIMIZE : ICONS.MINIMIZE} />
          </Button>
          <Button
            className="c-btn--close"
            aria-label="Close"
            onClick={onClose}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section></section>
        <footer></footer>
      </Wrapper>
    );
  }
}

Messager.propTypes = {
  className: PropTypes.string,
};

export default Messager;
