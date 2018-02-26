/**
 * Profile
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { compose, graphql } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import Masthead from './masthead';
// Containers
import GetTimeline from '../../containers/GetTimeline/Loadable';
import GetPostById from '../../containers/GetPostById/Loadable';
import GetPosts from '../../containers/GetPosts/Loadable';
import GetProductById from '../../containers/GetProductById/Loadable';
import GetProducts from '../../containers/GetProducts/Loadable';
import GetServiceById from '../../containers/GetServiceById/Loadable';
// Queries
import getProfileGQL from '../../graphql/queries/getProfile.gql';
import getFolloweesGQL from '../../graphql/queries/getFollowees.gql';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasTimeline: true,
    };
  }

  componentDidMount() {
    const { onSetAppBarTitle } = this.props;
    const appContainer = document.querySelector('.app-container');

    onSetAppBarTitle('Profile');

    appContainer.classList.add('is-loading');
  }

  onTimelineLoad = async (hasTimeline) => {
    this.setState({ hasTimeline });
    // TODO: Profile call-to-action.
  }

  render() {
    const { authenticatedUser, followees, match, profile } = this.props;
    const { hasTimeline } = this.state;

    const currentProfile = profile && profile.user;

    return authenticatedUser && (
      <Wrapper>
        <Helmet>
          <title>
            {
              currentProfile && currentProfile.name && currentProfile.username
              ? `${currentProfile.name} (@${currentProfile.username}) • Plus`
              : 'Plus'
            }
          </title>
        </Helmet>
        <Masthead
          authenticatedUser={authenticatedUser}
          followees={followees}
          profile={profile}
        />
        {
          match.isExact && currentProfile && hasTimeline && (
            <GetTimeline
              authenticatedUser={authenticatedUser}
              userId={profile.user.id}
              followees={followees}
              onLoad={this.onTimelineLoad}
            />
          )
        }
        <Switch>
          <Route
            exact
            path={`${match.url}/posts`}
            render={(props) => (
              <GetPosts
                authenticatedUser={authenticatedUser}
                followees={followees}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/posts/:postId`}
            render={(props) => (
              <GetPostById
                authenticatedUser={authenticatedUser}
                followees={followees}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/products`}
            render={(props) => (
              <GetProducts
                authenticatedUser={authenticatedUser}
                followees={followees}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/products/:productId`}
            render={(props) => (
              <GetProductById
                authenticatedUser={authenticatedUser}
                followees={followees}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/services/:serviceId`}
            render={(props) => (
              <GetServiceById
                authenticatedUser={authenticatedUser}
                followees={followees}
                {...props}
              />
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

Profile.defaultProps = {

};

Profile.propTypes = {
  authenticatedUser: PropTypes.object,
  followees: PropTypes.object,
  match: PropTypes.object,
  onSetAppBarTitle: PropTypes.func,
  profile: PropTypes.object,
};

const mapProfileToProps = ({ data }) => {
  if (data.errors) {
    return {
      errors: data.errors,
      loading: data.loading,
    };
  }

  if (!data.user) {
    return {
      loading: data.loading,
    };
  }

  const { user } = data;

  return {
    loading: data.loading,
    profile: {
      user,
    },
  };
};

const mapFolloweesToProps = ({ data }) => {
  if (data.error) {
    return {
      error: data.error,
      loading: data.loading,
    };
  }

  if (!data.followees) {
    return {
      loading: data.loading,
    };
  }

  const { followees: { edges } } = data;

  return {
    followees: {
      data: edges,
    },
    loading: data.loading,
  };
};

export default compose(
  graphql(getProfileGQL, {
    options: ({ match: { params: { username } } }) => ({
      variables: {
        username,
      },
      fetchPolicy: 'cache-and-network',
    }),
    props: mapProfileToProps,
  }),
  graphql(getFolloweesGQL, {
    options: ({ authenticatedUser }) => ({
      variables: {
        userId: authenticatedUser.id,
      },
      fetchPolicy: 'cache-first',
      skip: !authenticatedUser,
    }),
    props: mapFolloweesToProps,
  }),
)(Profile);
