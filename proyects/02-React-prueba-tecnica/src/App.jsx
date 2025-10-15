import { useEffect, useState } from "react"

const END_POINT_FACTS = 'https://catfact.ninja/fact'
//const END_POINT_CAT_IMG = `https://cataas.com/cat/says/hello`

export function App() {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(END_POINT_FACTS)
      .then(res =>{
        console.log(res)
        return res.json()
      } )
      .then(data => {
        const {fact} = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if(!fact) return
    const firstWord = fact.split(' ', 2).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(res => res.json())
    .then(response => {
      const {url} = response
      setImgUrl(url)
    })
  }, [fact])

  return (
    <main>
    <h1>App de gatitos</h1>
    {fact && <p>{fact}</p>}
    <img src={imgUrl} alt={`Imagen extraida de la API de un gato que dice las dos primeras palabras de la frase: ${fact}`} />
    </main>
  )
}
