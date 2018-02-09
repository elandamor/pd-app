import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fafafa;
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  transform: translateY(64px);
  ${'' /* transition: opacity .195s ease-out, transform .195s ease-out; */}
  width: 100%;
  will-change: opacity, transform;
  z-index: 6;

  &.entering {
    opacity: 0;
    transform: translateY(64px);
  }

  &.entered {
    opacity: 1;
    pointer-events: auto;
    transform: none;
  }

  header {
    background-color: #ffffff;
    border-bottom: thin solid #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8;
    height: 64px;
    z-index: 2;
  }

  section {
    height: calc(100% - 120px);
    overflow-y: auto;
    padding: 8px;
    z-index: 0;
  }

  footer {
    background-color: #ffffff;
    bottom: 0;
    box-shadow: 0 -1px 5px #e8e8e8;
    height: 56px;
    position: absolute;
    width: 100%;
    z-index: 1;
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
`;

export default Wrapper;
