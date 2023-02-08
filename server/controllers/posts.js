const PostMessage = require('../Models/postMessage');

exports.getAllPosts = async (req, res) => {

    try{
        const messages = await PostMessage.find();
        res.status(200).json({
            status: 'success',
            body:{
                messages
            }
        })
    }catch(error){
        res.status(404).json({
            status: 'not found',
            message: error.message
        })
    }
}

exports.createPost = async (req,res)=>{
    try{
        const post = req.body;
        const newPost = new PostMessage(post);
        
        await newPost.save();

        res.status(201).json({
            status: "success",
            body : {
                newPost
            }
        })
    }catch(error){
        res.status(409).json({
            status: 'not found',
            message: error.message
        })
    }
}