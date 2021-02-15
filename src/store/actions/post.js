import { DATA } from "../../data";
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOOGLE_BOOKED } from "../types";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const toogleBooked = (id) => {
  return {
    type: TOOGLE_BOOKED,
    payload: id,
  };
};

export const removePosts = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};


export const addPost = (post) => {
  post.id = Date.now().toString();
  return {
    type: ADD_POST,
    payload: post,
  };
};

