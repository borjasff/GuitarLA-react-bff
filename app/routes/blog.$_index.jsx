
import { useLoaderData } from "@remix-run/react"
import ListPost from "~/components/list-posts"
import { getPosts } from "~/models/posts.server"


export function meta(){
  return [{
    title: 'GuitarLA - Us Blog',
    description: 'GuitarLA, music Blog and sell guitars'
  }]
}


export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (

        <ListPost
        posts={posts}/>
  )
}

export default Blog