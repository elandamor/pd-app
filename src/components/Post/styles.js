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

  .c-post {
    &__header,
    &__footer {
      height: 48px;
    }

    &__main {
      display: none;
      min-height: 80px;
    }
  }

  .c-post__header {
    align-items: center;
    display: flex;

    .c-user {
      flex: 1;
      visibility: hidden;
    }
  }

  .c-post__footer {
    display: flex;
    display: none;
    justify-content: space-between;

    .c-date {
      color: #242424;
      font-size: 12px;
      padding: 12px;
      visibility: hidden;
    }

    .c-btn--like {
      visibility: hidden;

      .icon,
      svg {
        height: 22px;
        width: 20px;
      }
    }
  }
`;

export default Wrapper;
