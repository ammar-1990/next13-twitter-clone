import prisma from '../../../../../util/prismadb'
import { getSession } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'

type Iparams= {
    params:{userId:string}
}

export async function POST(request:Request,{params}:Iparams){

const currentUser = await getSession()
if(!currentUser) return new Response('Please login',{status:401})
const userId = params.userId 


if(!userId || typeof userId !== 'string')return new Response('Invalid ID',{status:500})

try {
    const user = await prisma.user.findUnique({where:{id:currentUser.id}})
let followList = user?.followingIds ||[]
followList.push(userId)
const updatedUser=await prisma.user.update({
    where:{id:currentUser.id},
    data:{followingIds:[...followList]}
})
return NextResponse.json(updatedUser)
} catch (error) {
    console.log(error)
    return new Response('Something went wrong',{status:500})
}

}



export async function DELETE(request:Request,{params}:Iparams){

    const currentUser = await getSession()
if(!currentUser) return new Response('Please login',{status:401})

const userId = params.userId


if(!userId || typeof userId !== 'string')return new Response('Invalid ID',{status:500})

try {
    const user = await prisma.user.findUnique({where:{id:currentUser.id}})
let followList = user?.followingIds ||[]
followList= followList.filter((el)=>el !== userId)
const updatedUser=await prisma.user.update({
    where:{id:currentUser.id},
    data:{followingIds:[...followList]}
})
return NextResponse.json(updatedUser)
} catch (error) {
    console.log(error)
    return new Response('Something went wrong',{status:500})
}


}