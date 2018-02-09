/**
 * Messages
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Messages extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Messages</title>
        </Helmet>
      </Wrapper>
    );
  }
}

Messages.propTypes = {

};

export default Messages;
