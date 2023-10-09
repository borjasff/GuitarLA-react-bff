import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({request, params}){

  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl)
  if(guitar.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'GuitarLA -We haven\'t found that',
      data: {} 
    })
  }
return guitar
}

export function meta({data}){
  if(!data){
  return{
      title: `GuitarLA -We haven\'t found that`,
      description: `GuitarLA - Sell guitars, Guitar -We haven\'t found that`}
  
}
return[
  {title: `GuitarLA - ${data.data[0].attributes.name}`},
  {description: `GuitarLA - Sell guitars, Guitar ${data.data[0].attributes.name}`}
]
}


export default function $guitarUrl() {

  const {addCart} = useOutletContext() 

  const [ quantity, setQuantity] = useState(0);
  const guitar = useLoaderData()
  const {name, description, image, price} = guitar.data[0].attributes

  const handleSubmit = e => {
    e.preventDefault();

    if(quantity < 1) {
      alert('jaja no')
      return
    }
    const guitarSelection = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price, 
      quantity
    }
    addCart(guitarSelection)
  }

  return (
    <div className="guitar">
      <img className="image" src={image.data.attributes.url} alt={`Image guitar ${name}`} />
      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">${price}</p>

        <form
         onSubmit={handleSubmit}
         className="form">
          <label htmlFor="quantity">Quantity</label>
          <select
          onChange={e => setQuantity(parseInt(e.target.value))}
          id="quantity">
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
           <input type="submit" value="Add to Cart" />
        </form>
      </div>
    </div>
  )
}
