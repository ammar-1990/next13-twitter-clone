import prisma from '../../../util/prismadb'
import { getSession } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'


export async function POST(request:Request){
const currentUser = await getSession()

if(!currentUser) return new Response('Login to make a post',{status:401})
try {
    const {body} = await request.json()

    if(!body) return new Response('enter a post please',{status:401})
    console.log(body)

    const post = await prisma.post.create({
        data:{
            body,
            userId:currentUser.id
        }
    })

    return NextResponse.json(post)

} catch (error) {
    console.log(error)
    return new Response('Something went wrong',{status:500})
}

}