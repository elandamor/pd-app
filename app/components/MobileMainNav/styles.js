import styled from 'styled-components';

const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  height: 56px;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  z-index: 4;

  @media (min-width: 1024px) {
    display: none;
  }

  [href] {
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
  }

  a {
    align-items: center;
    color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    display: flex;
    flex-grow: 1;
    height: 56px;
    justify-content: space-around;
    ${'' /* opacity: 0; */}
    position: relative;
    width: 20vw;

    &.-active {
      &:after {
        background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
        bottom: 0;
        content: '';
        height: 4px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 24px;
      }

      .icon > svg {
        fill: currentColor;
      }
    }
  }

  .c-btn--add-wrapper {
    background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    height: 56px;
    margin: 0;
    padding: 0;
    width: 20vw;
  }

  .c-btn--add {
    background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    border: thin solid ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    height: 56px;
    padding: 0;
    width: 20vw;

    &.-open {
      svg {
        transform: rotate(45deg);
      }
    }

    .icon,
    svg {
      width: 24px;
    }

    svg {
      fill: ${(props) => props.theme.isDark ? '#000' : '#fff'};
      stroke: ${(props) => props.theme.isDark ? '#000' : '#fff'};
      transition: transform .195s ease-out;
    }
  }

  .icon, svg {
    height: 22px;
    width: 22px;
  }

  svg {
    fill: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
    vertical-align: inherit;
  }

  .bttn-home,
  .bttn-explore,
  .bttn-messages,
  .bttn-notifications {
    .icon {
      svg {
        opacity: 1;
        fill: none;
        stroke: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
      }
    }

    &.is-active {
      &:after {
        background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
        bottom: 0;
        content: '';
        height: 4px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 24px;
      }

      .icon > svg {
        fill: currentColor;
      }
    }
  }

  .bttn-explore {
    .icon,
    svg {
      height: 22px;
      width: 22px;
    }

    .icon > svg {
      fill: currentColor;
      stroke: none;
    }

    &.is-active {
      .icon {
        height: 24px;
        width: 24px;
      }

      .icon > svg {
        height: 24px;
        width: 24px;
        padding: 1px;
        stroke: currentColor;
      }
    }
  }

  .bttn-messages {
    .icon,
    svg {
      height: 25px;
      width: 25px;
    }

    &.new-message {
      .icon {
        &:after {
          background-color: #ee4956;
          border-radius: 500rem;
          content: '';
          position: absolute;
          height: 14px;
          width: 14px;
          top: -4px;
          right: -8px;
        }
      }
    }
  }

  .bttn-notifications {
    .icon,
    svg {
      height: 21px;
      width: 21px;
    }
  }
`;

export default Wrapper;
