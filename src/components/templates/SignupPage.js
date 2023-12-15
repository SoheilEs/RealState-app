"use client"
import { useState } from "react"
import styles from "@/templates/SignupPage.module.css"
import Link from "next/link"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Loader from "@/modules/Loader";

function SignupPage() {
    const router = useRouter()
    const [userInfo,setUserInfo] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const [ loading, setLoading] = useState(false)
    const changeHandler = e =>{
        const {name, value} = e.target
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }
    const submitHandler = async(e) =>{
        e.preventDefault()
        setLoading(true)
        if(userInfo.password !== userInfo.confirmPassword) {
            toast.error("رمز و تکرار آن برابر نیست")
            setLoading(false)
            return; 
        }
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{
                "Content-Type":"applicatoin/json"
            },
            body: JSON.stringify({...userInfo})
        })
        const data = await res.json()
        if(+data.status ===201) {
            toast.success(data.message)
            setLoading(false)
            setTimeout(()=>{
                router.replace("/signin")
            },2000)
            
        }else{
            setLoading(false)
            toast.error(data.message)
        }
        
    }
  return (
        <div className={styles.signup}>
            <h4>فرم ثبت نام</h4>
            <form onSubmit={submitHandler} className={styles.signupForm}>
                <label>ایمیل</label>
                <input name="email" value={userInfo.email} type="email" onChange={changeHandler} />
                <label>رمز عبور</label>
                <input name="password" value={userInfo.password} type="password" onChange={changeHandler} />
                <label>تایید رمز عبور</label>
                <input name="confirmPassword" value={userInfo.confirmPassword} type="password" onChange={changeHandler} />
                { !loading ?

                <button type="submit">ثبت نام</button>
                :
                <Loader />
                }
            </form>
            <p>حساب کاربری دارید؟
                <Link href="/signin">ورود</Link>
            </p>
            <Toaster />
        </div>
  )
}

export default SignupPage;