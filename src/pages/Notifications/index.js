/**
 * Notifications
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Notifications extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Notifications</title>
        </Helmet>
      </Wrapper>
    );
  }
}

Notifications.propTypes = {

};

export default Notifications;
