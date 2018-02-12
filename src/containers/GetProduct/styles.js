import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: stretch;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 6;

  header {
    background-color: #ffffff;
    border-bottom: thin solid #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8;
    height: 64px;
    min-height: 64px;
    width: 100%;
    z-index: 2;
  }

  .c-btn--close {
    height: 64px;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 64px;

    .icon, svg {
      height: 20px;
      width: 20px;
    }
  }

  section {
    height: 100%;
    overflow-y: auto;
    padding: 8px;
    z-index: 0;
  }

  footer {
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    display: flex;
    justify-content: stretch;
    min-height: 56px;
    width: 100%;
    z-index: 1;
  }

  .price {
    flex: 1;
    font-size: 22px;
    font-weight: 900;
    opacity: 0;
    padding: 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;

    small {
      color: #424242;
      display: block;
      font-size: 12px;
      font-weight: normal;
    }
  }

  .c-actions {
    align-self: flex-end;
  }

  .c-btn {
    &--buy {
      background-color: #242424;
      border-radius: 4px;
      height: 40px;
      margin: 8px;
      min-width: 96px;
    }
  }
`;


const Customiser = styled.div`
  bottom: 56px;
  height: 56px;
  left: 0;
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
        display: none;
        font-size: 14px;
        margin-left: 8px;
      }
    }
  }

  @media (min-width: 1024px) {
    bottom: auto;
    position: sticky;
    top: 88px;

    button {
      .placeholder {
        height: 48px;
        padding: 0 24px;

        .icon,
        svg {
          height: 20px;
          width: 20px;
        }

        ${'' /* span {
          display: inline-block;
          font-size: 16px;
          letter-spacing: 0.01rem;
        } */}
      }
    }
  }
`;

export default Wrapper;

export {
  Customiser,
};
