import { Button, Container, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useFormControl from "./useFormControl";

export default function PostForm({ fields, submit }) {
  const [formData, updateForm] = useFormControl(fields);

  const handleSubmit = () => {
    submit(formData);
  };

  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={updateForm}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={updateForm}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Body:</Form.Label>
        <Form.Control
          as="textarea"
          name="body"
          value={formData.body}
          onChange={updateForm}
          style={{ minHeight: "200px" }}
        />
      </Form.Group>
      <Button className="mx-2" onClick={handleSubmit}>
        Save
      </Button>

      <LinkContainer to="/">
        <Button variant="secondary">Cancel</Button>
      </LinkContainer>
    </Form>
  );
}
