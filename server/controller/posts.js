import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const allPosts = await postMessage.find();
        res.status(200).json(allPosts);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req, res) => {
    
    const newPost = new postMessage(req.body);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

