import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
// Components
import Button from '../../components/Button';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import { ICONS } from '../../components/Icon/constants';
import MobileNav from '../../components/MobileMainNav';
import Post from '../../components/Post/Loadable';
// import Product from '../../components/Product/Loadable';
// Styled-Components
import Wrapper, { Filter, Footer, Main } from './styles';

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
    return (
      <Wrapper className="c-app-container">
        <Header className="c-app-header"></Header>
        <Filter>
          <Button aria-label="Filter">
            <span className="placeholder">
              <Icon icon={ICONS.FILTER} />
              <span>Filter</span>
            </span>
          </Button>
        </Filter>
        <Main className="c-app-main">
        {
          [...Array(10).keys()].map((_, idx) =>
            <Post key={idx} />
          )
        }
        </Main>
        <Footer className="c-app-footer">
          <MobileNav />
        </Footer>
      </Wrapper>
    );
  }
}

export default withApollo(App);
