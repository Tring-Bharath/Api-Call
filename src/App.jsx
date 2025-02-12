import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  // fetch("https://api.restful-api.dev/objects")
  
  const callApi = async () => {
    // await fetch("https://api.restful-api.dev/objects")
    // .then(res=>console.log(res))
    // .then(data=>setData(data))
    // .catch(error=>console.log("ERROR",error))

    const response = await fetch("https://api.restful-api.dev/objects")
    console.log(response);
    if (!response.ok) {
      console.log("Couldn't connect");
    }
    const apiData = await response.json();
    setData(apiData);
    console.log(response);
    console.log(data);
    console.log(apiData);
  }
  useEffect(callApi,[])
  return (
    <div>
      <button onClick={callApi}>button</button>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Details</th>
        </tr>
        {data.map(item => (
          <ol key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>
            </li>
          </ol>
        ))}
      </table>
    </div>
  );
}

export default App
