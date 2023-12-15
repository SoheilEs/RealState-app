import User from "@/models/User";
import { verifyPass } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = {
    session : {strategy:"jwt"},
    providers:[
        CredentialsProvider({
        async authorize(credentials,req){
            const{email,password} = credentials
            try{
                await connectDB()
            }catch(err){
                throw new Error("مشکل در اتصال به پایگاه داده")
            }
            if(!email || !password) throw new Error("اطلاعات نامعتبر می باشید")
            const user = await User.findOne({email})
            if(!user) throw new Error("کاربر وجود ندارد")
            const isValid = await verifyPass(password,user.password)
            if(!isValid) throw new Error("نام کاربری یا رمز اشتباه می باشد")
            return{email}
        },
       
    })],
    pages: {
        signIn: '/signin',
      }
}
const handler = NextAuth(authOptions)
export {handler as POST, handler as GET}