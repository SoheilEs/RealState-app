import mongoose, { connections } from "mongoose";


const uri = process.env.DB_URI
export default async function connectDB(){
    try{
        if(connections[0].readyState) return 
        await mongoose.connect(uri)
        console.log("DataBase Connected");

        
    }catch(err){
        console.log("Connction to DB Failed...",err);
    }
}
