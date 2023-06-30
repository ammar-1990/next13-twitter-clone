import { getSession } from "@/actions/getCurrentUser"
import { getPosts } from "@/actions/getPosts"
import PostComponent from "./PostComponent"

type Props = {}

const PostFeed = async(props: Props) => {
    const posts = await getPosts()
  return (
    <div>
        {posts.map(post=><PostComponent key={post.id} body={post.body} user={post.user} comments={post.comments} likedIds={post.likedIds} createdAt={post.createdAt} />)}
    </div>
  )
}

export default PostFeed