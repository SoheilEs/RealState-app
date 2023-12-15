"use client";
import CustomDatePicker from "@/modules/CustomDatePicker";
import Loader from "@/modules/Loader";
import RadioList from "@/modules/RadioList";
import TextInput from "@/modules/TextInput";
import TextList from "@/modules/TextList";
import styles from "@/templates/AddAddsPage.module.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";

function AddAddsPage({adsData}) {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const [addAdsData, setaddAddsData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "", // آدرس املاکی
    constractionDate: new Date(), // تاریخ ثبت آگهی
    category: "",
    rules: [], //قوانین ملک
    amenities: [], // امکانات رفاهی
  });
  const submitHandler = async() => {
    setLoading(true)
    const res = await fetch("/api/ads",{
      method:"POST",
      headers:{
        "Content-Type": "applicatoin/json"
      },
      body: JSON.stringify({...addAdsData})
    })
    const data = await res.json()
    if(data.error){
      setLoading(false)
      toast.error(data.error)
    }else{
      setLoading(false)
      toast.success(data.message)
      router.refresh()
    }
  };
  const editHandler = async () => {
    setLoading(true)
    const res = await fetch("/api/ads",{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({...addAdsData})
    })
    const data = await res.json() 
    if(data.error){
      setLoading(false)
      toast.error(data.error)
    }else{
      
      setLoading(false)
      toast.success(data.message)
      router.refresh()
    }

  }
  useEffect(()=>{
    if(adsData) setaddAddsData(adsData)
  },[])
  return (
    <div className={styles.container}>
      <h3>{adsData ? "ویرایش":"آگهی جدید"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
      />
      <TextInput
        title="تلفن"
        name="phone"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
      />
      <TextInput
        title="قیمت (تومان)"
        name="price"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        addAddsData={addAdsData}
        setAddAdsData={setaddAddsData}
      />
      <RadioList addAdsData={addAdsData} setAddAdsData={setaddAddsData} />
      <TextList
        title="امکانات رفاهی"
        addAdsData={addAdsData}
        setAddAdsData={setaddAddsData}
        type="amenities"
      />
      <TextList
        title="قوانین"
        addAdsData={addAdsData}
        setAddAdsData={setaddAddsData}
        type="rules"
      />
      <CustomDatePicker  addAdsData={addAdsData} setAddAdsData={setaddAddsData} />
      {
        loading ? 
        (
          <Loader />
        )
        :
        (
          adsData ?
          (
            <button className={styles.submit} onClick={editHandler}>
             ویرایش آگهی 
            </button>
          )
          :
          (
            <button className={styles.submit} onClick={submitHandler}>
              ثبت آگهی
            </button>
          ) 
      
        )
      }
     
      <Toaster />
    </div>
  );
}

export default AddAddsPage;
