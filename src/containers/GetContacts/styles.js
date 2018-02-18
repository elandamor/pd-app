import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const Contact = styled.li`
  align-items: flex-start;
  border-bottom: thin solid #e8e8e8;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-height: 48px;
  position: relative;

  .c-contact {
    align-items: flex-start;
    display: flex;
    width: 100%;

    .c-user {
      flex: 1;
      overflow: hidden;
    }
  }
`;

export default Wrapper;

export {
  Contact,
};
