import styles from "@/modules/ItemList.module.css"
function ItemList({title,data}) {
  return (
    <>
        <h3 className={styles.title}>{title}</h3>
        {
                data.length ? 
                <ul className={styles.itemListUl}>
                    {
                        data.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul> 
                : 
                (<p className={styles.itemListP}>هیچ موردی ذکر نشده است</p>)
            }
    </>
  )
}

export default ItemList