import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: stretch;
  overflow: hidden;

  .c-app-header {
    background-color: #ffffff;
    border-bottom: thin solid #e8e8e8;
    height: 64px;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
  }
`;

const Page = styled.div`
  -webkit-overflow-scrolling: touch;
  background-color: #fafafa;
  flex: 1;
  overflow-y: auto;
  z-index: 0;
`;

const Footer = styled.footer`
  background-color: #ffffff;
  border-top: thin solid #e8e8e8;
  bottom: 0;
  height: 56px;
  left: 0;
  width: 100%;
  z-index: 4;
`;

export default Wrapper;

export {
  Footer,
  Page
}
