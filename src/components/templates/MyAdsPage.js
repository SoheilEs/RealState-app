import DashboardCard from "@/modules/DashboardCard"
import styles from "@/templates/MyAdsPage.module.css"

function MyAdsPage({data}) {
  
  return (
    <div className={styles.container}>
    {
      data.length ? null : <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
    }
    {
      data.map((item)=><DashboardCard key={item._id} item={JSON.parse(JSON.stringify(item))} />)
    }
    </div>
  )
}

export default MyAdsPage