import styles from "@/templates/DashboardPage.module.css"
import { getServerSession } from "next-auth"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
async function DashboardPage() {
  const sesstion = await getServerSession(authOptions)
  await connectDB()
  const user = await User.findOne({email:sesstion.user.email})

  return (
    <div className={styles.container}>
      <h3>👋  سلام به حساب کاربری خود خوش امدید.</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند.</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت :</p>
        <span>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  )
}

export default DashboardPage