import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  right: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 6;

  &.is-open {
    pointer-events: auto;

    .c-overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .c-inner,
    .c-avatar {
      transform: none;
    }
  }

  .c-bttn-toggle {
    height: 64px;
    padding: 0;
    pointer-events: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 64px;
    z-index: 1;
  }

  .c-overlay {
    background-color: rgba(0,0,0,.8);
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
  }

  .c-inner {
    ${'' /* background-color: ${(props) => props.theme.palette.cardBackground}; */}
    background-color: #ffffff;
    ${'' /* border: thin solid ${(props) => props.theme.palette.cardBorderColor}; */}
    border: thin solid #ededed;
    transform: translateX(100%);
    z-index: 1;

    align-items: stretch;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .c-avatar {
    background-color: #e8e8e8;
    transform: translateX(-64px);
  }

  .c-acc__header {
    background-color: #ffffff;
    ${'' /* border-bottom: thin solid ${(props) => props.theme.palette.cardBorderColor}; */}
    border-bottom: thin solid #e8e8e8;
    box-shadow: 0 1px 5px #e8e8e8;
    display: flex;
    height: 64px;
    min-height: 64px;
    width: 100%;
    z-index: 2;

    .c-user {
      width: calc(100% - 64px);
    }

    .c-avatar {
      height: 40px;
      margin: 12px;
      width: 40px;
    }

    .c-info {
      .name {
        font-size: 15px;
      }

      .username {
        font-size: 11px;
      }
    }
  }

  .c-bttn-close {
    height: 64px;
    padding: 0;
    width: 64px;

    .icon, svg {
      height: 20px;
      width: 20px;
    }

    .icon > svg {
      fill: ${(props) => props.theme.isDark ? '#8F9095' : '#000'};
      vertical-align: inherit;
    }
  }

  .c-acc__content {
    height: 100%;
    overflow-y: auto;
    z-index: 0;
  }

  ul {
    margin: 0;
    padding: 8px 0;
  }

  .list-item > a {
    color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
    display: inline-block;
    font-size: 14px;
    line-height: 1.4;
    padding: 10px 32px 10px 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    white-space: nowrap;
    width: 100%;

    &.-active {
      font-weight: 600;

      &:after {
        background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
        bottom: 0;
        content: '';
        height: 4px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        width: 48px;
      }
    }
  }

  .list-item--separator {
    background-color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
    height: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: .05;
    padding-bottom: 0;
    padding-top: 0;
  }

  .c-acc__footer {
    background-color: #ffffff;
    box-shadow: 0 -1px 5px #e8e8e8;
    width: 100%;
    z-index: 1;
  }

  .c-btn {
    &--logout {
      background-color: #242424;
      border-radius: 4px;
      color: ${(props) => props.theme.isDark ? '#000' : '#fff'};
      flex: 1;
      font-size: 14px;
      height: 40px;
      line-height: 1.4;
      margin: 8px;
      min-width: 96px;
    }
  }

  @media (min-width: 648px) {
    height: 88px;
    position: relative;
    width: 88px;

    .c-bttn-toggle {
      height: 88px;
      width: 88px;
    }

    .c-inner {
      border-radius: 4px;
      height: 320px;
      position: absolute;
      right: 12px;
      top: 12px;
      width: 320px;
    }

    .c-avatar {
      height: 40px;
      width: 40px;
    }
  }
`;

export default Wrapper;

export {};
