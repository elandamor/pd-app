import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
import Modal from '../Modal/Loadable';
import PostCreator from '../PostCreator/Loadable';
// Styles
import Wrapper from './styles';

const MobileMainNav = ({ authenticatedUser }) => (
  <Wrapper className="c-nav__main">
    <NavLink
      exact
      activeClassName="-active"
      className={'bttn-home'}
      to="/"
      aria-label="Go to feed"
    >
      <Icon icon={ICONS.HOME_OUTLINE_V2} viewBox="0 0 20 18" />
    </NavLink>
    <NavLink
      activeClassName="-active"
      className={'bttn-explore'}
      to="/explore"
      aria-label="Explore Plus"
    >
      <Icon icon={ICONS.EXPLORE} />
    </NavLink>
    <div className="c-btn--add-wrapper">
      <Modal
        trigger={(
          <Button
            className="c-btn--add"
            aria-label="Add a post, product or service"
          >
            <Icon icon={ICONS.ADD} />
          </Button>
        )}
      >
        <PostCreator />
      </Modal>
    </div>
    <NavLink
      activeClassName="-active"
      className={'bttn-messages'}
      to="/messages"
      aria-label="View your messages"
    >
      <Icon icon={ICONS.MESSAGES_OUTLINE} viewBox="0 0 24 20" />
    </NavLink>
    <NavLink
      activeClassName="-active"
      className={'bttn-notifications'}
      to="/notifications"
      aria-label="View your notifications"
    >
      <Icon icon={ICONS.NOTIFICATION_OUTLINE_V2} viewBox="0 0 18 20" />
    </NavLink>
  </Wrapper>
);

MobileMainNav.propTypes = {
  authenticatedUser: PropTypes.object,
};

export default MobileMainNav;
