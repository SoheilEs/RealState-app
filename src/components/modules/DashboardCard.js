"use client";
import styles from "@/modules/DashboardCard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


function DashboardCard({ item }) {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-ads/edit/${item._id}`);
  };
  const deleteHandler = async () => {
    const res = await fetch(`http://127.0.0.1:3000/api/ads/delete/${item._id}`,{ 
        method: 'DELETE',
      })
    const data = await res.json() 
    if(data.error){
      toast.error(data.error)
    }else{
      toast.success(data.message)
      router.refresh()
    }

  }
  return (
    <div className={styles.container}>
      <Card data={item} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آکهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
