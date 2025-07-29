const Post = require("../models/Post.js");

const getAllPosts =  async () => {
    try {
        const posts =  await Post.find({}).populate('author', 'username imgUrl').sort({ createdAt: -1 });
        return posts;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getPostsByUser = async (userId) => {
    try {
        const posts = await Post.find({ author : userId });
        return posts;
    } catch (error) {
        throw new Error(error.message);
    }
}

const createPost = async (postData) => {
    try {
        const post = new Post(postData);
        await post.save();
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
}

const deletePost = async (postId) => {
    try {
        const post = await Post.findByIdAndDelete(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
}

const likePost = async (postId , userId) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        if (post.likedBy.some(id => id.toString() === userId)) {
            throw new Error('User has already liked this post');
        }
        post.likedBy.push(userId);
        post.likes += 1;
        await post.save();
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
}

const unlikePost = async (postId , userId) => {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        const index = post.likedBy.findIndex(id => id.toString() === userId);
        if (index === -1) {
            throw new Error('User has not liked this post');
        }
        post.likedBy.splice(index, 1);
        if (post.likes > 0) {
            post.likes -= 1;
        }
        await post.save();
        return post;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllPosts,
    getPostsByUser,
    createPost,
    deletePost,
    likePost,
    unlikePost
}