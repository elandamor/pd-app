import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8px;

  .c-feed {
    article:last-child {
      margin-bottom: 48px;
    }
  }
`;

const Filter = styled.div`
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
        display: inline-block;
        display: none;
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
  Filter,
}
