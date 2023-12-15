import Card from "@/modules/Card"
import Sidebar from "@/modules/Sidebar"
import styles from "@/templates/BuyResidentialsPage.module.css"

function BuyResidentialsPage({data}) {
    
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.main}>
            {
                data.length ? null : (<p className={styles.text}>هیچ آگهی ثبت نشده است</p>)
            }
            {
                data.map(item => <Card key={item._id} data={item} id={item._id}/>)
            }
        </div>
    </div>
  )
}

export default BuyResidentialsPage