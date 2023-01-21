import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import useFormControl from "./useFormControl";

export default function CommentForm() {
  const navigate = useNavigate();
  const [formData, updateForm] = useFormControl({ comment: "" });

  const handleSubmit = () => {};

  return (
    <Form>
      <Form.Control
        className="mb-2"
        type="text"
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={updateForm}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </Form>
  );
}
