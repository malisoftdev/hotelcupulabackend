import { Request, Response } from "express";
import { IDeleted } from "../../interfaces/delete";
import Product, { IProduct } from "../../models/product";

export const Delete = async (req: Request, res: Response) => {
    let { _id } = req.body;

    try {
        let productDeleted:IDeleted=await Product.deleteOne({_id});
        console.log("result of delete operation");
        console.log(productDeleted);
        res.status(200).json({message:"Deleted Successfuly."});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error erasing." });
    }
}