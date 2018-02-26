/**
 *
 * GetPosts.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import update from 'immutability-helper';
import styled from 'styled-components';
// Components
import Post from '../../components/Post';
// Utilities
import IOPaginator from '../../utils/IOPaginator';
// Queries
import getPostsGQL from '../../graphql/queries/getPosts.gql';
// Styles
import styles from './styles';

const Wrapper = styled.ul`
  ${styles}
`;

const Paginator = styled.hr`
  background-color: ${(props) => props.theme.palette.cardBorderColor};
  border: none;
  height: 48px;
  margin-bottom: 0;
  position: relative;
`;

class GetPosts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps = (nextProps) => {
    const { loadMore, posts } = nextProps;
    const paginator = this.paginator;

    if (paginator && loadMore) {
      new IOPaginator(paginator, loadMore); // eslint-disable-line no-new
    }

    if (posts !== this.props.posts) {
      setTimeout(() => {
        paginator.classList.remove('lazy-paginator-handled');
      }, 1000);
    }
  }

  render() {
    const { authenticatedUser, followees, loadMore, posts: { data } } = this.props;
    let posts = null;

    posts = data && data.length > 0 && data.map((post) => {
      const node = post.node;

      return (
        <Post
          key={node.id}
          authenticatedUser={authenticatedUser}
          followees={followees}
          post={node}
        />
      );
    });

    return (
      <Wrapper>
        {posts}
        <Paginator
          onClick={loadMore}
          innerRef={(c) => { this.paginator = c; }}
        />
      </Wrapper>
    );
  }
}

GetPosts.defaultProps = {
  posts: {},
};

const mapResultsToProps = ({ data }) => {
  if (!data.posts) {
    return {
      loading: data.loading,
    };
  }

  const { fetchMore, posts: { edges } } = data;
  const cursor = edges[edges.length - 1].node.id;

  return {
    loading: data.loading,
    loadMore() {
      return fetchMore({
        variables: {
          after: cursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }

          const previousPosts = previousResult.posts.edges;
          const newPosts = fetchMoreResult.posts.edges;

          if (!newPosts.length > 0) {
            return previousResult;
          }

          const updatedPosts = previousPosts.concat(newPosts);

          const newResult = update(previousResult, {
            posts: {
              edges: {
                $set: updatedPosts,
              },
            },
          });

          return newResult;
        },
      });
    },
    posts: {
      data: edges,
    },
    subscribeToMore: data.subscribeToMore,
  };
};

GetPosts.propTypes = {
  authenticatedUser: PropTypes.object.isRequired,
  followees: PropTypes.object.isRequired,
  loadMore: PropTypes.func,
  posts: PropTypes.object.isRequired,
};

export default compose(
  graphql(getPostsGQL, {
    options: ({ authenticatedUser }) => ({
      variables: {
        userId: authenticatedUser.id,
        limit: 10,
      },
      fetchPolicy: 'cache-and-network',
    }),
    props: mapResultsToProps,
  })
)(GetPosts);
