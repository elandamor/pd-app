/**
 * Message.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
// Components
import Image from '../../components/Image';
// Styles
import Wrapper from './styles';

hashtag(linkify);
mention(linkify);

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    const { attachment, body, direction, ...rest } = this.props;

    return (
      <Wrapper {...rest}>
        <div className={`message ${direction}`}>
          {
            attachment && attachment.exists
            && attachment.type === 'image' && (
              <Image
                src={attachment.source}
                alt={body}
              />
            )
          }
          <Linkify
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
            {body}
          </Linkify>
        </div>
      </Wrapper>
    );
  }
}

Message.defaultProps = {
  attachment: {},
};

Message.propTypes = {
  attachment: PropTypes.object,
  body: PropTypes.object.isRequired,
  direction: PropTypes.object.isRequired,
};

export default Message;
