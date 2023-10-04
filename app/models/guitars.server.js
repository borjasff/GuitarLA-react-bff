export async function getGuitars(){
    const answer = await fetch(`${process.env.API_URL}/guitarras?populate=image`);
    const result = await answer.json()
    return result
}

export async function getGuitar(url){
    const answer = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`);
    const result = await answer.json()
    return result
}