import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
import mention from 'linkifyjs/plugins/mention';
import numeral from 'numeral';
import noScroll from 'no-scroll';
// Components
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import ComposeMessage from '../../components/Button/ComposeMessage';
import Collect from '../../components/Button/Collect';
import Dropdown from '../../components/Dropdown';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import Image from '../../components/Image';
import Like from '../../components/Button/Like';
import Modal from '../../components/Modal';
import Reviews from '../../components/Reviews';
// import User from '../../components/User';
// Styled-Components
import Wrapper, { Customiser } from './styles';

hashtag(linkify);
mention(linkify);

const modalOverlay = document.getElementById('c-modal-overlay');

const reviews = {
  data: [
    {
      id: Math.round(Math.random() * 1000000),
      body: 'This is a test review with a @mention and #hashtag.',
      postDate: '45 minutes ago',
      reviewedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: '#Phantom is indeed the original. Simply sublime!!!',
      postDate: '30 minutes ago',
      reviewedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Thandolwethu Mpofu',
        username: 'elandamor',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: '@mercedebenz, Thank you for the feedback.',
      postDate: '15 minutes ago',
      reviewedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycecars',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: 'The undeniable allure of refined luxury - #RangeRover. Search "Range Rover test drive" to experience first class travel at its finest. #RangeRover #PHEV #HybridElectricVehicle #HybridSUV #Carsofinstagram #Technology #Luxury #LuxurySUV',
      postDate: '7 minutes ago',
      reviewedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Land Rover',
        username: 'landrover',
      },
    },
    {
      id: Math.round(Math.random() * 1000000),
      body: 'This is a test review with a @mention and #hashtag.',
      postDate: '5 minutes ago',
      reviewedBy: {
        id: Math.round(Math.random() * 1000000),
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      },
    },
  ],
};

const quantities = [...Array(10).keys()].map((key, idx) => ({
  name: idx + 1,
  value: idx + 1,
}));

class GetService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
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

  handleQuantity = (quantity) => {
    this.setState({
      quantity: quantity.value,
    });
  }

  render() {
    const { className, history } = this.props;
    const { quantity } = this.state;

    const {
      // serviceId,
      // serviceDate,
      serviceName,
      servicePrice,
      serviceDescription,
      serviceImages,
      perCharge,
      postedBy,
    } = {
      serviceId: Math.round(Math.random() * 1000000),
      serviceDate: '2 days ago',
      serviceName: 'Express Service by Mercedes-Benz',
      servicePrice: 'FREE',
      serviceDescription: "It's fast, thorough, and even more convenient. It's Express Service, and it's here for you. Along with an oil change, tire-rotation, and battery check, Express service includes a 37-point inspection that covers the major components of your Mercedes-Benz. All in about an hour or less.",
      serviceImages: [
        {
          id: Math.round(Math.random() * 1000000),
          url: 'https://scontent-jnb1-1.cdninstagram.com/vp/2dec6590a6e141a1b064f6afb1affaa8/5B0FC8D5/t51.2885-15/e35/23823756_1754831771489837_6167951221811314688_n.jpg',
        }, {
          id: Math.round(Math.random() * 1000000),
          url: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/06/01/15/rolls-royce-8.png',
        },
      ],
      perCharge: 'hr',
      postedBy: {
        id: 3,
        avatar: '',
        name: 'Mercedes-Benz',
        username: 'mercedesbenz',
      },
    };

    const hasImages = serviceImages && serviceImages.length > 0;

    return (
      <Wrapper
        className={`c-service-viewer${className || ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            aria-label="Go back to feed"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.BACK} />
          </Button>
          <div className="c-service-info">
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
                <span className="a-service-name">
                  {serviceName}
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
                  src={serviceImages[0].url}
                  alt={serviceDescription}
                  width="417"
                  height="229"
                />
              )
            }
          </div>
          <div className="c-service-info">
            <h2 className="a-name">{serviceName}</h2>
            <div className="c-metadata" />
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
                <div />
              </Modal>
            </div>
          </div>
          <div className="c-purchase-info">
            <h2 className="price">
              {
                parseInt(servicePrice, 10) > 0 ? (
                  <Fragment>
                    <span className="currency">$</span>
                    {numeral(servicePrice * quantity).format()}
                    <small>* at {servicePrice}/{perCharge}</small>
                  </Fragment>
                ) : (
                  servicePrice
                )
              }
            </h2>
            <div className="c-actions">
              <Dropdown
                className="c-quantity-selector"
                id="c-quantity-selector"
                name="quantity"
                onChange={this.handleQuantity}
                options={quantities}
                selected={quantities[0]}
                srLabel="Choose the quantity of services to buy"
              />
              <Button
                className="c-btn c-btn--buy"
                aria-label="Buy"
              />
            </div>
          </div>
          <Customiser>
            <Modal
              trigger={(
                <Button
                  aria-label="Filter"
                >
                  <span className="placeholder">
                    <Icon icon={ICONS.FILTER} />
                    <span>Customize</span>
                  </span>
                </Button>
              )}
            >
              <div />
            </Modal>
          </Customiser>
          <Linkify
            className={`a-description${serviceDescription.length < 140 ? ' fontSize-18' : ''}`}
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
            {serviceDescription}
          </Linkify>
          <h3 className="a-heading--sub">Reviews</h3>
          <Reviews data={reviews.data} />
        </section>
      </Wrapper>
    );
  }
}

GetService.defaultProps = {
  className: '',
};

GetService.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default GetService;
