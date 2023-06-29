import { safeUser } from '@/types'
import prisma from '../util/prismadb'


export const getUser = async (userId:string)=>{

    try {

        if(!userId || typeof userId !=='string') throw new Error('Invalid ID')

        const theUser = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })

        const followers = await prisma.user.count({
            where:{
                followingIds:{
                    has:userId
                }
            }
        })

        return {theUser,followers}
        
    } catch (error) {
        console.log(error)
        throw new Error('Something went wrong')
        
    }

}