import { addViewToPostRoute } from "./addViewToPost";
import { createNewPostRoute } from "./createNewPost";
import { deletePostRoute } from "./deletePost";
import { getAllPostsRoute } from "./getAllPosts";
import { getPostRoute } from "./getPost";
import { getUserPostsRoute } from "./getUserPosts";
import { updatePostRoute } from "./updatePost";

export default [
    createNewPostRoute,
    getAllPostsRoute,
    getPostRoute,
    addViewToPostRoute,
    getUserPostsRoute,
    updatePostRoute,
    deletePostRoute,
];