import { NextResponse } from "next/server";
import prisma from '../../../../util/prismadb'
import { getSession } from "@/actions/getCurrentUser";

type PARAMS ={
    userId:string
}

export async function POST(request:Request,{params}:{params:PARAMS}){
    const userId = params.userId
    const currentUser = await getSession()

    if(userId !== currentUser?.id)  throw new Error('Not authorized')

    const {name,username,bio,coverImage,profileImage} = await request.json()
    console.log(name,username,bio)

    if(!name || !username) throw new Error('Please enter username and name')

    try {
        const user = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                name,username,bio,coverImage,profileImage
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.error()
    }



    return NextResponse.json(userId)

}