import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Modal from '../../components/Modal';
// Styled-Components
import Wrapper, { Customiser } from './styles';

const modalOverlay = document.getElementById('c-modal-overlay');

class GetProduct extends Component {
  componentWillMount = () => {
    modalOverlay.className = '-active';
  }

  componentWillUnmount = () => {
    modalOverlay.className = '-inactive';
  }

  render() {
    const { className, history } = this.props;

    return (
      <Wrapper
        className={`c-product-viewer${className ? className : ''}`}
      >
        <header>
          <Button
            className="c-btn--close"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section></section>
        <Customiser>
          <Modal
            trigger={(
              <Button
                aria-label="Filter"
              >
                <span className="placeholder">
                  <Icon icon={ICONS.FILTER} />
                  <span>Customize</span>
                </span>
              </Button>
            )}
          >
            <div />
          </Modal>
        </Customiser>
        <footer>
          <span className="price">
            Price
            <small><strong>*</strong> Available</small>
          </span>
          <div className="c-actions">
            <Button
              className="c-btn c-btn--buy"
              aria-label="Buy"
            />
          </div>
        </footer>
      </Wrapper>
    );
  }
}

GetProduct.propTypes = {
  className: PropTypes.string,
};

export default GetProduct;
