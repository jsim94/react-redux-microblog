import { Button } from "react-bootstrap";

export default function Comment({ comment }) {
  return (
    <div className="my-3 ">
      <Button variant="danger" size="sm" className="me-2">
        Delete
      </Button>
      {comment.text}
    </div>
  );
}
