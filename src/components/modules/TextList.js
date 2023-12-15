import styles from "@/modules/TextList.module.css";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ 
    title, 
    addAdsData, 
    setAddAdsData, 
    type // برای مشخص کردن نوع (قوانین یاامکانات رفاهی)
}) {
const addHandler =()=>{
    setAddAdsData({
        ...addAdsData,
        [type]:[...addAdsData[type],""]
    })
}
const changeHandeler = (e,id) =>{
    const { value } = e.target
    const list = [...addAdsData[type]]
    list[id] = value
    setAddAdsData({
        ...addAdsData,
        [type]:list
    })
}
const deleteItem = (id) => {
    const list = [...addAdsData[type]]
    list.splice(id,1)
    setAddAdsData({
        ...addAdsData,
        [type]:list
    })
}


  return( 
  <div className={styles.container}>
        <p>{title}</p>
        {
            addAdsData[type].map((item, index) => (
                <div key={index} className={styles.card}>
                    <input value={item} type="text" onChange={(e)=>changeHandeler(e,index)}/>
                    <button onClick={()=>deleteItem(index)}>حذف<AiOutlineDelete /></button>
                </div>
            )) 
        }
        <button onClick={addHandler}>افزودن<MdOutlineAddCircleOutline /></button>
  </div>
  );
}

export default TextList;
