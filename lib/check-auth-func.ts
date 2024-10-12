'use server'

import { currentUser } from '@clerk/nextjs/server'



export const authChecked = async ()=>{
    const user = await currentUser()
    if(!user) return false
    return true
}