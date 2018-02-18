/**
 * Messages
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// Components
import ComposeMessage from '../../components/Button/ComposeMessage';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// Containers
import Contacts from '../../containers/GetContacts/Loadable';
import Threads from '../../containers/GetThreads';
// Styled-Components
import Wrapper from './styles';
import Button from '../../components/Button';

// eslint-disable-next-line react/prefer-stateless-function
class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isContactsOpen: false,
    };
  }

  closeContacts = () => {
    this.setState({
      isContactsOpen: false,
    });
  }

  openContacts = () => {
    this.setState({
      isContactsOpen: true,
    });
  }

  render() {
    const { isContactsOpen } = this.state;

    return (
      <Wrapper>
        <Helmet>
          <title>Messages</title>
        </Helmet>
        <aside className="c-threads">
          <header className="c-header">
            <div className="c-search">
              <div className="c-search__inner" />
            </div>
            <ComposeMessage
              onClick={this.openContacts}
            />
          </header>
          <section className="c-section">
            <Threads />
          </section>
          <aside
            className={`c-contacts-wrapper${isContactsOpen ? ' -open' : ''}`}
          >
            <header className="c-header">
              <div className="c-search">
                <div className="c-search__inner" />
              </div>
              <Button
                className="c-btn--close"
                aria-label="Go back to feed"
                onClick={this.closeContacts}
              >
                <Icon icon={ICONS.CLOSE} />
              </Button>
            </header>
            <section className="c-section">
              {
                isContactsOpen && (
                  <Contacts onSelect={(contact) => console.log({ contact })} />
                )
              }
            </section>
          </aside>
        </aside>
        <main />
      </Wrapper>
    );
  }
}

Messages.propTypes = {

};

export default Messages;
