import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    position: relative;
    width: 100%;

    .c-header {
      align-items: center;
      background-color: #ffffff;
      border-bottom: thin solid #e8e8e8;
      display: flex;
      height: 48px;
      position: sticky;
      top: 0;
      z-index: 1;

      .c-search {
        flex: 1;
        padding-left: 8px;

        &__inner {
          background-color: #e8e8e8;
          border-radius: 4px;
          height: 32px;
        }
      }
    }

    .c-section {
      -webkit-overflow-scrolling: touch;
      flex: 1;
      overflow-y: auto;
      z-index: 0;
    }
  }

  .c-contacts-wrapper {
    background-color: #fafafa;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    z-index: 2;

    &.-open {
      transform: none;
    }

    .c-btn--close {
      height: 48px;
      padding: 0;
      width: 48px;

      .icon, svg {
        height: 20px;
        width: 20px;
      }
    }

    .a-heading--sub {
      background-color: #e8e8e8;
      font-size: 13px;
      font-weight: 400;
      line-height: 32px;
      margin: 0;
      padding-left: 12px;
    }
  }

  .c-frequent-contacts {
    .c-contact {
      border-bottom: thin solid #e8e8e8;
      display: block;

      &:last-child {
        border: none;
      }
    }
  }
`;

export default Wrapper;
