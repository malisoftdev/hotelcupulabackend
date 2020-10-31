import { model,Document,Types,Schema } from "mongoose";

export interface IStore extends Document{
    name:string,
}

const storeSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:150,
        },
        description:{
            type:String,
            maxlength:150,
        },
    }
)

export default model<IStore>("store",storeSchema);