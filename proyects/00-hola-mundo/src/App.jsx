import { TwitterCard } from "./components/twitterCard/twitterCard";

export function App(){

  const users =[
    { userName: "midudev", name: "Miguel Ángel Durán", isFollowing: true },
    { userName: "pheralb", name: "Pablo Heraldo", isFollowing: false },
    { userName: "juandc", name: "Juan de la Cruz", isFollowing: true },
    { userName: "leodanis", name: "Leodanis", isFollowing: false }
  ]
  return(
    <>
      <section className="App">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterCard key={userName} userName={userName} name={name} isFollowing={isFollowing} />
        ))}
      </section>
    </>
  )
}
