"use client"
import { signOut } from "next-auth/react"
import {FiLogOut} from "react-icons/fi"
import styles from "@/modules/ExitButton.module.css"
function ExitButton() {
    const clickHandler = ()=>{
        signOut()
    }
  return (
    <button className={styles.button} onClick={clickHandler}>
        <FiLogOut />
        خروج
    </button>
  )
}

export default ExitButton