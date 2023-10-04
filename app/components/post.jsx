import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post({post}) {
    const { content, image, title, url, publishedAt } = post
  return (
    <article className="post">
        <img className="image" src={image.data.attributes.formats.small.url} alt={`image ${title}`} />
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="abstract">{content}</p>
            <Link className="link" to={`/blog/${url}`}>Read Post</Link>
        </div>
    </article>
  )
}
