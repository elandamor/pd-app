import styled from 'styled-components';

const Wrapper = styled.article`
  margin-bottom: 8px;
  padding: 0 8px;
  position: relative;

  .message {
    background-color: #ffffff;
    border: thin solid #e8e8e8;
    border-radius: 4px;
    color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
    font-size: 12px;
    line-height: 1.25;
    padding: 8px;
    max-width: 80%;
    position: relative;

    &.-incoming {
      border-bottom: 4px solid #e8e8e8;
    }

    &.-outgoing {
      border-bottom: 4px solid #02b875;
      float: right;
    }
  }
`;

export default Wrapper;
