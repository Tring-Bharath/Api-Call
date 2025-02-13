import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const callApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then((data)=>data.json())
    console.log(response);
    setData(response);
  }
  useEffect(()=>{

    callApi()

  },[])
  return(
    <>
    <div className="container">
      {data.map(user=>
        <div className="card">
          <h5 className='title'>{user.title}</h5>
          <img src={user.image} className='imgage' height={'200px'} width={'180px'}/>
          <h7 className="category">Category:{user.category}</h7>
          <p className='price'>Price:{user.price}</p>
          <p className='description'>Description:{user.description}</p>
          <p className='rating'>Rating:{user.rating.rate}</p>
          <p className='count'>Rating Count:{user.rating.count}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
