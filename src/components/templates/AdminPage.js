import AdminCard from "@/modules/AdminCard";
import styles from "@/templates/AdminPage.module.css"

function AdminPage({ads}) {
  console.log(ads);
  return (
    <div className={styles.container}>
        {
          ads.length ? null : <p className={styles.text}>هیچ آگهی در انتظار تایید نیست</p>
        }
        {
          ads.map((i)=>(
            <AdminCard key={i._id} data={i} />
          ))
        }
    </div>
  )
}

export default AdminPage