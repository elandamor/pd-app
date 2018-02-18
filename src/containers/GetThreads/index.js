/**
 *
 * GetThreads.js
 *
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Components
import User from '../../components/User';
// Styles
import styles from './styles';

const Wrapper = styled.ul`
  ${styles}
`;

const Thread = styled.li`
  align-items: flex-start;
  border-bottom: thin solid #e8e8e8;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-height: 48px;
  position: relative;

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
      padding: 4px 10px 8px;
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
    overflow: hidden;
    padding-left: 48px;
    width: 100%;

    p {
      margin: 0 4px 0 0;
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
        margin-top: -10px;
        padding-right: 12px;

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
        background-color: green;
      }

      &.-read {
        .c-status {
          &:before {
            background-color: green;
            content: '';
            display: block;
            height: 10px;
            width: 10px;
            position: absolute;
            right: 22px;
          }
        }

      }
    }
  }

  .c-status {
    height: 10px;
    margin-right: 8px;
    width: 10px;
  }
`;

// Mock authenticatedUser data.
const authenticatedUser = {
  id: Math.round(Math.random() * 1000000),
  avatar: '',
  name: 'Thandolwethu Mpofu',
  username: 'elandamor',
};

// Mock "threads" data.
const data = [
  {
    node: {
      id: Math.round(Math.random() * 1000000),
      lastMessage: {
        body: 'This is a test message to Mercedes-Benz',
        from: {
          id: authenticatedUser.id,
        },
        unread: false,
        createdAt: '16:48'
      },
      participants: [
        {
          id: Math.round(Math.random() * 1000000),
          name: 'Mercedes-Benz',
          username: 'mercedesbenz',
        },
        authenticatedUser
      ],
      subject: '',
      unReadMessages: {
        count: 0,
      },
    },
  }, {
    node: {
      id: Math.round(Math.random() * 1000000),
      lastMessage: {
        body: 'This is a test message from Rolls-Royce Motor Cars',
        from : {
          id: Math.round(Math.random() * 1000000),
        },
        unread: true,
        createdAt: 'Yesterday'
      },
      participants: [
        {
          id: Math.round(Math.random() * 1000000),
          avatar: '',
          name: 'Rolls-Royce Motor Cars',
          username: 'rollsroycecars',
        },
        authenticatedUser
      ],
      subject: '',
      unReadMessages: {
        count: 10,
      },
    },
  },
];

class GetThreads extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps({ loading }) {
    const appContainer = document.querySelector('.app-container');

    if (!loading) {
      appContainer.classList.remove('is-loading');
    }
  }

  render() {
    let threads = null;

    if (authenticatedUser) {
      threads = data && data.length > 0 && data.map((thread) => {
        const node = thread.node;

        const { lastMessage, participants, unReadMessages } = node;

        if (participants.length < 1) return null;

        const recipient = participants && participants.length > 0
          && participants.find((participant) =>
            participant.id !== authenticatedUser.id
          );

        return (
          <Thread key={node.id}>
            <div className="c-recipient">
              <User
                avatar={recipient.avatar}
                name={recipient.name}
                username={recipient.username}
              />
              <div className="c-stats">
                <span className="c-date">{lastMessage.createdAt}</span>
              </div>
            </div>
            <div
              className={`message
                ${
                  lastMessage.from.id === authenticatedUser.id
                  ? ' -outgoing'
                  : ' -incoming'
                }
                ${
                  lastMessage.unread
                  ? ' -unread'
                  : ' -read'
                }
              `}
            >
              <p>{lastMessage.body}</p>
              <span
                className="c-status"
              >
                {
                  unReadMessages.count > 0 && (
                    unReadMessages.count
                  )
                }
              </span>
            </div>
          </Thread>
        );
      });
    }

    return (
      <Wrapper className="l-threads">
        { threads }
      </Wrapper>
    );
  }
}

GetThreads.defaultProps = {

};

GetThreads.propTypes = {
  threads: PropTypes.object,
};

// const mapThreadsToProps = ({ data }) => {
//   if (!data.threads) {
//     return {
//       loading: data.loading,
//     };
//   }

//   const { threads: { edges } } = data;

//   return {
//     loading: data.loading,
//     threads: {
//       data: edges,
//     },
//   };
// };

export default compose(
  // graphql(getThreadsGQL, {
  //   options: ({ userId }) => ({
  //     variables: {
  //       userId,
  //     },
  //     fetchPolicy: 'cache-and-network',
  //   }),
  //   props: mapThreadsToProps,
  // })
)(GetThreads);
