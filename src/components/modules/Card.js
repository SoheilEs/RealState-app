import styles from "@/modules/Card.module.css"
import { CiLocationOn } from "react-icons/ci";
import {BiLeftArrowAlt} from "react-icons/bi"
import { sp } from "@/utils/replaceNumber"
import { icons } from "@/utils/constants";
import Link from "next/link"



function Card({data:{category, title, location, price,_id}}) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            {icons[category]}
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>
            <CiLocationOn />
            {location}
        </p>
        <span className={styles.price}>{sp(price)} <strong>تومان</strong></span>
        <Link href={`/buy-residential/${_id}`}>مشاهده آکهی<BiLeftArrowAlt /></Link>
    </div>
  )
}

export default Card