/**
 * Masthead
 * @type {Component} Presentational
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as linkify from 'linkifyjs';
import Linkify from 'linkifyjs/react';
import hashtag from 'linkifyjs/plugins/hashtag';
// Components
// import Image from '../Image';
import Edit from '../../components/Button/Edit';
// Containers
// import AddEndorsement from '../../containers/AddEndorsement';
// import AddFollowee from '../../containers/AddFollowee';
// import AddReview from '../../containers/AddReview';
// Styles
// import Wrapper from './styles';

hashtag(linkify);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  &:before, &:after {
    background-color: red;
    content: '';
    display: none;
    height: 1px;
    opacity: .5;
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  &:after {
    height: 12px;
    top: 414px;
  }

  &:before {
    top: 376px;
  }

  [href] {
    color: ${(props) => props.theme.isDark ? '#78bcff' : '#003569'};
    color: ${(props) => props.theme.isDark ? '#78bcff' : '#004f9c'};
  }

  .slide-enter {
    transform: translateX(100%);

    &-active {
      transform: translateX(0%);
      transition: transform 225ms cubic-bezier(0.0, 0.0, 0.2, 1);
    }
  }

  .slide-leave {
    transform: translateX(0%);

    &-active {
      transform: translateX(100%);
      transition: transform 195ms cubic-bezier(0.4, 0.0, 0.6, 1);
    }
  }
`;

const Banner = styled.div`
  background-color: ${(props) => props.theme.palette.cardBorderColor};
  height: calc((64px * 1.618) * 2.5);
  overflow: hidden;
  position: relative;
  width: 100vw;

  .lazy-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    visibility: hidden;
    width: 100%;
  }

  .lazy-image-loaded {
    animation-duration: 3s;
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

const Details = styled.div`
  background-color: ${(props) => props.theme.palette.cardBackground};
  display: flex;
  flex-direction: column;
  position: relative;

  .c-bttn__edit,
  .c-bttn__follow {
    position: absolute;
    right: 0;
    top: -38px;

    &.is-following {
      background-color: #02b875;
    }
  }

  header {
    display: flex;
    position: relative;
  }

  section {
    padding: 0 12px 8px;
  }
`;

const Avatar = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.palette.cardBorderColor};
  border-radius: 500rem;
  cursor: pointer;
  display: flex;
  height: 64px;
  justify-content: center;
  margin: 0 8px;
  transform: translateY(-50%);
  width: 64px;

  .lazy-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    visibility: hidden;
    width: 100%;
  }

  .lazy-image-loaded {
    animation-duration: 3s;
    animation-name: ${fadeIn};
    visibility: visible;
  }
`;

const Image = styled.img`
  border: thin solid ${(props) => props.theme.palette.cardBorderColor};
  border-radius: 500rem;
  display: block;
  height: 64px;
  text-indent: -9999px;
  width: 64px;
`;

const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-right: 8px;
  overflow-x: hidden;
  padding-top: 4px;
  position: relative;
  text-decoration: none;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Name = styled.span`
  color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
  font-size: 20px;
  font-weight: 900;
`;

const Username = styled.span`
  color: ${(props) => props.theme.isDark ? '#bbb' : '#555'};
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.01rem;
  margin-top: -4px;
`;

const Trade = styled.span`
  color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.01rem;
  margin-top: 4px;
  min-height: 17px;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01rem;
  margin: 8px 0;
  padding: 0;
`;

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;

  &.c-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 auto;
    overflow: hidden;
    padding: 10px 0;
    text-decoration: none;

    .name {
      background-color: ${(props) => props.theme.palette.cardBorderColor};
      border-radius: 24px;
      height: 18px;
      margin-bottom: 6px;
      width: 80%;
    }

    .username {
      background-color: ${(props) => props.theme.palette.cardBorderColor};
      border-radius: 48px;
      height: 9px;
      width: 40%;
    }

    .trade {
      background-color: ${(props) => props.theme.palette.cardBorderColor};
      border-radius: 24px;
      height: 11px;
      margin-top: 12px;
      width: 50%;
    }
  }

  &.bio {
    padding: 8px 0;

    .description-line {
      &:first-child {
        margin-top: 0;
      }
    }
  }

  .description-line {
    background-color: ${(props) => props.theme.palette.cardBorderColor};
    border-radius: 24px;
    display: block;
    height: ${(props) => props.theme.isDark ? '10px' : '12px'};
    margin: ${(props) => props.theme.isDark ? '4px 0 6px' : '3px 0 5px'};
    width: 100%;

    &:last-child {
      width: 75%;
    }
  }

  .c-post-placeholder {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Masthead = ({ authenticatedUser, className, followees, profile }) => { // eslint-disable-line arrow-body-style
  const currentProfile = profile && profile.user;

  const followeesData = followees && followees.data;
  const foundFollowing = followeesData && followeesData.length > 0
    && followeesData.find((followee) => {
      const followeeId = followee.node.followee.id;

      return currentProfile && followeeId === currentProfile.id;
    });
  // eslint-disable-next-line no-unneeded-ternary
  const isFollowing = foundFollowing ? true : false;

  const { endorsements, reviews } = currentProfile || {
    endorsements: [],
    reviews: [],
  };

  const hasEndorsements = endorsements && endorsements.length > 0;
  const hasReviews = reviews && reviews.length > 0;
  const numOfEndorsements = hasEndorsements ? endorsements.length : 0;
  const numOfReviews = hasReviews ? reviews.length : 0;

  return (
    <Wrapper className={`c-masthead ${className || ''}`} >
      <Banner>
        <div
          className="lazy-image"
          data-src={currentProfile && currentProfile.banner}
          aria-label={`${currentProfile && currentProfile.name}'s banner image`}
          role="img"
          ref={(c) => { this.banner = c; }}
        />
      </Banner>
      <Details>
        <header>
          <Avatar>
            <Image
              className="lazy-image"
              data-src={currentProfile && currentProfile.avatar}
              alt={`${currentProfile && currentProfile.name}'s avatar`}
              innerRef={(c) => { this.avatar = c; }}
            />
          </Avatar>
          {
            currentProfile
            ? (
              <Info className="c-info">
                <Name>{currentProfile && currentProfile.name}</Name>
                <Username>@{currentProfile && currentProfile.username}</Username>
                <Trade>{currentProfile && currentProfile.settings.trade}</Trade>
              </Info>
            ) : (
              <Placeholder className="c-info">
                <span className="name" />
                <span className="username" />
                <span className="trade" />
              </Placeholder>
            )
          }
          {
            authenticatedUser && currentProfile
            && currentProfile.id === authenticatedUser.id
            ? (
              <Link
                to={{ pathname: '/account/edit' }}
              >
                <Edit content="Edit Profile" />
              </Link>
            )
            : (
              currentProfile &&
              <AddFollowee
                aria-label={`Follow "${currentProfile && currentProfile.name}".`}
                authenticatedUser={authenticatedUser}
                isFollowing={isFollowing}
                target={currentProfile}
              />
            )
          }
        </header>
        <section>
          {
            currentProfile
            ? (
              <Bio>
                <Linkify
                  options={{
                    attributes: {
                      rel: 'nofollow me noopener noreferrer',
                    },
                    className: 'c-link',
                    formatHref: (href, type) => {
                      let newHref = href;
                      if (type === 'hashtag') {
                        newHref = `/tag/${href.substring(1)}`;
                      }
                      return newHref;
                    },
                  }}
                >
                  {currentProfile.settings.bio}
                </Linkify>
              </Bio>
            ) : (
              <Placeholder className="bio">
                <span className="description-line"></span>
                <span className="description-line"></span>
                <span className="description-line"></span>
              </Placeholder>
            )
          }
        </section>
        {
          currentProfile && (
            <div>
              <AddEndorsement
                data-endorsements={numOfEndorsements}
                authenticatedUser={authenticatedUser}
                target={currentProfile}
              />
              <AddReview
                data-review={numOfReviews}
                authenticatedUser={authenticatedUser}
                target={currentProfile}
              />
            </div>
          )
        }

      </Details>
    </Wrapper>
  );
};

Masthead.propTypes = {
  authenticatedUser: PropTypes.object,
  className: PropTypes.string,
  followees: PropTypes.object,
  profile: PropTypes.object,
};

export default Masthead;
