import React, { Component } from 'react';
import { connect } from 'react-redux';
import localForage from 'localforage';
import PropTypes from 'prop-types';
// Components
import Button from '../';

class Logout extends Component {
  doLogout = async () => {
    const { onLogout } = this.props;
    // Redirect away from any url that causes apollo to refetch queries
    this.context.router.push('/login');

    try {
      await localForage.clear();
    } catch (e) {
      return;
    } finally {
      onLogout();
    }
  }

  render() {
    return (
      <Button className="c-bttn__logout" onClick={this.doLogout}>Logout</Button>
    );
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired,
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Logout);
