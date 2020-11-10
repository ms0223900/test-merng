import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Grid, Transition } from 'semantic-ui-react';
import PostCardItem from '../components/common/PostCardItem';
import { AuthContext } from '../constants/context';
import PostFormContainer from '../containers/common/PostFormContainer';
import QUERY_POSTS, { QueriedPosts } from '../graphql/schemas/queryPosts.schema';

const useHomepage = () => {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data,
  } = useQuery<QueriedPosts>(QUERY_POSTS);

  return ({
    loading,
    user,
    posts: data ? data.getPosts : [],
  });
};

function Homepage() {
  const {
    loading,
    user,
    posts,
  } = useHomepage();

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostFormContainer />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCardItem user={user} post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
        {posts.length === 0 && (
          <h3 style={{ textAlign: 'center', }}>{'No posts yet :('}</h3>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Homepage;