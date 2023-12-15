import {RiHome3Line} from "react-icons/ri"
import {MdApartment} from "react-icons/md"
import {BiStore} from "react-icons/bi"
import {GiOfficeChair} from "react-icons/gi"


export const categories = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

export const icons = {
    apartment: <MdApartment />,
    office: <GiOfficeChair />,
    store: <BiStore />,
    villa : <RiHome3Line />
}