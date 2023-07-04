import prisma from '../../../../util/prismadb'
import { NextResponse , NextRequest } from 'next/server'
import { getSession } from '@/actions/getCurrentUser'


export async function POST(request:NextRequest,{params}:{params:{postId:string}}){

    const currentUser = await getSession()
    if(!currentUser) return new Response('not authorized',{status:401});

const postId = params.postId
const {body} = await request.json()
console.log(postId,body)

if(!body) return  new Response('write a comment please!',{status:401});


try {
    const comment = await prisma.comment.create({
        data:{
            body,
            postId,
            userId:currentUser.id,
            
        }
    })

    const post = await prisma.post.findUnique({where:{id:postId}})

    await prisma.notification.create({
        data:{
           userId:post?.userId as string,
           body:`${currentUser.name } replied to  your tweet! `
        }
    })
    
    await prisma.user.update({
        where:{id:post?.userId},
        data:{hasNotification:true}
    })



    return NextResponse.json({message:'Comment created'},{status:201})


} catch (error:any) {
    console.log(error)
    return new Response('Something went wrong',{status:500})
}


    }

