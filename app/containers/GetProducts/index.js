/**
 *
 * GetProducts.js
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import update from 'immutability-helper';
import styled from 'styled-components';
// Components
import Product from '../../components/Product';
// Utilities
import IOPaginator from '../../utils/IOPaginator';
// Queries
import getProductsGQL from '../../graphql/queries/getProducts.gql';
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

// eslint-disable-next-line react/prefer-stateless-function
class GetProducts extends React.PureComponent {
  componentWillReceiveProps = (nextProps) => {
    const { loadMore, products } = nextProps;
    const paginator = this.paginator;

    if (paginator && loadMore) {
      new IOPaginator(paginator, loadMore); // eslint-disable-line no-new
    }

    if (products !== this.props.products) {
      setTimeout(() => {
        paginator.classList.remove('lazy-paginator-handled');
      }, 1000);
    }
  }

  render() {
    const { authenticatedUser, followees, loadMore, products: { data } } = this.props;
    let products = null;

    products = data && data.length > 0 && data.map((product) => {
      const node = product.node;

      return (
        <Product
          key={node.id}
          authenticatedUser={authenticatedUser}
          followees={followees}
          product={node}
        />
      );
    });

    return (
      <Wrapper>
        {products}
        <Paginator
          onClick={loadMore}
          innerRef={(c) => { this.paginator = c; }}
        />
      </Wrapper>
    );
  }
}

GetProducts.defaultProps = {
  products: {},
};

const mapResultsToProps = ({ data }) => {
  if (!data.products) {
    return {
      loading: data.loading,
    };
  }

  const { fetchMore, products: { edges } } = data;
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

          const previousProducts = previousResult.products.edges;
          const newProducts = fetchMoreResult.products.edges;

          if (!newProducts.length > 0) {
            return previousResult;
          }

          const updatedProducts = previousProducts.concat(newProducts);

          const newResult = update(previousResult, {
            products: {
              edges: {
                $set: updatedProducts,
              },
            },
          });

          return newResult;
        },
      });
    },
    products: {
      data: edges,
    },
    subscribeToMore: data.subscribeToMore,
  };
};

GetProducts.propTypes = {
  authenticatedUser: PropTypes.object.isRequired,
  followees: PropTypes.object.isRequired,
  loadMore: PropTypes.func,
  products: PropTypes.object.isRequired,
};

export default compose(
  graphql(getProductsGQL, {
    options: ({ authenticatedUser }) => ({
      variables: {
        userId: authenticatedUser.id,
        limit: 10,
      },
      fetchPolicy: 'cache-and-network',
    }),
    props: mapResultsToProps,
  })
)(GetProducts);
