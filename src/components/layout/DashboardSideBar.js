import styles from "@/layout/DashboardSideBar.module.css"
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import ExitButton from "@/modules/ExitButton";


async function DashboardSideBar({children,role,email}) {
    
    
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <CgProfile />
            {
              role === "ADMIN" ? "ادمین" : null
            }
            <p>{email}</p>
            <span></span>
            <Link href="/dashboard">حساب کاربری</Link>
            <Link href="/dashboard/my-ads">آگهی های من</Link>
            <Link href="/dashboard/add-ads">ثبت آگهی</Link>
            {
              role === "ADMIN" ?
              <Link href="/admin">در انتظار تایید</Link>
              : null
            }
            <ExitButton />
        </div>
        <div className={styles.main}>
            {children}
        </div>
        
    </div>
  )
}

export default DashboardSideBar