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

    .c-post-info {
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

          &.a-post-description {
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
    background-color: #ffffff;
    height: 100%;
    overflow-y: auto;
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

  .a-description {
    line-height: 1.5;
    margin: 12px 12px 12px;
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

  .c-footer--main {
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    width: 100%;
    z-index: 1;
  }

  /*
   * Comments
   */

  .a-heading--sub {
    padding-left: 12px;
  }

  .c-add-comment {
    align-items: flex-start;
    bottom: 0;
    display: flex;
    position: sticky;
    min-height: 48px;

    .c-avatar {
      background-color: #adadad;
    }

    .c-textarea__wrapper {
      flex: 1;
      margin: 6px 6px 4px 0;

      textarea {
        border: thin solid #ededed;
        color: #242424;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        min-height: 32px;
        padding: 6px 8px;
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

export default Wrapper;
