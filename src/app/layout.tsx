import LayOut from '@/components/LayOut'
import './globals.css'
import { Inter } from 'next/font/google'
import Modal from '@/components/Modal'
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'
import ToastProvider from '@/components/ToastProvider'
import { getSession } from '@/actions/getCurrentUser'
import { getAllUsers } from '@/actions/getAllUsers'
import EditModal from '@/components/EditModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter clone',
  description: 'Twitter clone',
}

export default async function   RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

const currentUser = await getSession()
const users = await getAllUsers()

  return (
    <html lang="en">
      <body className={inter.className}>
     <LoginModal />
     <ToastProvider/>
     <RegisterModal />
     <EditModal currentUser = {currentUser} />
        <LayOut users={users} currentUser={currentUser}>
        {children}
        </LayOut>
  
        </body>
    </html>
  )
}
