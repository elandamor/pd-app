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

  /*
   * Globals
   */

  [href] {
    color: ${(props) => props.theme.isDark ? '#78bcff' : '#003569'};
    color: ${(props) => props.theme.isDark ? '#78bcff' : '#004f9c'};
  }

  .c-header--main {
    align-items: center;
    background-color: #ffffff;
    border-bottom: thin solid #e8e8e8;
    display: flex;
    height: 64px;
    min-height: 64px;
    padding-left: 48px;
    width: 100%;
    z-index: 2;

    .c-product-info {
      align-items: center;
      display: flex;
      overflow: hidden;
      padding: 0 8px 0 0;
      width: 100%;

      a {
        align-items: center;
        display: flex;
        overflow: hidden;
        padding: 0 8px 0 0;
        width: 100%;
      }

      .c-info {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 0 auto;
        overflow: hidden;
        padding: 6px 0;
        text-decoration: none;

        span {
          display: block;
          font-size: 11px;
          color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
          letter-spacing: 0.01rem;
          line-height: 1.45;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &.a-product-name {
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.01rem;
            margin-bottom: -2px;
          }

          &.a-owner {
            color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
            font-weight: 400;
          }
        }
      }
    }
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

  .c-section--main {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 104px;
    z-index: 0;
  }

  .c-image-wrapper {
    background-color: #e8e8e8;
    padding-bottom: 100%;
    position: relative;

    img {
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .c-product-info {
    padding: 12px;

    .a-name {
      margin: 0;
    }

    .c-rating {
      align-items: center;
      display: flex;
      margin-top: 12px;

      .icon,
      svg {
        height: 16px;
        width: 16px;
      }
    }

    .c-actions {
      display: flex;
      justify-content: flex-end;
      margin: 0 -12px 0 0;
    }

    .c-btn--like {
      .icon,
      svg {
        height: 20px;
        width: 18px;
      }
    }

    .c-btn--collect {
      .icon,
      svg {
        height: 18px;
        width: 14px;
      }
    }
  }

  .a-description {
    line-height: 1.5;
    margin: 0 12px 12px;
  }

  .c-purchase-info {
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    bottom: 0;
    display: flex;
    justify-content: stretch;
    left: 0;
    min-height: 56px;
    position: fixed;
    width: 100%;
    z-index: 2;

    .price {
      flex: 1;
      margin: 0;
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
      align-items: center;
      display: flex;
    }

    .c-quantity-selector {
      border: 2px solid #242424;
      border-radius: 4px;
      height: 32px;
      margin: 8px 4px 8px 8px;
      width: 32px;

      .c-btn {
        color: #242424;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        padding: 0;
        text-align: center;

        .icon {
          opacity: 0;
        }
      }

      .c-dropdown__list {
        display: flex;
        flex-direction: column-reverse;
        top: auto;
        bottom: 30px;

        [role="option"] {
          text-align: center;
        }
      }
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
  }

  /*
   * Reviews
   */

  .a-heading--sub {
    padding-left: 12px;
  }
`;

/*
 * Customizer
 */

const Customiser = styled.div`
  bottom: 56px;
  height: 56px;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;

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
