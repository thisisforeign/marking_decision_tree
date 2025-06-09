import './SuperSus.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SuperSus = (props) => {
  const params = useParams();
  console.log(params.rating);
  const [rated, setRated] = useState(() => {
    const storedSuperSus = localStorage.getItem('SuperSus');
    return storedSuperSus ? true : false;
  })
  
  return (
    <>
      <h1>Super Suspense</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="SuperSus"
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default SuperSus;