import { model, Document, Schema, Types } from "mongoose";
import  bcrypt  from "bcryptjs";
export interface IUser extends Document{
    name:string,
    username:string,
    rule:string,
    password:string,
    encriptPassword(password:string):Promise<string>;
    validatePassword(password:string):Promise<boolean>;
}

const userSchema=new Schema(
    {
        name:{
            type:String,
            maxlength:150,
        },
        username:{
            type:String,
            maxlength:150,
            unique:true
        },
        password:{
            type:String,
            maxlength:150,
            required:true,
        },
        rule:{
            type:String,
            enum:['ADMIN','USER'],
            required:true,
        }
    }
);


userSchema.methods.encriptPassword=async(password:string):Promise<string>=>{
    const saltos=await bcrypt.genSalt(10);
    return bcrypt.hash(password,saltos);
}

userSchema.methods.validatePassword=async function(password:string):Promise<boolean>{
    return await bcrypt.compare(password,this.password);
}

export default model<IUser>('user',userSchema);