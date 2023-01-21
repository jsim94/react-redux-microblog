import { Container } from "react-bootstrap";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function CommentSection({ comments }) {
  return (
    <Container>
      <hr />
      <h4>Comments</h4>
      {comments.length ? (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      ) : (
        <p>No comments yet.</p>
      )}
      <CommentForm />
    </Container>
  );
}
