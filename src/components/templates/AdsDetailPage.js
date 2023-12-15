import styles from "@/templates/AdsDetailPage.module.css"
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import { categories,icons } from "@/utils/constants";
import ItemList from "@/modules/ItemList";
import ShareButton from "@/modules/ShareButton";

function AdsDetailPage({data}) {
  const categories =
  {
    villa: "ویلا" ,
    apartment: "آپارتمان",
    store: "مغازه" ,
    office: "دفتر" }
  
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1>{e2p(data.title)}</h1>
            <span>
                <HiOutlineLocationMarker />
                {data.location}
            </span>
            <h3 className={styles.title}>توضیحات</h3>
            <p>{data.description}</p>
            <ItemList title="امکانات" data={data.amenities} />
            <ItemList title="فوانین" data = {data.rules} />
        </div>
        <div className={styles.sidebar}>
            <div className={styles.realState}>
                <SiHomebridge />
                <p>املاک {data.realState}</p>
                <span>
                  <AiOutlinePhone />
                  {e2p(data.phone)}
                </span>
            </div>
            <ShareButton />
            <div className={styles.price}>
              <p>
                {icons[data.category]}
                {categories[data.category]}
              </p>
              <p>{sp(data.price)} تومان</p>
              <p>
                <BiCalendarCheck />
                {new Date(data.constractionDate).toLocaleDateString("fa-IR")}
              </p>
            </div>
        </div>
    </div>
  )
}
export default AdsDetailPage