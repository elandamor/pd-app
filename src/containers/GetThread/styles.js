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
    position: relative;
    width: 100%;
    z-index: 2;

    .c-recipient {
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

          &.a-recipient {
            font-size: 13px;
            font-weight: 900;
            letter-spacing: 0.01rem;
          }

          &.a-status {
            color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
            font-weight: 400;
          }
        }
      }
    }

    .c-btn--menu {
      width: 48px;

      .icon,
      .icon > svg {
        height: 22px;
        width: 22px;
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
    flex: 1 1 0;
    order: 2;
    position: relative;
    z-index: 0;

    .c-inner {
      -webkit-overflow-scrolling: touch;
      box-sizing: border-box;
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      position: absolute;
      top: 0;
      width: 100%;
    }

  }

  .c-actions {
    display: flex;
    justify-content: flex-end;
  }

  .c-btn--like {
    .icon,
    svg {
      height: 20px;
      width: 18px;
    }
  }

  .c-footer--main {
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    flex: none;
    order: 3;
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .a-heading--sub {
    padding-left: 12px;
  }

  .c-add-message {
    align-items: flex-start;
    bottom: 0;
    display: flex;
    position: sticky;
    min-height: 48px;

    .c-textarea__wrapper {
      flex: 1;
      margin: 6px 6px 4px;

      textarea {
        border: thin solid #e8e8e;
        border-radius: 4px;
        color: #242424;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        min-height: 32px;
        padding: 6px 8px;
        resize: none;
      }
    }

    .c-actions {
      align-self: flex-end;
      height: 48px;
    }

    .c-btn {
      &--toggle {
        left: 0;
        padding-left: 56px;
        position: absolute;
        justify-content: flex-start;
        visibility: hidden;
        width: 100%;
      }

      &--send {
        background-color: #242424;
        border-radius: 4px;
        height: 32px;
        margin: 8px 6px 8px 2px;
        min-width: 64px;
      }
    }
  }
`;

const Messages = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column-reverse;

  .msg {
    margin-bottom: 8px;

    &:after {
      content: '';
      display: table;
      clear: both;
    }

    .message {
      &.-outgoing {
        float: right;
      }
    }

    .message.-outgoing:after {
      content: '';
      display: table;
      clear: both;
    }
  }
`;

const Paginator = styled.div`
  min-height: 8px;
`;

export default Wrapper;

export {
  Messages,
  Paginator,
};
