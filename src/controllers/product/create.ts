import { Request, Response } from "express";
import Product, { IProduct } from "../../models/product";

export const Create=async(req:Request,res:Response)=>{
    let {store,name,unit}=req.body;
    let productNew:IProduct=new Product({store,name,unit});

    try {
        let productSaved:IProduct=await  productNew.save();
        res.status(200).json(productSaved);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error adding."})    
    }
}