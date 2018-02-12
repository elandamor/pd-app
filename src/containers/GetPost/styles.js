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
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    width: 100%;
    z-index: 1;
  }

  /*
   * Comments
   */

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
      margin: 6px 0 4px;

      textarea {
        border: thin solid #ededed;
        font-size: 14px;
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
        margin: 8px 6px;
        min-width: 64px;
      }
    }
  }
`;

export default Wrapper;
