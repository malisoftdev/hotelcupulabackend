import { Response, Request } from "express";
import jwt from 'jsonwebtoken'
import User,{ IUser } from "../../models/user";
export const Login = async (req: Request, res: Response) => {
    let { username, password } = req.body;
    if(!username) return res.status(404).json({message:"Debe ingresar su usuario"})
    
    const userResult:IUser|null =await User.findOne({username});
    
    //here we validate if there are a user with the email registred if not so the system have to return a 404 response with a message that says "error no account with that email registred"
    if(!userResult) return res.status(404).json({message:"Cuenta no encontrado"});

    //validate password if match
    const validateResult:boolean =await userResult.validatePassword(password);
    if(!validateResult) return res.status(404).json({message:"Incorrect password"});

    //here we create token to return to client
    const token:string=jwt.sign({_id:userResult._id},process.env.TOKEN_SECRET || "secret-token-default",{expiresIn:60*60*24});

    //responding to client token auth for one day
    res.status(200).json({"authToken":token,userResult});
}