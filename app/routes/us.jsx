import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'

export function meta({ matches }) {
  let rootMeta = matches[0].meta;
  let title = rootMeta.find((m) => m.title);
 
  return [
    title,
    { name: "description", content: "Guitar sale and music blog" },
    { property: "og:title", content: "GuitarLA - About Us" },
 
    // you can now add SEO related <links>
    { tagName: "link", rel: "canonical", href: "..." },
 
    // and <script type=ld+json>
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Remix",
      },
    },
  ];
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}





function Us() {


  return (
    <main className="container us">
        <h2 className="heading">About Us</h2>

        <div className="content">
          <img src={image} alt="image about us" />
          <div>
            <p> Ratione corporis inventore aliquid id molestiae laudantium vel earum, officia possimus laboriosam ad? Eligendi, ullam incidunt laborum impedit laudantium possimus unde quo.</p>

            <p>Amet consectetur adipisicing elit. Culpa necessitatibus accusantium est, doloribus distinctio fugit nemo ratione error laboriosam perferendis enim, harum at ullam hic omnis odit illo veniam quis!</p>

          </div>
        </div>
    </main>
  )
}

export default Us