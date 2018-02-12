import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 0;
  position: relative;
  width: 14.3rem;

  .label {
    font-size: 14px;
    color: #76766f;
    top: 0;
    left: 0;
    position: absolute;
  }

  [role="button"] {
    font-size: 16px;
    padding-top: 24px;

    &[aria-expanded="true"] .icon > svg {
      transform: rotate(180deg);
    }

    &[aria-expanded="true"] ~ .c-dropdown__list {
      transform: none;
      visibility: visible;
    }

    .c-icon-wrapper {
      bottom: 10px;
      position: absolute;
      right: 0;
    }

    .icon,
    svg {
      height: 10px;
      width: 18px;
    }
  }

  .c-dropdown__list {
    visibility:hidden;
    transform:scale(0);
    transform-origin: top left;
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 4;
    background: #fff;
    min-width: 100%;
    transition: .1s;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    border-radius: 0 0 2px 2px;
    max-height: 28.5rem;
    overflow-y: auto;
    padding: 0;
  }

  [role="option"] {
    color: #333;
    padding: .8rem 1rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      background-color: #dbdbdb;
    }

    &[aria-selected="true"] {
      background-color: #000000;
      color: #ffffff;
    }
  }
`;

export default Wrapper;
