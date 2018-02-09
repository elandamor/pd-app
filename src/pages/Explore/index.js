/**
 * Explore
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Explore extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Explore</title>
        </Helmet>
      </Wrapper>
    );
  }
}

Explore.propTypes = {

};

export default Explore;
