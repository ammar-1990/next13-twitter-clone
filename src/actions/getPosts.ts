import prisma from '../util/prismadb'
import { getSession } from './getCurrentUser'


export async function getPosts(userId?:string){

    try {
        if(!userId) return prisma.post.findMany({
            include:{user:true,comments:true},
            orderBy:{createdAt:'desc'}
        })
    
    
        return prisma.post.findMany({
            where:{userId:userId},
            include:{user:true,comments:true},
            orderBy:{createdAt:'desc'}
    
        })
    } catch (error) {
        console.log(error)
        return []
    }

 


}