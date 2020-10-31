import mongoose from "mongoose";
const _URLDB = process.env.URLDB || "mongodb+srv://dbhotellacupula:EP4aKbhOJCZdnuji@cluster0.jua5n.mongodb.net/dbcupula?retryWrites=true&w=majority"

mongoose.connect(_URLDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(db=>{
    console.log("Database conneted Successfuly.")
}).catch(error=>{
    console.log("There are errors tryning connecto to the database.");
    console.error(error);
})