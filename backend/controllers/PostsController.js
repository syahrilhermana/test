import Posts from "../models/PostsModel.js";

export const getPosts = async(req, res) =>{
    try {
        const page = parseInt(req.params.offset) || 0;
        const limit  = parseInt(req.params.limit) || 10;
        const status = req.query.status || "publish";

        const response = await Posts.findAll({
            where: {
                status : status,
            },
            offset: page,
            limit: limit,
        });
        res.status(200).json(response);
    } catch (e) {
        console.log(e.message);
    }
}

export const getPostsById = async(req, res) =>{
    try {
        const response = await Posts.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (e) {
        console.log(e.message);
    }
}

export const createPosts = async(req, res) =>{
    try {
        await Posts.create(req.body);
        res.status(201).json({msg: "Article has been created"});
    } catch (e) {
        console.log(e.message);
    }
}

export const updatePosts = async(req, res) =>{
    try {
        await Posts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Article has been updated"});
    } catch (e) {
        console.log(e.message);
    }
}

export const deletePosts = async(req, res) =>{
    try {
        await Posts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Article has been deleted"});
    } catch (e) {
        console.log(e.message);
    }
}