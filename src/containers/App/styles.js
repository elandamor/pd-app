import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .c-app-header {
    border-bottom: thin solid #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8;
    height: 64px;
    z-index: 5;

    @media (min-width: 1024px) {
      height: 88px;
    }
  }
`;

const Main = styled.main`
  background-color: #fafafa;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  padding: 8px;

  article:last-child {
    margin-bottom: 48px;
  }
`;

const Footer = styled.footer`
  box-shadow: 0 -1px 5px #e8e8e8;
  height: 56px;
  z-index: 4;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Filter = styled.div`
  bottom: 56px;
  height: 56px;
  position: fixed;
  width: 100%;
  z-index: 4;

  button {
    height: 56px;
    width: 100%;

    .placeholder {
      align-items: center;
      background-color: #242424;
      border-radius: 56px;
      color: #fff;
      display: flex;
      height: 32px;
      margin: 0 auto;
      padding: 0 12px;

      .icon,
      svg {
        height: 18px;
        width: 18px;
      }

      svg {
        fill: currentColor;
      }

      span {
        display: inline-block;
        display: none;
        margin-left: 8px;
        opacity: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    bottom: 0;
    position: relative;
  }
`;

export default Wrapper;

export {
  Filter,
  Footer,
  Main
}
