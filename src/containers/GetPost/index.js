import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Textarea from '../../components/Textarea';
// Loadables
import Comments from '../../components/Comments/Loadable';
import Post from '../../components/Post/Loadable';
// Styled-Components
import Wrapper from './styles';

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
    modalOverlay.className = '-active';
  }

  componentWillUnmount = () => {
    modalOverlay.className = '-inactive';
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { className, history } = this.props;
    const { commentText } = this.state;

    return (
      <Wrapper
        className={`c-post-viewer${className ? className : ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.CLOSE} />
          </Button>
        </header>
        <section className="c-section--main">
          <Post {...this.props} />
          <h3>Comments</h3>
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

GetPost.propTypes = {
  className: PropTypes.string,
};

export default GetPost;
