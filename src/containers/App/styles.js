import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .c-app-header {
    background-color: #ffffff;
    border-bottom: thin solid #e8e8e8;
    ${'' /* box-shadow: 0 1px 5px #e8e8e8; */}
    height: 64px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;

    @media (min-width: 1024px) {
      height: 88px;
    }
  }
`;

const Main = styled.main`
  -webkit-overflow-scrolling: touch;
  background-color: #fafafa;
  ${'' /* flex: 1; */}
  ${'' /* height: 100%; */}
  ${'' /* overflow-y: scroll; */}
  padding: 64px 0 56px;

  @media (min-width: 1024px) {
    padding: 88px 0 0;
  }
`;

const Footer = styled.footer`
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0 -1px 5px #e8e8e8;
  height: 56px;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 4;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default Wrapper;

export {
  Footer,
  Main
}
