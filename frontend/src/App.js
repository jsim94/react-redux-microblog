import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";

import NewPost from "./NewPost";
import PostView from "./PostView";
import PostList from "./PostList";

import "./App.css";
import EditPost from "./EditPost";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route exact path="/" element={<PostList />} />
          <Route exact path="/new" element={<NewPost />} />
          <Route exact path="/:postId/edit" element={<EditPost />} />
          <Route exact path="/:postId" element={<PostView />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
