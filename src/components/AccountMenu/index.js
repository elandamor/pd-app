import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import noScroll from 'no-scroll';
import PropTypes from 'prop-types';
import localForage from 'localforage';
// Components
import Button from '../Button';
import Icon from '../Icon';
import { ICONS } from '../Icon/constants';
import User from '../User';
// Styled-Components
import Wrapper from './styles';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  closeMenu = () => {
    // noScroll.off();

    this.setState({
      isOpen: false,
    });
  }

  openMenu = () => {
    // noScroll.on();

    this.setState({
      isOpen: true,
    });
  }

  logout = async () => {
    const { history, onLogout } = this.props;

    try {
      localForage.removeItem('pa-DB__auth');
    } catch (error) {
      return error;
    }

    onLogout();

    history.push('/');

    return true;
  }

  render() {
    const { authenticatedUser } = this.props;
    const { isOpen } = this.state;

    return authenticatedUser ? (
      <Wrapper className={`${isOpen ? 'is-open' : ''}`}>
        <Button
          aria-label="Toggle Account Menu"
          className="c-bttn-toggle"
          onClick={this.openMenu}
        />
        { /* eslint-disable jsx-a11y/no-static-element-interactions */ }
        <div className="c-overlay" onClick={this.closeMenu} />
        <div className="c-inner">
          <div className="c-acc__header">
            <User
              avatar={authenticatedUser.avatar}
              name={authenticatedUser.name}
              username={authenticatedUser.username}
            />
            <Button
              aria-label="Close account menu"
              className="c-bttn-close"
              onClick={this.closeMenu}
            >
              <Icon icon={ICONS.CLOSE} />
            </Button>
          </div>
          <div className="c-acc__content">
            <nav>
            <ul role="menu">
              <li className="list-item">
                <NavLink
                  activeClassName="-active"
                  to="/membership"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={this.closeAccountMenu}
                >Become a gold member</NavLink>
              </li>
              <li className="list-item list-item--separator"></li>
              <li className="list-item">
                <NavLink
                  activeClassName="-active"
                  to="/collections"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={this.closeAccountMenu}
                >Collections</NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  activeClassName="-active"
                  to="/interests"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={this.closeAccountMenu}
                >Customize your interests</NavLink>
              </li>
              <li className="list-item list-item--separator"></li>
              <li className="list-item">
                <NavLink
                  activeClassName="-active"
                  to="/settings"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={this.closeAccountMenu}
                >Settings</NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  activeClassName="-active"
                  to="/help"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={this.closeAccountMenu}
                >Help</NavLink>
              </li>
              <li className="list-item list-item--separator"></li>
            </ul>
            </nav>
          </div>
          <div className="c-acc__footer">
            <Button
              className="c-btn--logout"
              onClick={this.logout}
            >
              Logout
            </Button>
          </div>
        </div>
      </Wrapper>
    ) : null;
  }
}

Account.propTypes = {
  authenticatedUser: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default Account;
