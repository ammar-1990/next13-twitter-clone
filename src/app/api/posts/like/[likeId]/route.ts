import prisma from '../../../../../util/prismadb'
import { getSession } from '@/actions/getCurrentUser'
import { NextResponse } from 'next/server'


export async function POST (request:Request,{params}:{params:{likeId:string}}){
const likeId = params.likeId
console.log("post",likeId)
const currentUser = await getSession()
if(!currentUser) return new Response('Please login',{status:401})
try {
    const post = await prisma.post.findUnique({
        where:{id:likeId}
    })

    let newList = [...(post?.likedIds || [])]

   newList.push(currentUser?.id)
   console.log(currentUser.id)
  

   const updatedPost = await prisma.post.update({
    where:{id:likeId},
    data:{likedIds:newList}
   })


 await prisma.notification.create({
    data:{
       userId:post?.userId as string,
       body:`${currentUser.name } liked your tweet! `
    }
})

await prisma.user.update({
    where:{id:post?.userId},
    data:{hasNotification:true}
})


   return NextResponse.json(updatedPost)
} catch (error) {
    console.log(error)
    return new Response('Something went wrong',{status:500})
}

}



export async function DELETE (request:Request,{params}:{params:{likeId:string}}){
    const likeId = params.likeId
    console.log("delete",likeId)
    const currentUser = await getSession()
    if(!currentUser) return new Response('Please login',{status:401})
    try {
        const post = await prisma.post.findUnique({
            where:{id:likeId}
        })
    
        let newList = [...(post?.likedIds || [])]
    
       newList = newList.filter(el=>el !==currentUser.id)
    
       const updatedPost = await prisma.post.update({
        where:{id:likeId},
        data:{likedIds:newList}
       })
    
       return NextResponse.json(updatedPost)
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong',{status:500})
    }
    
    }