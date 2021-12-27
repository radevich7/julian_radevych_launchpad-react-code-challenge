import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const GET_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

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
        "There was an error to add a new post, please contact customer service  999-999-999"
      );
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice;
