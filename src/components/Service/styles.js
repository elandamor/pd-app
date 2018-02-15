import styled from 'styled-components';
// Components
import Card from '../../components/Card';

const Wrapper = styled(Card)`
  background-color: #ffffff;
  border: thin solid #ededed;
  border-radius: 4px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, .05);
  margin-bottom: 8px;
  position: relative;

  .c-service {
    &__header,
    &__footer {
      height: 48px;
    }

    &__main {
      min-height: 80px;
    }
  }

  .c-service__header {
    align-items: center;
    display: flex;

    .c-user {
      flex: 1;
    }
  }

  .c-service__main {
    position: relative;

    figure {
      border: none;
      border-radius: 0;
      display: block;
      margin: 0;

      .c-image-wrapper {
        background-color: #e8e8e8;
        padding-bottom: calc(100% / (16/10));
        padding-bottom: 100%;

        img {
          left: 0;
          position: absolute;
          top: 0;
        }
      }
    }

    figcaption {
      ${'' /* background-color: ${(props) => props.theme.palette.cardBackground}; */}
      color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
      font-size: 14px;
      font-weight: 500;
      line-height: 1.5;
      padding: 4px 12px;
      position: relative;
      z-index: 1;

      [href] {
        color: ${(props) => props.theme.isDark ? '#78bcff' : '#003569'};
        color: ${(props) => props.theme.isDark ? '#78bcff' : '#004f9c'};
      }

      &.fontSize,
      .fontSize {
        &-18 {
          font-size: 18px;
          font-weight: 400;
        }
      }

      .name {
        color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
        line-height: 1.25;
        margin: 4px 0;
      }

      .price {
        display: none;
      }
    }
  }

  .c-service__footer {
    display: flex;
    justify-content: space-between;

    .c-date {
      color: #242424;
      font-size: 11px;
      padding: 8px 12px 12px;
    }

    .c-actions {
      display: flex;
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
`;

export default Wrapper;
