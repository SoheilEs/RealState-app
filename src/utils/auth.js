import { compare, hash } from "bcryptjs"

export const encryptPass = async (pass)=>{
    const encPass = await hash(pass, 14)
    return encPass
}

export const verifyPass = async (password, encPass)=>{
    const verifiedPass = await compare(password,encPass)
    return verifiedPass
}