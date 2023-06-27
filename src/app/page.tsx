import Header from "@/components/Header";
import { getSession } from "@/actions/getCurrentUser";


export default async function Home() {
const currentUser = await getSession()

console.log(currentUser)
  return (
 <div >
  <Header label="Home"  />
 </div>
  )
}
