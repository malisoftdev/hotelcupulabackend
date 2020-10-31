import { Request, Response } from "express";
import User,{IUser} from "../../models/user";

export const Create=async(req:Request,res:Response)=>{
    let {name,username,password,rule}=req.body;

    let userNew:IUser=new User({name,username,password,rule});    

    try {
        userNew.password=await userNew.encriptPassword(password);
        let userSaved:IUser=await  userNew.save();
        res.status(200).json(userSaved);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error adding user"})    
    }
}