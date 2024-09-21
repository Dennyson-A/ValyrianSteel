import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("MongoDB Connected...")
    app.listen(PORT,()=>{
        console.log(`Server started running at ${PORT}`);
    });
})
.catch((error)=>console.log(error));

const userSchema = new mongoose.Schema({
    Name:String,
    Department:  String,
});

const UserModel = mongoose.model("student",userSchema);

app.get("/getuser",async(req,res)=> {
    const Userdata= await UserModel.find();
    res.json(Userdata);
});