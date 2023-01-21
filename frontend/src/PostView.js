import { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import CommentSection from "./CommentSection";
import { getPost, postState } from "./store";

export default function PostView() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { currentPost } = useSelector((state) => state.post);
  const postLoading = useSelector((state) => state.blog.loading);

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  const handleEdit = () => {
    navigate(`/${postId}/edit`);
  };

  const handleDelete = () => {
    dispatch(postState.deletePost(postId));
    navigate("/");
  };
  console.log(currentPost);
  if (!currentPost) return <ClipLoader loading={postLoading} />;

  return (
    <div>
      <Row>
        <Col>
          <h3>{currentPost.title}</h3>
          <p className="fst-italic">{currentPost.title}</p>
        </Col>
        <Col className="text-end">
          <Button onClick={handleEdit} className="me-2" size="sm">
            Edit
          </Button>
          <Button onClick={handleDelete} variant="danger" size="sm">
            Delete
          </Button>
        </Col>
      </Row>
      <p>{currentPost.body}</p>
      <CommentSection comments={currentPost.comments} />
    </div>
  );
}
