import { Request, Response } from "express";
import Product, { IProduct } from "../../models/product";

export const Update = async (req: Request, res: Response) => {
    let { _id, store,name,unit } = req.body;

    try {
        let productUpdated:any=await Product.updateOne({_id},{$set:{store,name,unit}});
        console.log(productUpdated);
        res.status(200).json({message:"Updated Successfuly."});
    } catch (error) {
        res.status(500).json({ message: "Error Updating Contact" });
    }
}