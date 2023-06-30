import { NextResponse } from "next/server";
import prisma from '../../../../util/prismadb'
import { getSession } from "@/actions/getCurrentUser";

type PARAMS ={
    userId:string
}

export async function POST(request:Request,{params}:{params:PARAMS}){
    const userId = params.userId
    const currentUser = await getSession()

    if(userId !== currentUser?.id)   return new Response('Not authorized',{status:400})

    const {name,username,bio,coverImage,profileImage} = await request.json()
    console.log(name,username,bio)

    if(!name || !username)   return new Response('Please enter name and username',{status:400})

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
    } catch (error:any) {
        console.log(error)
       return new Response('something went wrong',{status:500})
    }





}