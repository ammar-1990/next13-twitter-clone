import prisma from '../util/prismadb'
import { getSession } from './getCurrentUser'



export async function getNotifications(){
const currentUser = await getSession()
if(!currentUser) return null

await prisma.user.update({
    where:{
        id:currentUser.id
    },
    data:{
        hasNotification:false
    }
})


const notifications = prisma.notification.findMany({
    where:{userId:currentUser.id},
    orderBy:{createdAt:'desc'}
})


return notifications

}