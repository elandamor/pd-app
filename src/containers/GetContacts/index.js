/**
 *
 * GetContacts.js
 *
 */

import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { compose } from 'react-apollo';
import PropTypes from 'prop-types';
// Components
// import Icon from '../../components/Icon';
// import { ICONS } from '../../components/Icon/constants';
import User from '../../components/User';
// Styles
import Wrapper, { Contact } from './styles';

// Mock authenticatedUser data.
const authenticatedUser = {
  id: Math.round(Math.random() * 1000000),
  avatar: '',
  name: 'Thandolwethu Mpofu',
  username: 'elandamor',
};

// Mock "contacts" data.
const data = [
  {
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Jaguar',
      username: 'jaguar',
    },
  }, { // Intentionally placed object "out-of-order" to test sorting function.
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Aston Martin',
      username: 'arstonmartin',
    },
  }, {
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Land Rover',
      username: 'landrover',
    },
  }, {
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Mercedes-Benz',
      username: 'mercedesbenz',
    },
  }, {
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Pagani',
      username: 'pagani',
    },
  }, {
    node: {
      id: Math.round(Math.random() * 1000000),
      avatar: '',
      name: 'Rolls-Royce Motor Cars',
      username: 'rollsroycecars',
    },
  },
].sort((a, b) => {
  const A = a.node.name.toLowerCase();
  const B = b.node.name.toLowerCase();

  if (A < B) {
    return -1;
  }

  if (A > B) {
    return 1;
  }

  return 0;
});

class GetContacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps({ loading }) {
    const appContainer = document.querySelector('.app-container');

    if (!loading) {
      appContainer.classList.remove('is-loading');
    }
  }

  render() {
    let contacts = null;

    if (authenticatedUser) {
      contacts = data && data.length > 0 && data.map((contact, idx) => {
        const { node } = contact;

        const currentNavigator = node.name.charAt(0).toUpperCase();
        let prevNavigator;

        if (idx > 0) {
          prevNavigator = data[idx - 1].node.name.charAt(0).toUpperCase();
        }

        return (
          <Fragment
            key={node.id}
          >
            {
              currentNavigator !== prevNavigator && (
                <h2 className="a-heading--sub">{currentNavigator}</h2>
              )
            }
            <Contact
              onClick={() => this.props.onSelect(node)}
            >
              <div className="c-contact">
                <User
                  avatar={node.avatar}
                  name={node.name}
                  username={node.username}
                />
              </div>
            </Contact>
          </Fragment>
        );
      });
    }

    return (
      <Wrapper className="c-contacts">
        { contacts }
      </Wrapper>
    );
  }
}

GetContacts.defaultProps = {
  loading: true,
};

GetContacts.propTypes = {
  loading: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  // contacts: PropTypes.object,
};

// const mapContactsToProps = ({ data }) => {
//   if (!data.contacts) {
//     return {
//       loading: data.loading,
//     };
//   }

//   const { contacts: { edges } } = data;

//   return {
//     loading: data.loading,
//     contacts: {
//       data: edges,
//     },
//   };
// };

export default compose(
  // graphql(getContactsGQL, {
  //   options: ({ userId }) => ({
  //     variables: {
  //       userId,
  //     },
  //     fetchPolicy: 'cache-and-network',
  //   }),
  //   props: mapContactsToProps,
  // })
)(GetContacts);
