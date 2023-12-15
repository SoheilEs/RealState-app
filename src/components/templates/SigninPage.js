"use client"
import styles from "@/templates/SigninPage.module.css"
import { useState } from "react"
import Link from "next/link"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import {signIn} from "next-auth/react"
import Loader from "@/modules/Loader";
function SigninPage() {
    const router = useRouter()
    const [userInfo,setUserInfo] = useState({
        email:"",
        password:"",
    })
    const [ loading, setLoading] = useState(false)
    const changeHandler = e =>{
        const {name, value} = e.target
        setUserInfo({
            ...userInfo,
            [name]:value,
        })
    }
    const submitHandler = async(e) =>{
        e.preventDefault()
        setLoading(true)
        
        const res = await signIn("credentials",{
            email:userInfo.email,
            password:userInfo.password,
            redirect:false
        })
        
        if(!res.error) {
            setLoading(false)
            toast.success("ورود با موفقیت انجام شد")
            setTimeout(()=>{
                router.push("/")
        },2000)
        }else{
            setLoading(false)
            toast.error(res.error)
        }
        
    }
  return (
        <div className={styles.signup}>
            <h4> فرم ورود</h4>
            <form onSubmit={submitHandler} className={styles.signupForm}>
                <label>ایمیل</label>
                <input name="email" value={userInfo.email} type="email" onChange={changeHandler} />
                <label>رمز عبور</label>
                <input name="password" value={userInfo.password} type="password" onChange={changeHandler} />
                { !loading ?

                <button type="submit">ورود</button>
                :
                <Loader />
                }
            </form>
            <p>ثبت نام نکرده اید ؟
                <Link href="/signup">ثبت نام</Link>
            </p>
            <Toaster />
        </div>
  )
}

export default SigninPage