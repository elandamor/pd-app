/**
 * Home
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// Components
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import FeedFilter from '../../components/Filter/Loadable';
import Modal from '../../components/Modal/Loadable';
import Portal from '../../components/Portal/Loadable';
import Post from '../../components/Post/Loadable';
import Product from '../../components/Product/Loadable';
import Service from '../../components/Service/Loadable';
// Containers
import GetPost from '../../containers/GetPost/Loadable';
import GetProduct from '../../containers/GetProduct/Loadable';
import GetService from '../../containers/GetService/Loadable';
// Styled-Components
import Wrapper, { Filter } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  handleFilter = () => {
    console.log('Filtering...');
  }

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Filter>
          <Modal
            trigger={(
              <Button
                aria-label="Filter"
              >
                <span className="placeholder">
                  <Icon icon={ICONS.FILTER} />
                  <span>Filter</span>
                </span>
              </Button>
            )}
          >
            <FeedFilter onFilter={this.handleFilter} />
          </Modal>
        </Filter>
        <div className="c-feed">
          <Post />
          <Product />
          <Service />
        </div>
        <Switch>
          <Route
            exact
            path="/f/post/:postId"
            render={(props) => (
              <Portal>
                <GetPost {...props} />
              </Portal>
            )}
          />
          <Route
            exact
            path="/f/product/:productId"
            render={(props) => (
              <Portal>
                <GetProduct {...props} />
              </Portal>
            )}
          />
          <Route
            exact
            path="/f/service/:serviceId"
            render={(props) => (
              <Portal>
                <GetService {...props} />
              </Portal>
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

Home.propTypes = {

};

export default Home;
