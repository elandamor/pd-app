import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Star = styled.span`
  display: inline-block;
  margin-right: 2px;

  svg {
    fill: none;
    stroke: #242424;
  }

  &.-active {
    svg {
      fill: orange;
      stroke: orange;
    }
  }
`;

export default Wrapper;

export {
  Star,
};
