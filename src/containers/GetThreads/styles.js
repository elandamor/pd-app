import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

const Thread = styled.li`
  a {
    align-items: flex-start;
    border-bottom: thin solid #e8e8e8;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    min-height: 48px;
    position: relative;
  }

  .c-recipient {
    align-items: flex-start;
    display: flex;
    width: 100%;

    .c-user {
      flex: 1;
      overflow: hidden;
    }

    .c-stats {
      margin-top: 6px;
      padding: 4px 12px 8px;
      position: relative;

      span {
        display: block;
      }

      .c-date {
        color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
        font-size: 13px;
        font-weight: 500;
      }

      .c-status {
        bottom: 4px;
        color: ${(props) => props.theme.isDark ? '#ffffff' : '#000000'};
        font-size: 12px;
        position: absolute;
        right: 8px;
      }
    }
  }

  .message {
    align-items: flex-end;
    color: ${(props) => props.theme.isDark ? '#fff' : '#242424'};
    display: flex;
    font-size: 12px;
    margin: -4px 0 8px;
    padding-left: 48px;
    width: 100%;

    p {
      margin: 0 8px 0 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    &.-incoming {
      .c-status {
        background-color: #004f9c;
        display: none;
      }

      &.-unread {
        .c-status {
          border-radius: 24px;
          color: #ffffff;
          display: inline-table;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          min-width: 20px;
          padding: 0 8px;
          text-align: center;
        }
      }
    }

    &.-outgoing {
      .c-status {
        .a-tick,
        .a-tick > svg {
          height: 16px;
          width: 16px;
        }

        .a-tick--single {
          display: inline-block;
        }
      }

      &.-read {
        .a-tick--double {
          display: inline-block;
          margin-left: -10px;
        }
      }

      .c-tick-wrapper {
        display: flex;
      }
    }
  }

  .c-status {
    height: 20px;
    margin-right: 12px;
    margin-top: -8px;
  }

  .c-tick-wrapper {
    align-items: flex-end;
    display: none;
    height: 20px;

    .a-tick {
      display: none;
    }
  }
`;

export default Wrapper;

export {
  Thread,
};
