import AdsModel from "@/models/AdsModel";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req,context){
  
  try {
      
    await connectDB(); 
    const {advertiseId:id} =  context.params
    const session = await getServerSession(req)
    if(!session) return NextResponse.json({status:401,error:"لطفا وارد حساب کاربری خود شوید"})
    const user = await User.findOne({email: session.user.email})
    if(!user) return NextResponse.json({status:404,error:"کاربری با این مشخصات وجود ندارد"})
    const ads = await AdsModel.findOne({_id:id})
    if(!user._id.equals(ads.userId)) return NextResponse.json({status:403,error:"دسترسی شما به این آگهی محدود شده است"})
    await AdsModel.deleteOne({_id:id})
    return NextResponse.json({status:200,message:" آکهی مورد نظر حذف شد."})
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      error: "خطا در برقراری ارتباط با پایگاه داده",
    });
  }
}