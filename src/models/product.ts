import { model,Document,Types,Schema } from "mongoose";
import { IStore } from "./store";

export interface IProduct extends Document{
    store:IStore,
    name:string,
    unit:string,
    stock:string,
}

const productSchema = new Schema(
    {
        store:{
            type:Types.ObjectId,
            ref:"store",
            required:true,
        },
        name:{
            type:String,
            required:true,
            maxlength:150,
        },
        unit: {
            type:String,
            required:true,
            maxlength:100,
        },
        stock:{
            type:Number,
            min:0,
            default:0,
        }
    }
)

export default model<IProduct>("product",productSchema);