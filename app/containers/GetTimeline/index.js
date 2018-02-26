/**
 * GetTimeline.js
 */

import React from 'react';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
// Components
import Post from '../../components/Post/Loadable';
import Product from '../../components/Product/Loadable';
import Service from '../../components/Service/Loadable';
// Queries
import getTimelineGQL from '../../graphql/queries/getTimeline.gql';
// Styles
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class GetTimeline extends React.Component {
  constructor(props) {
    super(props);
    // Let's assume the user follows someone and has at least one post...
    // ... to view in their timeline.
    this.state = {
      hasFollowees: true,
      hasTimeline: true,
    };
  }

  componentWillReceiveProps({ error, loading, timeline }) {
    const appContainer = document.querySelector('.app-container');

    if (error || !loading) {
      appContainer.classList.remove('is-loading');
    }

    if (!loading && timeline.data) {
      this.props.onLoad(Boolean(timeline.data.length > 0));
      this.setState({ hasTimeline: Boolean(timeline.data) });
    }
  }

  // For debugging purposes. Uncomment to use.
  // componentDidUpdate(prevProps) {
  //   Object.keys(this.props).forEach((key) => {
  //     if (this.props[key] !== prevProps[key]) {
  //       console.log(key, 'changed from', prevProps[key], 'to', this.props[key]);
  //     }
  //   });
  // }

  render() {
    const { authenticatedUser, followees, timeline: { data } } = this.props;
    const { hasTimeline } = this.state;

    let timeline = null;

    timeline = data && data.length > 0 && data.map((node) => {
      // eslint-disable-next-line no-underscore-dangle
      const nodeType = node.__typename;
      const nodeKey = `${nodeType}:${node.id}`;

      switch (nodeType) {
        case 'Post':
          return (
            <Post
              key={nodeKey}
              authenticatedUser={authenticatedUser}
              followees={followees}
              post={node}
            />
          );
        case 'Product':
          return (
            <Product
              key={nodeKey}
              authenticatedUser={authenticatedUser}
              followees={followees}
              product={node}
            />
          );
        case 'Service':
          return (
            <Service
              key={nodeKey}
              authenticatedUser={authenticatedUser}
              followees={followees}
              service={node}
            />
          );
        default:
          return null;
      }
    });

    return (
      <Wrapper>
        { hasTimeline && timeline }
      </Wrapper>
    );
  }
}

GetTimeline.defaultProps = {
  followees: {},
  timeline: {},
};

GetTimeline.propTypes = {
  authenticatedUser: PropTypes.object.isRequired,
  followees: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onLoad: PropTypes.func.isRequired,
  timeline: PropTypes.object.isRequired,
};

const mapTimelineToProps = ({ data }) => {
  if (data.error) {
    return {
      error: data.error,
      loading: data.loading,
    };
  }

  if (!data.timeline) {
    return {
      loading: data.loading,
    };
  }

  const { timeline } = data;

  return {
    loading: data.loading,
    timeline: {
      data: timeline,
    },
    subscribeToMore: data.subscribeToMore,
  };
};

export default compose(
  graphql(getTimelineGQL, {
    options: ({ userId, filter }) => ({
      variables: {
        userId,
        filter: filter || '',
      },
      fetchPolicy: 'cache-and-network',
      skip: !userId,
    }),
    props: mapTimelineToProps,
  })
)(GetTimeline);
