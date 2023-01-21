import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Card>
      <Card.Body>
        <Link to={`/${post.id}`}>{post.title}</Link>
        <p>
          <em>{post.description}</em>
        </p>
      </Card.Body>
    </Card>
  );
}
