/**
 * Rating.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
// Styles
import Wrapper, { Star } from './styles';

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || 0,
      stars: this.getStars(props.value || 0),
    };
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      stars: this.getStars(props.value),
      value: props.value,
    });
  }

  getRate = () => Math.round(this.state.value)

  getStars = (activeCount) => {
    const { count } = this.props;
    const activeStars = activeCount || this.getRate();
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push({
        active: i <= activeStars - 1,
      });
    }

    return stars;
  }

  mouseEnter = (evt) => {
    if (this.props.readonly) {
      return;
    }

    let index = Number(evt.target.getAttribute('data-index'));
    index += 1;

    this.setState({
      stars: this.getStars(index),
    });
  }

  mouseLeave = () => {
    if (this.props.readonly) {
      return;
    }

    this.setState({
      stars: this.getStars(),
    });
  }

  handleClick = (evt) => {
    if (this.props.readonly) {
      return;
    }

    let index = Number(evt.target.getAttribute('data-index'));
    index += 1;

    this.setState({
      value: index,
      stars: this.getStars(index),
    });
  }

  renderStars() {
    const { size } = this.props;
    const { stars } = this.state;

    return stars.map((star, i) => (
      <Star
        className={`c-star${star.active ? ' -active' : ''}`}
        key={i} // eslint-disable-line react/no-array-index-key
        data-index={i}
        onClick={this.handleClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <Icon icon={ICONS.STAR} size={size} />
      </Star>
    ));
  }

  render() {
    const { className } = this.props;

    return (
      <Wrapper className={className}>
        {this.renderStars()}
      </Wrapper>
    );
  }
}

Rating.defaultProps = {
  className: '',
  count: 5,
  readonly: false,
  size: 24,
  value: 0,
};

Rating.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  readonly: PropTypes.bool,
  size: PropTypes.number,
  value: PropTypes.number,
};

export default Rating;
