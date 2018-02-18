import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0 12px 12px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 120px;
  grid-gap: 12px;
`;

const Category = styled.li`
  background-color: #e8e8e8;
  border-radius: 4px;
  list-style-type: none;
  text-indent: -99999px;
`;

export default Wrapper;

export {
  Category,
};
