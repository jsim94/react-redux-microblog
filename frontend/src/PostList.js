import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import PostCard from "./PostCard";
import { postState, fetchPosts } from "./store";

export default function PostList() {
  const dispatch = useDispatch();
  const { posts, postIds } = useSelector((state) => ({
    posts: state.blog.posts,
    postIds: Object.keys(state.blog.posts),
  }));
  const postLoading = useSelector((state) => state.blog.loading);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(postState.resetPost());
  }, [dispatch]);

  return (
    <Container>
      <p>
        Welcome to <strong>Microblog</strong>, our innovative site for
        communicating on the information superhighway
      </p>
      <ClipLoader loading={postLoading} />
      {postIds.length > 0 && !postLoading ? (
        <Row>
          {postIds.map((postId) => (
            <Col xs="6" key={postId} className="mb-3">
              <PostCard post={posts[postId]} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>No Posts Found</h3>
      )}
    </Container>
  );
}
