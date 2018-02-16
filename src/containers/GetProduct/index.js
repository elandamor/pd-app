import React, { Component } from 'react';
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
import User from '../../components/User';
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

const quantities = [...Array(10).keys()].map((key, idx) => {
  return {
    name: idx + 1,
    value: idx + 1,
  }
});

class GetProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  handleQuantity = (quantity) => {
    this.setState({
      quantity: quantity.value,
    });
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
    const { className, history } = this.props;
    const { quantity } = this.state;

    const {
      // productId,
      // productDate,
      productName,
      productPrice,
      productDescription,
      productImages,
      postedBy
    } = {
      productId: Math.round(Math.random() * 1000000),
      productDate: '2 days ago',
      productName: 'Rolls-Royce Wraith Black Badge',
      productPrice: parseInt('400000', 10),
      productDescription: 'With intensified power and presence, this is the ultimate incarnation of defiance. #BlackBadge',
      productImages: [
        {
          id: Math.round(Math.random() * 1000000),
          url: 'https://scontent-jnb1-1.cdninstagram.com/vp/2dec6590a6e141a1b064f6afb1affaa8/5B0FC8D5/t51.2885-15/e35/23823756_1754831771489837_6167951221811314688_n.jpg',
        }, {
          id: Math.round(Math.random() * 1000000),
          url: 'https://www.standard.co.uk/s3fs-public/thumbnails/image/2017/06/01/15/rolls-royce-8.png',
        }
      ],
      postedBy: {
        id: 1,
        avatar: '',
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycemotorcars',
      }
    };

    const hasImages = productImages && productImages.length > 0;

    return (
      <Wrapper
        className={`c-product-viewer${className ? className : ''}`}
      >
        <header className="c-header--main">
          <Button
            className="c-btn--close"
            onClick={() => history.goBack()}
          >
            <Icon icon={ICONS.BACK} />
          </Button>
          <div className="c-product-info">
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
                <span className="a-product-name">
                  {productName}
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
          <div className="c-image-wrapper" role="figure">
            {
              hasImages && (
                <Image
                  src={productImages[0].url}
                  alt={productDescription}
                  width="417"
                  height="229"
                />
              )
            }
          </div>
          <div className="c-product-info">
            <h2 className="a-name">{productName}</h2>
            <div className="c-metadata"></div>
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
                <div />
              </Modal>
            </div>
          </div>
          <div className="c-purchase-info">
            <h2 className="price">
              <span className="currency">$</span>
              {numeral(productPrice * quantity).format()}
            </h2>
            <div className="c-actions">
              <Dropdown
                className="c-quantity-selector"
                id="c-quantity-selector"
                name="quantity"
                onChange={this.handleQuantity}
                options={quantities}
                selected={quantities[0]}
                srLabel="Choose the quantity of products to buy"
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
            className={`a-description${productDescription.length < 140 ? ' fontSize-18' : ''}`}
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
            {productDescription}
          </Linkify>
          <h3 className="a-heading--sub">Reviews</h3>
          <Reviews data={reviews.data} />
        </section>
      </Wrapper>
    );
  }
}

GetProduct.propTypes = {
  className: PropTypes.string,
};

export default GetProduct;
