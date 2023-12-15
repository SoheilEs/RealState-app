import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";


export const metadata = {
  title: "پنل کاربری املاک "
}

async function DashboardLayput({ children }) {
  const sesstion = await getServerSession(authOptions);
  if (!sesstion) redirect("/signin");
  await connectDB()
  const user = await User.findOne({email:sesstion.user.email})
  if(!user) return <h3>مشکلی پیش آمده است</h3>
  return <DashboardSideBar role={user.role} email={user.email} >{children}</DashboardSideBar>;
}

export default DashboardLayput;
