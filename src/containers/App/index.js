import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
// Components
import AccountMenu from '../../components/AccountMenu/Loadable';
import Header from '../../components/Header';
import MobileNav from '../../components/MobileMainNav';
// Pages
import Explore from '../../pages/Explore/Loadable';
import Home from '../../pages/Home/Loadable';
import Messages from '../../pages/Messages/Loadable';
import Notifications from '../../pages/Notifications/Loadable';
// Styled-Components
import Wrapper, { Footer, Main } from './styles';

const GET_AUTHENTICATED_USER = gql`
  query getAuthenticatedUser {
    authenticatedUser @client {
      id
      name
      username
    }
  }
`;

const SET_AUTHENTICATED_USER = gql`
  mutation setAuthenticatedUser($user: Object!) {
    authenticatedUser: setAuthenticatedUser(user: $user) @client
  }
`;

class App extends Component {
  setAuthenticatedUser = async () => {
    const { client } = this.props;

    await client.mutate({
      mutation: SET_AUTHENTICATED_USER,
      variables: {
        user: {
          __typename: 'User',
          id: 1,
          name: 'Thandolwethu Mpofu',
          username: 'elandamor',
        }
      }
    });
  }

  getAuthenticatedUser = async () => {
    const { client } = this.props;
    const authenticatedUser = await client.query({
      query: GET_AUTHENTICATED_USER,
    }).then(({data: { authenticatedUser }}) => authenticatedUser);
    console.log({ authenticatedUser })
  }

  render() {
    const authenticatedUser = {
      id: 1,
      name: 'Thandolwethu Mpofu',
      username: 'elandamor',
    };

    return (
      <Wrapper className="c-app-container">
        <Header className="c-app-header">
          <AccountMenu
            authenticatedUser={authenticatedUser}
          />
        </Header>
        <Main className="c-app-main">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} />
              )}
            />
            <Route
              path="/f"
              render={(props) => (
                <Home {...props} />
              )}
            />
            <Route
              path="/explore"
              render={(props) => (
                <Explore {...props} />
              )}
            />
            <Route
              path="/messages"
              render={(props) => (
                <Messages {...props} />
              )}
            />
            <Route
              path="/notifications"
              render={(props) => (
                <Notifications {...props} />
              )}
            />
          </Switch>
        </Main>
        <Footer className="c-app-footer">
          <MobileNav />
        </Footer>
      </Wrapper>
    );
  }
}

export default withApollo(App);
