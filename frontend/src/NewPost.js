import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { addPost } from "./store";
import PostForm from "./PostForm";
import { Container } from "react-bootstrap";

export default function NewPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fields = {
    title: "",
    description: "",
    body: "",
  };

  const handleSubmit = (data) => {
    dispatch(addPost(data));
    navigate("/");
  };

  return (
    <Container>
      <h2>New Post</h2>
      <PostForm fields={fields} submit={handleSubmit} />
    </Container>
  );
}
