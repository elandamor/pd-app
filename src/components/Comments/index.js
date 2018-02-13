import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
// Components
import Avatar from '../Avatar';
// import User from '../User';
// Styled-Components
import Wrapper, { Comment } from './styles';

hashtag(linkify);
mention(linkify);

const Comments = ({ data }) => {
  let comments = null;

  const hasComments = data && data.length > 0;

  if (hasComments) {
    comments = data.map((comment) => {
      const postedBy = comment.postedBy;
      const postDate = comment.postDate;

      return (
        <Comment className="c-comment" key={comment.id}>
          <div className="c-comment__header">
            <Link
              className="c-link"
              title={`${postedBy.name}(@${postedBy.username})`}
              to={{
                pathname: `/@${postedBy.username}`,
                state: postedBy,
              }}
            >
              <Avatar
                src=""
              />
              <div className="c-info">
                <div className="a-name">{postedBy.name}</div>
                <div className="a-username">
                  @{postedBy.username}
                  <span className="a-separator">•</span>
                  <span className="a-date">{postDate}</span>
                </div>
              </div>
            </Link>
          </div>
          <Linkify
            className="c-comment__body"
            tagName="p"
            options={{
              attributes: {
                onClick: (evt) => {
                  evt.preventDefault();

                  this.handleLinkify(evt);
                },
                rel: 'nofollow me noopener noreferrer',
              },
              className: {
                hashtag: 'c-hashtag',
                mention: 'c-mention',
                url: 'c-url',
              },
              formatHref: {
                hashtag: (val) => `/search?q=${val.substr(1)}&src=hashtag_click`,
                mention: (val) => `/@${val.substr(1)}?src=mention_click`,
              },
              nl2br: true,
            }}
          >
            {comment.body}
          </Linkify>
        </Comment>
      );
    });
  }

  return (
    <Wrapper className="l-comments">{comments}</Wrapper>
  );
};

Comments.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Comments;
