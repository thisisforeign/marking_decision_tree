import './ColorChar.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ColorChar = (props) => {
  const params = useParams();
  console.log(params.rating);
  const [rated, setRated] = useState(() => {
    const storedColorChar = localStorage.getItem('ColorChar');
    return storedColorChar ? true : false;
  })
  
  return (
    <>
      <h1>Colourful Characterisation</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="ColorChar"
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default ColorChar;