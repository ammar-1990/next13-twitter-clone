import Header from "@/components/Header";
import { getSession } from "@/actions/getCurrentUser";
import PostForm from "@/components/PostForm";
import PostFeed from "@/components/PostFeed";


export default async function Home() {
const currentUser = await getSession()


  return (
 <div >
  <Header label="Home"  />
  <PostForm currentUser={currentUser} placeholder="What is happening" />
  <PostFeed />
 </div>
  )
}
