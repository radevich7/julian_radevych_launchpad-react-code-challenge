import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const GET_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PUT_URL = "https://jsonplaceholder.typicode.com/posts/";
const DELETE_URL = "https://jsonplaceholder.typicode.com/posts/";
const FILTER_URL = "https://jsonplaceholder.typicode.com/posts/";

// Get ALL POSTS
export const getPosts = createAsyncThunk("posts/getPosts", async (thunkAPI) => {
  const res = await fetch(GET_URL).then((data) => data.json());
  return res;
});

// Add new POST
export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  console.log(newPost);
  const res = await fetch(POST_URL, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newPost,
    }),
  }).then((data) => data.json());
  return { id: res.id, ...newPost };
});

// Update POST
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updatedPost) => {
    console.log(updatedPost);
    const res = await fetch(`${PUT_URL}${updatedPost.id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updatedPost,
      }),
    }).then((data) => data.json());
    return updatedPost;
  }
);
// Delete POST
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ id }) => {
    console.log(id, "delete");
    const res = await fetch(`${DELETE_URL}${id}`, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
    }).then((data) => data.json());

    return id;
  }
);

// Search post by id
export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async ({ id }) => {
    const res = await fetch(`${FILTER_URL}${id}`).then((data) => data.json());
    return res;
  }
);

// SLICE
const initialState = {
  posts: [],
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //   GET ALL POSTS
    [getPosts.fulfilled]: (state, { payload }) => {
      toast.success("Fetch data successfully");
      state.posts = payload;
    },
    [getPosts.rejected]: (state) => {
      toast.error(
        "There was an error to load posts, please contact customer service  999-999-999"
      );
    },
    // ADD NEW POST
    [addPost.fulfilled]: (state, { payload }) => {
      toast.success("You have successfully created a new post");
      state.posts = [...state.posts, payload];
    },
    [addPost.rejected]: (state) => {
      toast.error(
        "There was an error to update a post, please contact customer service  999-999-999"
      );
    },
    // UPDATE  POST
    [updatePost.fulfilled]: (state, { payload }) => {
      toast.success("You have successfully updated a post");
      //Locate existing post
      const existingPost = state.posts.find((post) => post.id === payload.id);
      //Change values
      existingPost.userId = payload.userId;
      existingPost.title = payload.title;
      existingPost.body = payload.body;
    },
    [updatePost.rejected]: (state) => {
      toast.error(
        "There was an error to update post, please contact customer service  999-999-999"
      );
    },
    // DELETE  POST
    [deletePost.fulfilled]: (state, { payload }) => {
      let idToDelete = payload;
      state.posts = state.posts.filter((post) => post.id !== idToDelete);

      toast.success(`You have successfully deleted a post id#${idToDelete}`);
    },
    [deletePost.rejected]: (state) => {
      toast.error(
        "There was an error to delete a post, please contact customer service  999-999-999"
      );
    },
    // GET POST BY ID
    [getPostById.fulfilled]: (state, { payload }) => {
      toast.success("Filtered by id successfully");
      state.posts = [payload];
    },
    [getPostById.rejected]: (state) => {
      toast.error(
        "There was an error to filter posts by id, please contact customer service  999-999-999"
      );
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice;
