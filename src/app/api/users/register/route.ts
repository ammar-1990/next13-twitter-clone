import prisma from '../../../../util/prismadb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request:Request){
    const {name,username,email,password} = await request.json()
    try {
        if(!name || !username || !email || !password) return new Response('Please fill all fields',{status:400})
const hashedPassword = bcrypt.hashSync(password,12)
const user = await prisma.user.create({
    data:{
        name,username,email,hashedPassword
    }
})

return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }



}