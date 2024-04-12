import React, {useState, useEffect } from 'react';//hooks
import axios from 'axios'; //For making an HTTP Request
import './App.css'

function App() {
  const [query, setQuery] = useState('');//store the search query from user
  const[gifs, setGifs] = useState([]);
  const API_key = 'yTPN7bWORMtCMCUArsSXlakY2WVNl2kq'
  
//use effect hook for fetching gif async
  useEffect(() => async () =>{
    //Does this need to be in a try catch?  error?

    const fetchGifs = async () => {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`);
      setGifs(response.data.data);
    }
  } 

)
//if the query is not empty call the 'fetchGifs' function to fetch gifs
    if (query !== '') {
      fetchGifs();
}
      }, [query]);
//handlechange updates the query state with what the user puts in the input field
const handleChange = (event) => {
  setQuery(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

};
  
  
  return (
      <div>
        <h1>Giphy Searcher</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange} placeholder="Search here" />
          <button type="submit">Search</button>
        </form>
        <div className="gifs">
          {gifs.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))}
        </div>
      </div>
    );
  }
  
  )
};

export default App
