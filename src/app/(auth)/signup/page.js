import SignupPage from "@/templates/SignupPage"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect} from "next/navigation"
async function SignUp() {
  const sesstion = await getServerSession(authOptions)
  if(sesstion) redirect("/")
  return <SignupPage />
}

export default SignUp