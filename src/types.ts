import {User} from'@prisma/client'




export type safeUser = Omit<
User, 'createdAt' | 'updatedAt' | 'emailVerefied'
>&{
    createdAt:string,
    updatedAt:string,
    emailVerefied:string | null
}