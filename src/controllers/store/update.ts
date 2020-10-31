import { Request, Response } from "express";
import Store, { IStore } from "../../models/store";

export const Update = async (req: Request, res: Response) => {
    let { _id, name,description } = req.body;

    try {
        let storeUpdated:any=await Store.updateOne({_id},{$set:{name,description}});
        console.log(storeUpdated);
        res.status(200).json({message:"Updated Successfuly."});
    } catch (error) {
        res.status(500).json({ message: "Error Updating." });
    }
}