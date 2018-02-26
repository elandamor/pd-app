import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Button from '../Button';
import Dropdown from '../Dropdown';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
// Styled-Components
import Wrapper from './styles';

const tasks = [
  {
    name: 'Post',
    value: 'post'
  },
  {
    name: 'Product',
    value: 'product'
  },
  {
    name: 'Service',
    value: 'service'
  },
];

class PostCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: {},
    };
  }

  handleSelector = (target) => {
    this.setState({
      currentTask: target,
    });
  }

  render() {
    const { className, onClose } = this.props;
    const { currentTask } = this.state;

    return (
      <Wrapper
        className={`c-post-creator${className ? className : ''}`}
      >
        <header>
          <Dropdown
            id="c-task-selector"
            name="tasks"
            label="Add"
            onChange={this.handleSelector}
            options={tasks}
            selected={tasks[0]}
            srLabel="Choose a task"
          />
          <Button
            className="c-btn--close"
            aria-label="Close"
            onClick={onClose}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section>
        {
          currentTask.value === 'post' && (
            <h1>Post</h1>
          )
        }
        {
          currentTask.value === 'product' && (
            <h1>Product</h1>
          )
        }
        {
          currentTask.value === 'service' && (
            <h1>Service</h1>
          )
        }
        </section>
        <footer></footer>
      </Wrapper>
    );
  }
}

PostCreator.propTypes = {
  className: PropTypes.string,
};

export default PostCreator;
