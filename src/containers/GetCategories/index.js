/**
 *
 * GetCatagories.js
 *
 */

import React from 'react';
import { compose, graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper, { Category } from './styles';

const GET_CATEGORIES = gql`
  query getCategories($limit: Int) {
    categories: categoriesQuery(limit: $limit) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class GetCatagories extends React.Component {
  componentWillReceiveProps = ({ fetchMore, loading }) => {
    if (!loading && fetchMore) {
      fetchMore({
        query: GET_CATEGORIES,
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newCategories = fetchMoreResult.categories;

          return {
            categories: newCategories,
          };
        },
      });
    }
  }

  onSelect = (category) => {
    this.props.onSelect(category);
  }

  render() {
    const { categories: { data } } = this.props;

    let categories = null;

    categories = data && data.length > 0 && data.map((category) => {
      const { node } = category;

      return (
        <Category
          key={node.id}
          onClick={() => this.onSelect(node)}
        >
          { node.name }
        </Category>
      );
    });

    return (
      <Wrapper
        className="c-categories"
      >
        {categories}
      </Wrapper>
    );
  }
}

GetCatagories.defaultProps = {
  categories: { data: [] },
  onSelect: () => ({}),
};

GetCatagories.propTypes = {
  categories: PropTypes.object,
  onSelect: PropTypes.func,
};

const mapCategoriesToProps = ({ data }) => {
  if (data.errors) {
    return {
      errors: data.errors,
      loading: data.loading,
    };
  }

  if (!data.categories) {
    return {
      loading: data.loading,
    };
  }

  const { categories: { edges }, fetchMore } = data;

  return {
    categories: {
      data: edges,
    },
    fetchMore,
    loading: data.loading,
  };
};

export default compose(
  graphql(GET_CATEGORIES, {
    options: ({ first }) => ({
      variables: {
        limit: first,
      },
    }),
    props: mapCategoriesToProps,
  }),
)(GetCatagories);
