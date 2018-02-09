/**
 * Service.js
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

class Service extends Component {
  render() {
    const {
      serviceId,
      serviceDate,
      serviceDescription,
      serviceedBy
    } = {
      serviceId: Math.round(Math.random() * 1000000),
      serviceDate: 'about 3 hours ago',
      serviceDescription: 'Enhanced with cutting-edge technology, #RollsRoycePhantom is the epitome of contemporary luxury.',
      serviceedBy: {
        id: 1,
        avatar: '',
        name: 'Rolls-Royce Motor Cars',
        username: 'rollsroycemotorcars',
      }
    };

    return (
      <Wrapper className="c-service">
        <header className="c-service__header">
          <User
            avatar={serviceedBy.avatar}
            name={serviceedBy.name}
            username={serviceedBy.username}
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
          <Link
            to={{
              pathname: `/f/service/${serviceId}`
            }}
          >
            <figure>
              <figcaption
                className={serviceDescription.length < 140 ? 'fontSize-18' : ''}
              >
                {serviceDescription}
              </figcaption>
            </figure>
          </Link>
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
                  aria-checked={false}
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
