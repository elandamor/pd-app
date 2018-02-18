import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import noScroll from 'no-scroll';
// Components
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import ComposeMessage from '../../components/Button/ComposeMessage';
import Comments from '../../components/Comments/Loadable';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Image from '../../components/Image';
// import Like from '../../components/Button/Like';
import Modal from '../../components/Modal';
import Textarea from '../../components/Textarea';
// Styled-Components
import Wrapper from './styles';

hashtag(linkify);
mention(linkify);

const modalOverlay = document.getElementById('c-modal-overlay');

const comments = {
  data: [
    {
      id: Math.round(Math.random() * 1000000),
      body: 'This is a test comment with a @mention and #hashtag.',
      postDate: '45 minutes ago',
      postedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: '#Phantom is indeed the original. Simply sublime!!!',
      postDate: '30 minutes ago',
      postedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Thandolwethu Mpofu',
        username: 'elandamor',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: '@mercedebenz, Thank you for the feedback.',
      postDate: '15 minutes ago',
      postedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycecars',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
      postDate: '7 minutes ago',
      postedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Land Rover',
        username: 'landrover',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: 'This is a test comment with a @mention and #hashtag.',
      postDate: '5 minutes ago',
      postedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      },
    },
  ],
};

class GetPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
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
    const { commentText } = this.state;

    const {
      // postId,
      // postDate,
      postDescription,
      postImages,
      postedBy,
    } = {
      postId: Math.round(Math.random() * 1000000),
      postDate: 'about 3 hours ago',
      postDescription: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
      postImages: [{
        id: Math.round(Math.random() * 1000000),
        url: 'https://scontent-jnb1-1.cdninstagram.com/vp/92ddbcb853231379b3e1e8c3b11581f6/5B15E392/t51.2885-15/s1080x1080/e15/fr/27581837_353608078449033_9197914472906227712_n.jpg',
      }],
      postedBy: {
        id: 1,
        avatar: '',
        name: 'Land Rover',
        username: 'landrover',
      },
    };

    const hasImages = postImages && postImages.length > 0;

    return (
      <Wrapper
        className={`c-post-viewer${className || ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            aria-label="Go back to feed"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.BACK} />
          </Button>
          <div className="c-post-info">
            <Link
              to={{
                pathname: `/@${postedBy.username}`,
              }}
            >
              <Avatar
                src={postedBy.avatar}
              />
              <div className="c-info">
                <span className="a-owner">
                  {postedBy.name}
                </span>
                <span className="a-post-description">
                  {postDescription}
                </span>
              </div>
            </Link>
            <Modal
              trigger={(
                <ComposeMessage />
              )}
              unmountOnExit
            >
              <div />
            </Modal>
          </div>
        </header>
        <section className="c-section--main">
          <div className="c-image-wrapper">
            {
              hasImages && (
                <Image
                  src={postImages[0].url}
                  alt={postDescription}
                  width="417"
                  height="229"
                />
              )
            }
          </div>
          <Linkify
            className={`a-description${postDescription.length < 140 ? ' fontSize-18' : ''}`}
            tagName="p"
            options={{
              attributes: {
                onClick: (evt) => evt.preventDefault(),
                rel: 'nofollow me noopener noreferrer',
              },
              className: {
                hashtag: 'c-hashtag',
                url: 'c-url',
              },
              formatHref: {
                hashtag: (val) => `/search?q=${val.substr(1)}&src=hashtag_click`,
              },
              nl2br: true,
            }}
          >
            {postDescription}
          </Linkify>
          <h3 className="a-heading--sub">Comments</h3>
          <Comments data={comments.data} />
        </section>
        <footer className="c-footer--main">
          <div className="c-comment-wrapper">
            <div className="c-add-comment">
              <Avatar src="" />
              <Textarea
                id="comment-input"
                name="commentText"
                placeholder="Leave a comment"
                onChange={this.handleChange}
                rows={1}
                maxRows={6}
                value={commentText}
                srlabel="Type your comment here"
              />
              {
                commentText.length > 0 && (
                  <div className="c-actions">
                    <Button
                      className="c-btn c-btn--toggle"
                      aria-label="Toggle"
                    >
                      Leave a comment
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

GetPost.defaultProps = {
  className: '',
};

GetPost.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default GetPost;
