import './WowFatB.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const WowFatB = (props) => {
  const params = useParams();
  console.log(params.rating);
  const [rated, setRated] = useState(() => {
    const storedWowFatB = localStorage.getItem('WOWFATB');
    return storedWowFatB ? true : false;
  });
  
  return (
    <>
      <h1>WOWFATB</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="WOWFATB"
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default WowFatB;