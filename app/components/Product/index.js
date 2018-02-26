/**
 * Product.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import numeral from 'numeral';
import { unique } from 'shorthash';
// Components
import Collect from '../Button/Collect';
import ComposeMessage from '../Button/ComposeMessage';
import Image from '../Image';
import Like from '../Button/Like';
import Messager from '../Messager/Loadable';
import Modal from '../Modal/Loadable';
import User from '../User';
// Containers
import AddToCollection from '../../containers/AddToCollection/Loadable';
// Styled-Components
import Wrapper from './styles';

hashtag(linkify);
mention(linkify);

class Product extends Component {
  onLinkable = ({ evt, pathname }) => {
    const { history } = this.props;
    const { target } = evt;

    let route = pathname;

    const isHashtag = target.classList.contains('c-hashtag');
    const isMention = target.classList.contains('c-mention');
    const isLinkified = isHashtag || isMention;

    if (isLinkified) {
      route = `${evt.target.pathname}${evt.target.search}`;
    }

    history.push(route);
  }

  render() {
    const {
      productId,
      productDate,
      productName,
      productPrice,
      productDescription,
      productImages,
      postedBy,
    } = {
      productId: unique(Math.round(Math.random() * 1000000).toString()),
      productDate: '2 days ago',
      productName: 'Rolls-Royce Wraith Black Badge',
      productPrice: '400000',
      productDescription: 'With intensified power and presence, this is the ultimate incarnation of defiance. #BlackBadge',
      productImages: [
        {
          id: Math.round(Math.random() * 1000000),
          url: 'https://scontent-jnb1-1.cdninstagram.com/vp/2dec6590a6e141a1b064f6afb1affaa8/5B0FC8D5/t51.2885-15/e35/23823756_1754831771489837_6167951221811314688_n.jpg',
        }, {
          id: Math.round(Math.random() * 1000000),
          url: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/06/01/15/rolls-royce-8.png',
        },
      ],
      postedBy: {
        id: 1,
        avatar: '',
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycemotorcars',
      },
    };

    const inFeed = true;

    const hasImages = productImages && productImages.length > 0;

    return (
      <Wrapper className="c-product">
        <header className="c-product__header">
          <User
            avatar={postedBy.avatar}
            name={postedBy.name}
            username={postedBy.username}
          />
          <Modal
            trigger={(
              <ComposeMessage />
            )}
            unmountOnExit
          >
            <Messager />
          </Modal>
        </header>
        <section className="c-product__main">
          <div
            aria-label={`Open ${postedBy.name}'s product`}
            onClick={(evt) => this.onLinkable({
              evt,
              pathname: inFeed
                ? `/f/product/${productId}`
                : `/@${postedBy.username}/products/${productId}`,
            })}
            role="presentation"
          >
            <figure>
              {
                hasImages && (
                  <div
                    className="c-image-wrapper"
                  >
                    <Image
                      src={productImages[0].url}
                      alt={productDescription}
                      width="417"
                      height="229"
                    />
                  </div>
                )
              }
              <figcaption>
                <div>
                  <h2 className="name">{productName}</h2>
                  <div className="c-metadata">
                    <h3 className="price">
                      <span className="currency">$</span>
                      {numeral(productPrice).format()}
                    </h3>
                  </div>
                </div>
                <Linkify
                  className={productDescription.length < 140 ? 'fontSize-18' : ''}
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
                />
              </figcaption>
            </figure>
          </div>
        </section>
        <footer className="c-product__footer">
          <time
            className="c-date"
            dateTime={productDate}
          >
            {productDate}
          </time>
          <div className="c-actions">
            <Like
              aria-label="Like"
              aria-checked={false}
              data-count={0}
              data-themed={false}
            />
            <Modal
              trigger={(
                <Collect
                  aria-label="Collect"
                  aria-checked
                  data-themed={false}
                />
              )}
              unmountOnExit
            >
              <AddToCollection />
            </Modal>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

Product.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Product;
