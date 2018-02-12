import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 0;
  position: relative;
  width: 14.3rem;

  .label {
    font-size: .8rem;
    color: #76766f;
    z-index: 2;
    top: .5rem;
    left: .5rem;
    position: absolute;
  }

  [role="button"] {
    cursor: pointer;
    padding: 1.4rem 2.5rem .2em .5rem;
    line-height: 2rem;
    position: relative;
    transition: all .2s;
    z-index: 5;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px solid #e8e8e8;
    color: #e90052;
    min-height: 40px;

    &[aria-expanded="true"] ~ .c-dropdown__list {
      transform: none;
      visibility: visible;
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
      background-color: #e90052;
      color: #fff;
    }
  }
`;

export default Wrapper;
