import React from 'react';
import PropTypes from 'prop-types';
// Components
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
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
    const { target } = evt;

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
    const { className, label, name, options } = this.props;
    const { isExpanded, selected } = this.state;

    const mappedOptions = options && options.length > 0 && options.map((option) => {
      return (
        <li
          key={option.value.toString()}
          role="option"
          tabIndex="0"
          aria-selected={selected.value === option.value}
          data-option-name={option.name}
          data-option-value={option.value}
          onClick={this.handleChange}
        >
          {option.name}
        </li>
      );
    });

    return (
      <Wrapper
        className={`c-dropdown${className ? ' ' + className : ''}`}
      >
        <div
          id={`dd-${name}`}
          className="label"
        >
          {label}
        </div>
        <div
          className="c-btn"
          role="button"
          aria-expanded={isExpanded}
          aria-labelledby={`dd-${name}`}
          tabIndex="0"
          onClick={this.handleToggle}
        >
          {selected.name}
          <span className="c-icon-wrapper">
            <Icon
              icon={ICONS.EXPAND_ARROW}
              viewBox="0 0 20 12"
            />
          </span>
        </div>
        <ul
          className="c-dropdown__list"
          data-dropdown-list={name}
          aria-labelledby={`dd-${name}`}
          role="listbox"
        >
          {mappedOptions}
        </ul>
      </Wrapper>
    );
  }
}

Dropdown.defaultProps = {

};

Dropdown.propTypes = {
  className: PropTypes.string,
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
