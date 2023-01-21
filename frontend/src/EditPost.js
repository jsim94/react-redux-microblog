import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { editPost, getPost } from "./store";
import PostForm from "./PostForm";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

export default function EditPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentPost: post } = useSelector((state) => state.post);
  const postLoading = useSelector((state) => state.blog.loading);

  if (post === undefined) {
    dispatch(getPost(postId));
    return <ClipLoader loading={postLoading} />;
  }

  const fields = {
    title: post.title,
    description: post.description,
    body: post.body,
  };

  const handleSubmit = (data) => {
    dispatch(editPost({ id: post.id, data }));
    navigate(`/${postId}`);
  };

  return (
    <Container>
      <h2>Edit Post</h2>
      <PostForm fields={fields} submit={handleSubmit} />
    </Container>
  );
}
