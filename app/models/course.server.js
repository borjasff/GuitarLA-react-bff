export async function getCourse(){
    const answer = await fetch(`${process.env.API_URL}/course?populate=image`);
    const result = await answer.json()
    return result
}