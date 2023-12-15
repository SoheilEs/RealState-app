import Category from "@/modules/Category"
import styles from "@/templates/HomePage.module.css"
import { FiCircle } from "react-icons/fi"
import { FaCity } from "react-icons/fa"
const services = ["اجاره","رهن","فروش","خرید"]
const cities = ["تهران","تبریز","اصفهان","شیراز","کرمانشاه","مشهد","رشت","خرم آباد"]

function HomePage() {
  return (
    <div>
        <div className={styles.banner}>
           <div className={styles.desc}>
                <h1>سامانه خرید و اجاره ملک</h1>
                <ul>
                {services.map((service,index)=>(
                    <li key={index}>
                    <FiCircle />
                    <span>{service}</span>
                    </li>
               ))}
                </ul>
           </div>
        </div>
        <div className={styles.categories}>
            <Category title="خانه ویلایی"  name="villa"/>
            <Category title="آپارتمان"  name="apartment"/>
            <Category title="مغازه"  name="store"/>
            <Category title="دفتر"  name="office"/>
        </div>
        <div className={styles.city}>
            <h3>شهرهای پر بازدید</h3>
            <ul>
                {cities.map((city,index)=>(
                    <li key={index}>
                        <FaCity />
                        <span>{city}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default HomePage