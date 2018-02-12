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

    const selected = props.selected || {
      name: props.label || props.srLabel || 'Choose an option...',
      value: -1,
    };

    this.state = {
      isExpanded: false,
      selected,
    };

    props.onChange(this.state.selected);
  }

  handleChange = (evt) => {
    const target = evt.target;

    this.setState({
      selected: {
        name: target.getAttribute('data-option-name'),
        value: target.getAttribute('data-option-value'),
      },
    });

    this.handleToggle();

    this.props.onChange({
      name: target.getAttribute('data-option-name'),
      value: target.getAttribute('data-option-value'),
    });
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
            onClick={this.handleChange}
          >
            Post
          </li>
          <li
            role="option"
            tabIndex="0"
            aria-selected={selected.value === 'product'}
            data-option-name="Product"
            data-option-value="product"
            onClick={this.handleChange}
          >
            Product
          </li>
          <li
            role="option"
            tabIndex="0"
            aria-selected={selected.value === 'service'}
            data-option-name="Service"
            data-option-value="service"
            onClick={this.handleChange}
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
  selected: PropTypes.object,
  srLabel: PropTypes.string,
  value: PropTypes.any,
};

export default Dropdown;
