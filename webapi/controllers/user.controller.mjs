import {register,login} from "../services/authentication.service.mjs"

export const registerController = async (req,res,next)=>{
    const {fullName,email,password}=req.body;
    
    try {
        const result = await register(fullName,email,password);
        res.status(201).json(result);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const loginController =async (req,res,next)=>{
    const {email,password}=req.body;
    try {
        const result = await login(email,password);
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

