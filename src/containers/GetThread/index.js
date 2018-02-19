import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
// import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import noScroll from 'no-scroll';
// Components
// import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
// import Image from '../../components/Image';
// import Like from '../../components/Button/Like';
// import Modal from '../../components/Modal';
import Textarea from '../../components/Textarea';
// Styled-Components
import Wrapper from './styles';

hashtag(linkify);
mention(linkify);

const modalOverlay = document.getElementById('c-modal-overlay');

// Mock authenticatedUser data.
const authenticatedUser = {
  id: Math.round(Math.random() * 1000000),
  avatar: '',
  name: 'Thandolwethu Mpofu',
  username: 'elandamor',
};

const recipient = {
  id: Math.round(Math.random() * 1000000),
  avatar: '',
  name: 'Mercedes-Benz',
  username: 'mercedesbenz',
};

const data = [
  {
    id: Math.round(Math.random() * 1000000),
    body: 'This is a test message with a @mention and #hashtag.',
    postDate: '45 minutes ago',
    sentBy: recipient,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: '#Phantom is indeed the original. Simply sublime!!!',
    postDate: '30 minutes ago',
    sentBy: authenticatedUser,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: '@mercedebenz, Thank you for the feedback.',
    postDate: '15 minutes ago',
    sentBy: authenticatedUser,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
    postDate: '7 minutes ago',
    sentBy: recipient,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: 'This is a test message with a @mention and #hashtag.',
    postDate: '5 minutes ago',
    sentBy: recipient,
  },
];

class GetThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: '',
    };
  }

  componentWillMount = () => {
    noScroll.on();
    modalOverlay.className = '-active';
  }

  componentWillUnmount = () => {
    modalOverlay.className = '-inactive';
    noScroll.off();
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { className, history } = this.props;
    const { messageText } = this.state;

    let messages = null;

    messages = data && data && data.length > 0
      && data.map((message) => {
        const isSending = message.id < 0;
        const messageType = message.sentBy
          && message.sentBy.id === authenticatedUser.id
          ? '-outgoing' : '-incoming';

        return (
          <div className="msg" key={message.id}>
            <div
              className={`message ${messageType}${isSending ? ' is-sending' : ''}`}
            >
              {message.body}
            </div>
          </div>
        );
      });

    return (
      <Wrapper
        className={`c-thread${className || ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            aria-label="Go back to feed"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.BACK} />
          </Button>
        </header>
        <section className="c-section--main">
          {messages}
        </section>
        <footer className="c-footer--main">
          <div className="c-message-wrapper">
            <div className="c-add-message">
              <Textarea
                id="message-input"
                name="messageText"
                onChange={this.handleChange}
                rows={1}
                maxRows={6}
                value={messageText}
                srlabel="Type your message here"
              />
              {
                messageText.length > 0 && (
                  <div className="c-actions">
                    <Button
                      className="c-btn c-btn--toggle"
                      aria-label="Toggle"
                    >
                      Leave a message
                    </Button>
                    <Button
                      className="c-btn c-btn--send"
                      aria-label="Send"
                    />
                  </div>
                )
              }
            </div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

GetThread.defaultProps = {
  className: '',
};

GetThread.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default GetThread;
