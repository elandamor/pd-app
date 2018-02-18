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

// const Checkbox = styled.div`
//   align-items: center;
//   color: ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
//   display: flex;
//   font-size: 14px;
//   height: 100%;
//   justify-content: space-between;
//   padding: 0 13px;
//   position: relative;

//   [type="checkbox"] {
//     -webkit-appearance: none;
//     height: 100%;
//     left: 0;
//     opacity: 0;
//     outline: none;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     z-index: 1;

//     &:checked + .checkInput {
//       &:after {
//         opacity: 1;
//       }
//     }
//   }

//   .checkInput {
//     border: thin solid ${(props) => props.theme.isDark ? '#D3D4D8' : '#555'};
//     border-radius: 4px;
//     display: inline-block;
//     height: 18px;
//     margin-right: 14px;
//     margin-top: 0;
//     overflow: hidden;
//     padding: 0;
//     position: relative;
//     width: 18px;

//     &:after {
//       content: '';
//       position: relative;
//       width: 12px;
//       height: 12px;
//       left: 2px;
//       opacity: 0;
//       top: 2px;
//       display: block;
//       background-color: #02b875;
//       background-color: #03a87c;
//       border-radius: 2px;
//     }
//   }
// `;


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

class GetCatagories extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps = ({ categories, fetchMore, loading }) => {
    if (!loading && fetchMore) {
      console.log('Fetching more...');
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
    // console.log({data})

    let categories = null;

    categories = data && data.length > 0 && data.map((category) => {
      const node = category.node;

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
  categories: {},
};

GetCatagories.propTypes = {
  categories: PropTypes.object.isRequired,
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
    options: {
      variables: {
        limit: 10,
      },
      fetchPolicy: 'cache-first',
    },
    props: mapCategoriesToProps,
  })
)(GetCatagories);
