import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const Wrapper = styled.div`
  label {
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01rem;
    margin: 0 12px;
  }

  textarea {
    -webkit-appearance: none;
    ${'' /* background-color: ${(props) => props.theme.palette.cardBackground}; */}
    background-color: #fff;
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

const Textarea = (props) => {
  const { id, label, srlabel } = props;

  return (
    <Wrapper className="c-textarea__wrapper">
      { label && <label htmlFor={id}>{label}</label> }
      {
        srlabel && (
          <label
            className="sr-only"
            htmlFor={id}
          >
            {srlabel}
          </label>
        )
      }
      <TextareaAutosize {...props} />
    </Wrapper>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  srlabel: PropTypes.string,
};

export default Textarea;
