import AdsModel from "@/models/AdsModel";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req,context){
    
  try {
    
    await connectDB(); 
    const {adsId:id} =  context.params
    const session = await getServerSession(req)
    if(!session) return NextResponse.json({status:401,error:"لطفا وارد حساب کاربری خود شوید"})
    const user = await User.findOne({email: session.user.email})
    if(!user) return NextResponse.json({status:404,error:"کاربری با این مشخصات وجود ندارد"})
    if(user.role !== "ADMIN") return NextResponse.json({status:403,error:"شما اجازه دسترسی به این قسمت را ندارید"})
    await AdsModel.updateOne({_id:id},{published:true})
    return NextResponse.json({status:200,message:"آکهی مورد نظر انتشار یافت."})
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      error: "خطا در برقراری ارتباط با پایگاه داده",
    });
  }
}