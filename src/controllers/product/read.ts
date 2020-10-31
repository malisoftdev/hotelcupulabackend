import { Request, Response } from "express";
import Product, { IProduct } from "../../models/product";

export const Read = async (req: Request, res: Response) => {    
    try {
        let productList:Array<IProduct>=await Product.find();
        res.status(200).json({productList});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error reading." });
    }
}