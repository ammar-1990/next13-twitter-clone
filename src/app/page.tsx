import Header from "@/components/Header";
import { getSession } from "@/actions/getCurrentUser";
import PostForm from "@/components/PostForm";
import PostFeed from "@/components/PostFeed";


export default async function Home() {
const currentUser = await getSession()

console.log(currentUser)
  return (
 <div >
  <Header label="Home"  />
  <PostForm currentUser={currentUser} />
  <PostFeed />
 </div>
  )
}
