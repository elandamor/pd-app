/**
 *
 * GetThreads.js
 *
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
// Components
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import User from '../../components/User';
// Styles
import Wrapper, { Thread } from './styles';

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
        unread: true,
        createdAt: '16:48',
      },
      participants: [
        {
          id: Math.round(Math.random() * 1000000),
          name: 'Mercedes-Benz',
          username: 'mercedesbenz',
        },
        authenticatedUser,
      ],
      subject: '',
      unReadMessages: {
        count: 0,
      },
    },
  },
  {
    node: {
      id: Math.round(Math.random() * 1000000),
      lastMessage: {
        body: 'This is a test message from Rolls-Royce Motor Cars',
        from: {
          id: Math.round(Math.random() * 1000000),
        },
        unread: true,
        createdAt: 'Yesterday',
      },
      participants: [
        {
          id: Math.round(Math.random() * 1000000),
          avatar: '',
          name: 'Rolls-Royce Motor Cars',
          username: 'rollsroycecars',
        },
        authenticatedUser,
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
        const { node } = thread;

        const { lastMessage, participants, unReadMessages } = node;

        if (participants.length < 1) return null;

        const recipient = participants && participants.length > 0
          && participants.find(
            (participant) => participant.id !== authenticatedUser.id,
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
              {
                lastMessage.from.id !== authenticatedUser.id
                && unReadMessages.count > 0 && (
                  <span
                    className="c-status"
                  >
                    { unReadMessages.count }
                  </span>
                )
              }
              {
                lastMessage.from.id === authenticatedUser.id && (
                  <span
                    className="c-status"
                  >
                    <span className="c-tick-wrapper">
                      <Icon
                        className="a-tick a-tick--single"
                        icon={ICONS.TICK}
                      />
                      <Icon
                        className="a-tick a-tick--double"
                        icon={ICONS.TICK}
                      />
                    </span>
                  </span>
                )
              }
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
  loading: true,
};

GetThreads.propTypes = {
  loading: PropTypes.bool,
  // threads: PropTypes.object,
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
