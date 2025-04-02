import './App.css'
import { useReducer, useState, useEffect } from 'react';
import image from './assets/Screenshot 2024-04-11 at 6.54.44 PM.png'

function Header({name, year}) {
  return (
    <header>
      <h1>{name} Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}
const items = [
  "mac",
  "food",
  "people",
  "pickle juice"
];

const foodObjects = items.map((food, i) => ({
  id: i,
  title: food
}));

function Main({ food, openStatus, onStatus }) {
  return (
      <>
      <div>
        <button onClick={() => onStatus(true)}>OI want to be Open</button>
        <h2>Welcome to this beautiful restaurant {openStatus ? "Open" : "Closed"}</h2>
      </div>
      <main>
        <img src={image} alt="its course work" />    
        <ul>
        {food.map((food) => (
          <li key={food.id} style={{listStyleType: "none"}}>
            {food.title}
          </li>
        ))}
      </ul>
    </main>
    </>


  )
}

function App() {
  // const [status, setStatus] = useState(true);

  const [status, toggle] = useReducer((status) => !status, true)

  useEffect(() => {
    console.log(`The Restaurant is ${status ? "Open" : "Closed"}`)
  }, [status]);

  return (
    <div>
      <h1>The Restaurant is currently {status ? "open" : "closed"}</h1>
      <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button> 
      <Header name="Po" year={new Date().getFullYear()}/>
      <Main 
      food={foodObjects} 
      openStatus={status} 
      onStatus={toggle}/>
    </div>

  )
}

export default App
