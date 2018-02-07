import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';

const Wrapper = styled.div`
  label {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    margin: 0 12px;
  }

  .c-select {
    position: relative;

    .icon, svg {
      height: 6px;
      width: 14px;
    }

    .icon {
      bottom: 17px;
      display: flex;
      position: absolute !important;
      right: 12px;
    }

    svg {
      vertical-align: inherit;
    }
  }

  select {
    -webkit-appearance: none;
    background-color: ${(props) => props.theme.palette.cardBackground};
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    line-height: 1.5;
    margin: 4px 0 2px;
    outline: none;
    padding: 8px 12px;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

const Dropdown = (props) => {
  const { id, label, name, value } = props;

  const defaultOption = {
    node: {
      id: -1,
      name: props.placeholder || 'Select',
    },
  };
  const options = [defaultOption, ...props.options];

  const filteredOptions = options && options.length > 0 && options.map((option) => {
    const node = option.node;

    return node.id !== -1 ? (
      <option key={node.id} value={node.id}>{node.name}</option>
    ) : (
      <option key={node.id} value={node.id}>{node.name}</option>
    );
  });

  return (
    <Wrapper className="c-input__wrapper">
      <label htmlFor={id}>{label}</label>
      <div className="c-select">
        <select id={id} name={name} value={value} onChange={props.onChange}>
          {filteredOptions}
        </select>
        <Icon icon={ICONS.EXPAND_ARROW} viewBox="0 0 20 12" />
      </div>
    </Wrapper>
  );
};

Dropdown.defaultProps = {
  options: [],
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
};

export default Dropdown;
