import { model,Document,Types,Schema } from "mongoose";
import { IMovement } from "./movement";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IDetail extends Document{
    product:IProduct,
    movement:IMovement,
    quantity_old:number,
    quantity:number,
    quantity_new:number,
}

const detailSchema = new Schema(
    {
        product:{
            type:Types.ObjectId,
            ref:"product",
            required:true,
        },
        movement:{
            type:Types.ObjectId,
            ref:"movement",
            required:true,
        },
        quantity_old:{
            type:Number,
            min:0, 
            default:0,
        },
        quantity:{
            type:Number,
            min:1,
            required:true,
        },
        quantity_new:{
            type:Number,
            min:1,
            required:true,
        },
    }
)

export default model<IDetail>("detail",detailSchema);