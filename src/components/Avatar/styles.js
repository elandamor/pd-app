import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  ${'' /* background-color: ${(props) => props.theme ? props.theme.palette.cardBorderColor : '#ededed'}; */}
  border-radius: 500rem;
  display: flex;
  height: 32px;
  justify-content: center;
  margin: 8px;
  overflow: hidden;
  width: 32px;
`;

export default Wrapper;
