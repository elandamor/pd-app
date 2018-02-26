import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 8px;

  li:last-child {
    margin-bottom: 0;
  }

  .c-suggestions {
    background-color: #fff;
    border: thin solid #ededed;
    border-radius: 4px;
  }

  .c-suggestion {
    align-items: center;
    border-bottom: thin solid #ededed;
    display: flex;

    a {
      flex: 1;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default Wrapper;

export {

};
