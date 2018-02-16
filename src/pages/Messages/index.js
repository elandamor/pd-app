/**
 * Messages
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Components
import ComposeMessage from '../../components/Button/ComposeMessage';
// Containers
import Threads from '../../containers/GetThreads';
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
        <aside className="c-threads">
          <header>
            <div className="c-search">
              <div className="c-search__inner"></div>
            </div>
            <ComposeMessage />
          </header>
          <section>
            <Threads />
          </section>
        </aside>
      </Wrapper>
    );
  }
}

Messages.propTypes = {

};

export default Messages;
