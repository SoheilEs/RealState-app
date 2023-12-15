import styles from "@/modules/CustomDatePicker.module.css"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function CustomDatePicker({addAdsData,setAddAdsData}) {
  const changeHandler = e =>{

    const date= new Date(e)
    
    setAddAdsData({
      ...addAdsData,
      constractionDate : date
    })
  }
  return (
    <div className={styles.container}>
        <p>تاریخ ساخت</p>
        <DatePicker   
        value={addAdsData.constractionDate}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        onChange={changeHandler}
        />
    </div>
  )
} 

export default CustomDatePicker 