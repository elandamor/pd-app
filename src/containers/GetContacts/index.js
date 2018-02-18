/**
 *
 * GetContacts.js
 *
 */

import React from 'react';
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
];

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
      contacts = data && data.length > 0 && data.map((contact) => {
        const { node } = contact;

        return (
          <Contact
            key={node.id}
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
