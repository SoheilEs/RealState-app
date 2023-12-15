import AdsModel from "@/models/AdsModel";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      price,
      realState, // آدرس املاکی
      constractionDate, // تاریخ ثبت آگهی
      category,
      rules, //قوانین ملک
      amenities,
    } = await req.json();
    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({
        status: 401,
        error: "لطفا وارد حساب کاربری خود شوید",
      });
    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({
        status: 404,
        error: "کاربری با این مشخصات وجود ندارد",
      });
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState || // آدرس املاکی
      !constractionDate || // تاریخ ثبت آگهی
      !category
    )
      return NextResponse.json({
        status: 400,
        error: "اطلاعات وارد شده نامعتبر است",
      });
    const newAds = await AdsModel.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState, // آدرس املاکی
      constractionDate, // تاریخ ثبت آگهی
      category,
      rules, //قوانین ملک
      amenities,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json({ status: 201, message: "آکهی با موفقیت ثبت شد" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      error: "خطا در برقراری ارتباط با پایگاه داده",
    });
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState, // آدرس املاکی
      constractionDate, // تاریخ ثبت آگهی
      category,
      rules, //قوانین ملک
      amenities,
    } = await req.json();
    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({
        status: 401,
        error: "لطفا وارد حساب کاربری خود شوید",
      });
    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({
        status: 404,
        error: "کاربری با این مشخصات وجود ندارد",
      });
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState || // آدرس املاکی
      !constractionDate || // تاریخ ثبت آگهی
      !category
    )
      return NextResponse.json({
        status: 400,
        error: "اطلاعات وارد شده نامعتبر است",
      });
    const ads = await AdsModel.findOne({ _id });
    if (!user._id.equals(ads.userId))
      return NextResponse.json({
        status: 403,
        error: "دسترسی شما با این آگهی محدود شده است",
      });
    ads.title = title;
    ads.category = category;
    ads.price = price;
    ads.description = description;
    ads.phone = phone;
    ads.rules = rules;
    ads.realState = realState;
    ads.constractionDate = constractionDate;
    ads.amenities = amenities;
    ads.location = location;
    ads.save();
    return NextResponse.json({
      status: 200,
      message: "آکهی با موفقیت ویرایش شد.",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      error: "خطا در برقراری ارتباط با پایگاه داده",
    });
  }
}
