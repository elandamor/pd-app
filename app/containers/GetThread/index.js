import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
// import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import noScroll from 'no-scroll';
// Components
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Message from '../../components/Message';
// import Modal from '../../components/Modal';
import Textarea from '../../components/Textarea';
// Styled-Components
import Wrapper, { Messages, Paginator } from './styles';

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
    body: 'This is a test message...',
    postDate: '5 minutes ago',
    sentBy: recipient,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
    postDate: '7 minutes ago',
    sentBy: recipient,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: '@mercedebenz, Thank you for the feedback.',
    postDate: '15 minutes ago',
    sentBy: authenticatedUser,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: '#Phantom is indeed the original. Simply sublime!!!',
    postDate: '30 minutes ago',
    sentBy: authenticatedUser,
  },
  {
    id: Math.round(Math.random() * 1000000),
    body: 'This is a test message with a @mention and #hashtag.',
    postDate: '45 minutes ago',
    sentBy: recipient,
    attachment: {
      exists: true,
      source: 'https://scontent-jnb1-1.cdninstagram.com/vp/92ddbcb853231379b3e1e8c3b11581f6/5B15E392/t51.2885-15/s1080x1080/e15/fr/27581837_353608078449033_9197914472906227712_n.jpg',
      type: 'image',
    },
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

  sendMessage = () => {
    const { messageText } = this.state;

    console.log('Sending...', messageText);
  }

  render() {
    const { className, history } = this.props;
    const { messageText } = this.state;

    let messages = null;

    messages = data && data && data.length > 0
      && data.map((message) => {
        const { attachment } = message;

        // const isSending = message.id < 0;
        const messageType = message.sentBy
          && message.sentBy.id === authenticatedUser.id
          ? '-outgoing' : '-incoming';

        return (
          <Message
            key={message.id}
            className="msg"
            direction={messageType}
            attachment={attachment}
            body={message.body}
          />
        );
      });

    return (
      <Wrapper
        className={`c-thread${className || ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            aria-label="Go back to threads"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.BACK} />
          </Button>
          <div className="c-recipient">
            <Link
              to={{
                pathname: `/@${recipient.username}`,
              }}
            >
              <Avatar
                src={recipient.avatar}
              />
              <div className="c-info">
                <span className="a-recipient">
                  {recipient.name}
                </span>
                <span className="a-status">
                  Online
                </span>
              </div>
            </Link>
          </div>
          <Button
            className="c-btn--menu"
            aria-label="Open thread menu"
            onClick={() => console.log('Opening menu...')}
          >
            <Icon icon={ICONS.MORE_VERT} />
          </Button>
        </header>
        <section className="c-section--main">
          <div className="c-inner">
            <Messages>
              {messages}
            </Messages>
            <Paginator />
          </div>
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
                      onClick={this.sendMessage}
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
