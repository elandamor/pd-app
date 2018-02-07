import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fafafa;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transform: translateY(100%);
  transition: transform .195s ease-out;
  width: 100%;
  will-change: transform;
  z-index: 6;

  &.entering {
    transform: translateY(100%);
  }

  &.entered {
    transform: none;
  }

  &.-minimized {
    transform: translateY(100%);
    z-index: 4;

    .c-btn--minimize {
      background-color: #242424;
      color: #fff;
      transform: translateX(100vw) translateX(-64px) translateY(-120px);
    }
  }

  header {
    border-bottom: thin solid #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8;
    height: 64px;
    z-index: 2;
  }

  .c-btn--minimize {
    border-radius: 96px;
    height: 48px;
    padding: 0;
    position: absolute;
    left: 0;
    margin: 8px;
    top: 0;
    transition: all .195s ease-out;
    width: 48px;

    svg {
      fill: currentColor;
    }
  }

  .c-btn--close {
    height: 64px;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 64px;

    .icon, svg {
      height: 20px;
      width: 20px;
    }
  }

  section {
    height: calc(100% - 120px);
    overflow-y: auto;
    padding: 8px;
    z-index: 0;
  }

  footer {
    bottom: 0;
    box-shadow: 0 -1px 5px #e8e8e8;
    height: 56px;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
`;

export default Wrapper;
