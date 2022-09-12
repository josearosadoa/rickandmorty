import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Items from './components/Items'

function App() {
  const [location, setLocation] = useState({})
  const [locationid, setLocationId]= useState("")
  
  
  
  useEffect(()=> {
    const randomIndex = Math.floor(Math.random() * 125) + 1
  
    axios.get(`https://rickandmortyapi.com/api/location/${randomIndex}`)
    .then(res => setLocation(res.data))
  },[])

  const searchLocation = () =>{
    alert(locationid)
    axios.get(`https://rickandmortyapi.com/api/location/${locationid}`)
    .then(res => setLocation(res.data))

  }

  console.log(location)
  return (
    <div className="App">
      <div className='rectangle-initial'>
      
       <input className='input-details' type="search"
     value={locationid}
     placeholder="Search"
     onChange={e => setLocationId(e.target.value)}
     />
     <button onClick={searchLocation}>Search</button> 
     </div>

      <div className='card-details'>
        <> 
     <h3>Name: <br/>{location.name}</h3>
     <h3>Type: <br/>{location.type}</h3>
     <h3>Dimension: <br/>{location.dimension}</h3>
     <h3>Population: <br/>{location.residents?.length}</h3>
        </>
     </div>
    
     <div className='card-character'>
       
     {location.residents?.map(resident =>(
       
       <Items  key={resident} url={resident}/>
       
       
       
       ))}
       </div>
    </div>
  )
}

export default App
