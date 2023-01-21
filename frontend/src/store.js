import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import api from "./api";

export const fetchPosts = createAsyncThunk(
  "blog/fetchPosts",
  async () => {
    const res = await api.fetchPosts();
    return res;
  }
);

export const addPost = createAsyncThunk("blog/addPost", async (data) => {
  const res = await api.addPost(data);
  console.log(res);
  return res;
});

const blogSlice = createSlice({
  name: "blog",
  initialState: { posts: {}, loading: false, success: true },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const newPosts = {};
        action.payload.forEach((post) => {
          newPosts[post.id] = post;
        });
        state.posts = newPosts;
        state.loading = false;
      })
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      });
  },
});

export const getPost = createAsyncThunk(
  "post/getPost",
  async (postId) => {
    const post = await api.getPost(postId);
    return post;
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (action) => {
    const { id, data } = action;
    const post = await api.editPost(id, data);
    return post;
  }
);

const currentPostSlice = createSlice({
  name: "post",
  initialState: { currentPost: undefined, loading: false },
  reducers: {
    resetPost(state) {
      state.currentPost = undefined;
    },
    deletePost(state, action) {
      api.deletePost(action.payload);
    },
    addComment(state, action) {},
    deleteComment(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.currentPost = action.payload;
        state.loading = false;
      })
      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const editedPost = action.payload;
        editedPost.comments = [];
        state.currentPost = editedPost;
        state.loading = false;
      });
  },
});

export const { blogState, postState } = {
  blogState: blogSlice.actions,
  postState: currentPostSlice.actions,
};

export default configureStore({
  reducer: {
    blog: blogSlice.reducer,
    post: currentPostSlice.reducer,
  },
});
