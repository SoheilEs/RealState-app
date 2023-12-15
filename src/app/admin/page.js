import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import { redirect } from "next/navigation";
import DashboardSideBar from "@/layout/DashboardSideBar";
import AdminPage from "@/templates/AdminPage";
import AdsModel from "@/models/AdsModel";

export const metadata = {
  title: "ادمین |  پنل کاربری املاک "
}
async function Admin() {
    await connectDB()
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin")
    const user = await User.findOne({email:session.user.email})
    if(user.role !== "ADMIN"){
        redirect("/dashboard")
    }
    const ads = await AdsModel.find({published:false})

  return( 
  <DashboardSideBar role={user.role} email={user.email}>
    <AdminPage ads={JSON.parse(JSON.stringify(ads))} />
  </DashboardSideBar>
  );
}

export default Admin