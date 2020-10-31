import { Request, Response } from "express";
import Store, { IStore } from "../../models/store";

export const Create=async(req:Request,res:Response)=>{
    let {name,description}=req.body;
    let storeNew:IStore=new Store({name,description});

    try {
        let storeSaved:IStore=await  storeNew.save();
        res.status(200).json(storeSaved);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error adding."})    
    }
}