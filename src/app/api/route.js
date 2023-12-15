import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB()
    }catch(err){
        console.log(err);
    }
    return NextResponse.json("data")
}