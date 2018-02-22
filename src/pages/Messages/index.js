/**
 * Messages
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import Button from '../../components/Button';
import ComposeMessage from '../../components/Button/ComposeMessage';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Portal from '../../components/Portal';
import User from '../../components/User';
// Containers
import Contacts from '../../containers/GetContacts/Loadable';
import Thread from '../../containers/GetThread/Loadable';
import Threads from '../../containers/GetThreads/Loadable';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frequentContacts: [],
      hasFrequentContacts: false,
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

  updateFrequentContacts = (contacts) => {
    if (contacts && contacts.length > 0) {
      this.setState({
        frequentContacts: contacts,
        hasFrequentContacts: true,
      });
    }
  }

  render() {
    const { match } = this.props;
    const { frequentContacts, hasFrequentContacts, isContactsOpen } = this.state;

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
            <Threads onLoad={this.updateFrequentContacts} {...this.props} />
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
              <h2 className="a-heading--sub">Frequently contacted</h2>
              <div className="c-frequent-contacts">
                {
                  hasFrequentContacts
                  ? (
                    frequentContacts.map((contact) => (
                      <Link
                        key={contact.id}
                        className="c-contact"
                        to={{
                          pathname: `${match.url}/${contact.threadId}`,
                        }}
                        onClick={this.closeContacts}
                      >
                        <User
                          avatar={contact.avatar}
                          name={contact.name}
                          username={contact.username}
                        />
                      </Link>
                    ))
                  ) : (
                    <p>Your frequent contacts will appear here.</p>
                  )
                }
              </div>
              {
                isContactsOpen && (
                  <Contacts onSelect={(contact) => console.log({ contact })} />
                )
              }
            </section>
          </aside>
        </aside>
        <Switch>
          <Route
            path={`${match.url}/:threadId`}
            render={(props) => (
              <Portal>
                <Thread {...props} />
              </Portal>
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

Messages.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Messages;
