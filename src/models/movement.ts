import { model,Document,Types,Schema } from "mongoose";


export interface IMovement extends Document{
    quantity:number,
    type:string,
    note:string,
}

const movementSchema = new Schema(
    {
        quantity:{
            type:Number,
            min:1,
            required:true,
        },
        type:{
            type:String,
            enum:['INGRESO','EGRESO'],
            default:'INGRESO'
        },
        note:{
            type:String,
            maxlength:200,
        }
    },
    {
        timestamps:true,
    }
)

export default model<IMovement>("movement",movementSchema);    