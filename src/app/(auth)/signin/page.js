import SigninPage from "@/templates/SigninPage"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect} from "next/navigation"

async function SignIn() {
  const sesstion = await getServerSession(authOptions)
  if(sesstion) redirect("/")
  return <SigninPage />
}

export default SignIn