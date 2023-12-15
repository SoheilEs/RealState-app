"use client"
import styels from "@/modules/AdminCard.module.css"
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({data}) {
    const router = useRouter()
    const updateHandler = async () =>{
        
        const res = await fetch(`http://127.0.0.1:3000/api/ads/publish/${data._id}`,{ 
            method: 'PATCH',
          })
        const result = await res.json()
        if(result.error){
            toast.error(result.error)
        }else{
            toast.success(result.message)
            setTimeout(()=>{
                router.push("/dashboard/my-ads")
            },2000)
        }
    }
  return (
    <div className={styels.container}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styels.properties}>
            <span>{data.location}</span>
            <span>{sp(data.price)} تومان</span>
        </div>
        <button onClick={updateHandler}>انتشار</button>
        <Toaster />
    </div>
  )
}

export default AdminCard