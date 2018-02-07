import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  label {
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    margin: 0 12px;
  }

  input {
    -webkit-appearance: none;
    background-color: ${(props) => props.theme.palette.cardBackground};
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
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

const Input = (props) => {
  const { className, id, label } = props;

  return (
    <Wrapper className={`c-input__wrapper${className || ''}`}>
      { label && <label htmlFor={id}>{label}</label> }
      <input {...props} />
    </Wrapper>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
