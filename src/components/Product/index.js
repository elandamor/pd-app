/**
 * Product.js
 * @type {Component} Presentational
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// Components
import Collect from '../Button/Collect';
import ComposeMessage from '../Button/ComposeMessage';
import Like from '../Button/Like';
import Messager from '../Messager/Loadable';
import Modal from '../Modal/Loadable';
import User from '../User';
// Containers
import AddToCollection from '../../containers/AddToCollection/Loadable';
// Styled-Components
import Wrapper from './styles';

class Product extends Component {
  render() {
    const {
      productId,
      productDate,
      productDescription,
      productedBy
    } = {
      productId: Math.round(Math.random() * 1000000),
      productDate: 'about 3 hours ago',
      productDescription: 'Enhanced with cutting-edge technology, #RollsRoycePhantom is the epitome of contemporary luxury.',
      productedBy: {
        id: 1,
        avatar: '',
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycemotorcars',
      }
    };

    return (
      <Wrapper className="c-product">
        <header className="c-product__header">
          <User
            avatar={productedBy.avatar}
            name={productedBy.name}
            username={productedBy.username}
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
          <Link
            to={{
              pathname: `/f/product/${productId}`
            }}
          >
            <figure>
              <figcaption
                className={productDescription.length < 140 ? 'fontSize-18' : ''}
              >
                {productDescription}
              </figcaption>
            </figure>
          </Link>
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
              aria-checked={false}
              data-count={0}
              data-themed={false}
            />
            <Modal
              trigger={(
                <Collect
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

Product.propTypes = {

};

export default Product;
