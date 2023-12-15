import User from "@/models/User";
import { encryptPass } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB()
        const {email,password} = await req.json()
    
        if(!email || !password) return NextResponse.json({status:422 ,error:"لطفا اطلاعات معتبر وارد کنید."})
        const userExists = await User.findOne({email})
        if(userExists) return NextResponse.json({status:422,error:"این حساب کاربری وجود دارد"})
        const encPass = await encryptPass(password)
        const user = await User.create({
            email,
            password: encPass
        })
        return NextResponse.json({status:201, message:"کاربر با موفقیت ایجاد شد."})
    }catch(err){
        return NextResponse.json({status:500,error:"مشکلی در سرور رخ داده است"})
    }
}