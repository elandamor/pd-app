import React from 'react';
import PropTypes from 'prop-types';
// Components
// import Icon from '../Icon';
// import { ICONS } from '../Icon/constants';
// Styled-Components
import Wrapper from './styles';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      selected: {
        name: 'Post',
        value: 'post',
      },
    };
  }

  handleSelect = (evt) => {
    const target = evt.target;

    this.setState({
      selected: {
        name: target.getAttribute('data-option-name'),
        value: target.getAttribute('data-option-value'),
      },
    });

    this.handleToggle();
  }

  handleToggle = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    const { isExpanded, selected } = this.state;

    return (
      <Wrapper>
        <div
          id="dd-tasks"
          className="label"
        >
          Add
        </div>
        <div
          className="c-bttn"
          role="button"
          aria-expanded={isExpanded}
          aria-labelledby="dd-tasks"
          tabIndex="0"
          onClick={this.handleToggle}
        >
          {selected.name}
        </div>
        <ul
          className={`c-dropdown__list`}
          data-dropdown-list="tasks"
          aria-labelledby="dd-tasks"
          role="listbox"
        >
          <li
            role="option"
            tabIndex="0"
            aria-selected={selected.value === 'post'}
            data-option-name="Post"
            data-option-value="post"
            onClick={this.handleSelect}
          >
            Post
          </li>
          <li
            role="option"
            tabIndex="0"
            aria-selected={selected.value === 'product'}
            data-option-name="Product"
            data-option-value="product"
            onClick={this.handleSelect}
          >
            Product
          </li>
          <li
            role="option"
            tabIndex="0"
            aria-selected={selected.value === 'service'}
            data-option-name="Service"
            data-option-value="service"
            onClick={this.handleSelect}
          >
            Service
          </li>
        </ul>
      </Wrapper>
    );
  }
}

Dropdown.defaultProps = {
  options: [],
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  srLabel: PropTypes.string,
  value: PropTypes.any,
};

export default Dropdown;
