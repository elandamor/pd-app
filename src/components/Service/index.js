/**
 * Service.js
 * @type {Component} Presentational
 */

import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import numeral from 'numeral';
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

class Service extends Component {
  onLinkable = ({ evt, pathname }) => {
    const { history } = this.props;
    const target = evt.target;

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
      serviceId,
      serviceDate,
      serviceName,
      servicePrice,
      serviceDescription,
      serviceImages,
      perCharge,
      postedBy
    } = {
      serviceId: Math.round(Math.random() * 1000000),
      serviceDate: '5 days ago',
      serviceName: 'Express Service by Mercedes-Benz',
      servicePrice: 'RTBA',
      serviceDescription: "It's fast, thorough, and even more convenient. It's Express Service, and it's here for you. Along with an oil change, tire-rotation, and battery check, Express service includes a 37-point inspection that covers the major components of your Mercedes-Benz. All in about an hour or less.",
      serviceImages: [
        {
          id: Math.round(Math.random() * 1000000),
          url: 'https://scontent-jnb1-1.cdninstagram.com/vp/2dec6590a6e141a1b064f6afb1affaa8/5B0FC8D5/t51.2885-15/e35/23823756_1754831771489837_6167951221811314688_n.jpg',
        }, {
          id: Math.round(Math.random() * 1000000),
          url: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/06/01/15/rolls-royce-8.png',
        }
      ],
      perCharge: 'hr',
      postedBy: {
        id: 3,
        avatar: '',
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      }
    };

    const inFeed = true;

    const hasImages = serviceImages && serviceImages.length > 0;

    return (
      <Wrapper className="c-service">
        <header className="c-service__header">
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
        <section className="c-service__main">
          <div
            aria-label={`Open ${postedBy.name}'s service`}
            onClick={(evt) => this.onLinkable({
              evt,
              pathname: inFeed
                ? `/f/service/${serviceId}`
                : `/@${postedBy.username}/services/${serviceId}`,
            })}
          >
            <figure>
              {
                hasImages && (
                  <div
                    className="c-image-wrapper"
                  >
                    <Image
                      src={serviceImages[0].url}
                      alt={serviceDescription}
                      width="417"
                      height="229"
                    />
                  </div>
                )
              }
              <figcaption>
                <div>
                  <h2 className="name">{serviceName}</h2>
                  <div className="c-metadata">
                    <h3 className="price">
                      {
                        servicePrice > 0 ? (
                          <Fragment>
                            <span className="currency">$</span>
                            {numeral(servicePrice).format()}
                            /{perCharge}
                          </Fragment>
                        ) : (
                          servicePrice
                        )
                      }
                    </h3>
                  </div>
                </div>
                <Linkify
                  className={serviceDescription.length < 140 ? 'fontSize-18' : ''}
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

                </Linkify>
              </figcaption>
            </figure>
          </div>
        </section>
        <footer className="c-service__footer">
          <time
            className="c-date"
            dateTime={serviceDate}
          >
            {serviceDate}
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
                  aria-checked={true}
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

Service.propTypes = {

};

export default Service;
