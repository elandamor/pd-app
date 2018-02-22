import styled from 'styled-components';

const Wrapper = styled.div`
  .a-heading--sub {
    margin-left: 12px;
  }

  .c-section {
    &--discover {
      .c-inner {
        height: 140px;
        overflow: hidden;
      }
    }
  }
`;

const Suggestions = styled.ul`
  -webkit-overflow-scrolling: touch;
  align-items: center;
  display: flex;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 0 24px 0;
  position: relative;

  .vr {
    border-radius: 4px;
    height: 100px;
    list-style-type: none;
    margin-left: -12px;
    min-width: 12px;
    width: 12px;
  }
`;

const Suggestion = styled.li`
  background-color: #ffffff;
  border: thin solid #e8e8e8;
  border-radius: 4px;
  list-style-type: none;
  margin: 0 12px 0 0;
  min-width: 120px;
  width: 100px;

  &:first-child {
    margin-left: 12px;
  }

  &:last-of-type {
    margin-right: 0;
  }

  .c-user {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;


    .c-avatar {
      height: 48px;
      margin-bottom: 0;
      width: 48px;
    }

    .c-info {
      text-align: center;
      overflow: hidden;
      width: 100%;
    }
  }

  .c-bttn__follow {
    border-radius: 0;
    border: none;
    border-top: thin solid #e8e8e8;
    height: 32px;
    margin: 4px 0 0;
    width: 100%;
  }
`;

export default Wrapper;

export {
  Suggestions,
  Suggestion,
};
