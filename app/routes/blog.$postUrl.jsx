import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";

export function meta({data}){
  if(!data){
  return{
      title: `GuitarLA -We haven\'t found that`,
      description: `GuitarLA - Sell guitars, Blog -We haven\'t found that`}
  
}
return[
  {title: `GuitarLA - ${data.data[0]?.attributes.title}`},
  {description: `GuitarLA - Sell guitars, Blog ${data.data[0]?.attributes.title}`}
]
}
export async function loader({params}){
  const { postUrl} = params;
  const post = await getPost(postUrl);
  if(post.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'GuitarLA -We haven\'t found that',
        data: {} 
      })
  }
  return post
}
export default function $postUrl() {
  const post = useLoaderData()
  const {title, content, image, publishedAt} = post?.data[0].attributes
  return (
    <article className="post mt-3">
        <img className="image" src={image?.data?.attributes?.url} alt={`image ${title}`} />
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="text">{content}</p>

        </div>
    </article>

  )
}
