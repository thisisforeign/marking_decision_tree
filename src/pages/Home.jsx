import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const categories = ["WOWFATB", "Introduction", "Flashback Introduction", "Super Suspense", 
                      "Dilemma Technique", "Trigger + Decision", "Colourful Characterisation"];
  
  const handleClick = (category) => {
    console.log(category);
    
  }
  const [inputName, setInputName] = useState('');

  return (
    <div className='container'>
      <div className='studentNameContainer'>
        Student name: <input 
        type="text" 
        className='studentName' 
        value={inputName}
        onChange={(e) => {setInputName(e.target.value)}}/>
      </div>
        <h1>Choose a category to mark</h1>
        <ul>
          {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/home/${category}`} state={{ studentName: inputName}}><h2>{category}</h2></Link>
              </li>
          ))}
        </ul>
    </div>
  )
}

export default Home