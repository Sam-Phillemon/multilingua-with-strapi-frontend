import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    //Fetching Data from Strapi
    const getPosts = async () => {
      const response = await fetch('http://localhost:1337/articles')
      const data = await response.json();
      console.log('useFFect Data:', data)
      setPosts(data)
    }

    getPosts()
  },[])
  return (
    <div className="App">
      <Header articles={posts}/>
    </div>
  );
}

export default App;
