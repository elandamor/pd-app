import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
// Components
import Avatar from '../Avatar';
// Styled-Components
import Wrapper, { Review } from './styles';

hashtag(linkify);
mention(linkify);


const Reviews = ({ data }) => {
  let reviews = null;

  const hasReviews = data && data.length > 0;

  if (hasReviews) {
    reviews = data.map((review) => {
      const { reviewedBy } = review;
      const postDate = review.postDate;

      return (
        <Review className="c-review" key={review.id}>
          <div className="c-review__header">
            <Link
              className="c-link"
              title={`${reviewedBy.name}(@${reviewedBy.username})`}
              to={{
                pathname: `/@${reviewedBy.username}`,
                state: reviewedBy,
              }}
            >
              <Avatar
                src=""
              />
              <div className="c-info">
                <div className="a-name">{reviewedBy.name}</div>
                <div className="a-username">
                  @{reviewedBy.username}
                  <span className="a-separator">•</span>
                  <span className="a-date">{postDate}</span>
                </div>
              </div>
            </Link>
          </div>
          <Linkify
            className="c-review__body"
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
            {review.body}
          </Linkify>
        </Review>
      );
    });
  }

  return (
    <Wrapper className="l-reviews">{reviews}</Wrapper>
  );
};

Reviews.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Reviews;
