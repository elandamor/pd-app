/**
 * Explore
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// Components
import Follow from '../../components/Button/Follow';
import User from '../../components/User';
// Styled-Components
import Wrapper, { Suggestions, Suggestion } from './styles';

const suggestions = [
  {
    id: Math.round(Math.random() * 1000000),
    avatar: '',
    name: 'Mercedes-Benz',
    username: 'mercedesbenz',
  }, {
    id: Math.round(Math.random() * 1000000),
    avatar: '',
    name: 'Land Rover',
    username: 'landrover',
  }, {
    id: Math.round(Math.random() * 1000000),
    avatar: '',
    name: 'Rolls-Royce Motor Cars',
    username: 'rollsroycecars',
  }, {
    id: Math.round(Math.random() * 1000000),
    avatar: '',
    name: 'Pagani',
    username: 'paganiautomobili',
  }, {
    id: Math.round(Math.random() * 1000000),
    avatar: '',
    name: 'Jaguar',
    username: 'jaguar',
  }
];

// eslint-disable-next-line react/prefer-stateless-function
class Explore extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Explore</title>
        </Helmet>
        <section
          className="c-section c-section--discover"
        >
          <h2 className="a-heading--sub">Discover</h2>
          <div className="c-inner">
            <Suggestions>
              {
                suggestions.map((user) => {
                  return (
                    <Suggestion key={user.id}>
                      <Link
                        to={`/@${user.username}`}
                      >
                        <User
                          avatar={user.avatar}
                          name={user.name}
                          username={user.username}
                        />
                      </Link>
                      <Follow />
                    </Suggestion>
                  )
                })
              }
              <li className="vr" />
            </Suggestions>
          </div>
        </section>
        <h2 className="a-heading--sub">Explore</h2>
      </Wrapper>
    );
  }
}

Explore.propTypes = {

};

export default Explore;
