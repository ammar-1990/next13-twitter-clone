import prisma from '../util/prismadb'


export const  getAllUsers=  async()=>{

    try {
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt:'desc'
            }
        })
        const safeUsers = users.map(user=>({...user,createdAt:user.createdAt.toISOString(),updatedAt:user.updatedAt.toISOString(),emailVerefied:user.emailVerefied?.toISOString() || null }))
        return  safeUsers

    } catch (error:any) {
        console.log(error)
        throw new Error('Something went')
    }



}