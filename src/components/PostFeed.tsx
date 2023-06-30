import { getSession } from "@/actions/getCurrentUser"
import { getPosts } from "@/actions/getPosts"
import PostComponent from "./PostComponent"

type Props = {
    userId?:string
}

const PostFeed = async({userId}: Props) => {
    const posts = await getPosts(userId)
  return (
    <div>
        {posts.map(post=><PostComponent key={post.id} body={post.body} id={post.id} user={post.user} comments={post.comments} likedIds={post.likedIds} createdAt={post.createdAt} />)}
    </div>
  )
}

export default PostFeed