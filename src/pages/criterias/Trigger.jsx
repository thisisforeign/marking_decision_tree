import './Trigger.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Trigger = (props) => {
  const params = useParams();
  console.log(params.rating);
  const [rated, setRated] = useState(() => {
    const storedTrigger = localStorage.getItem('Trigger');
    return storedTrigger ? true : false;
  })
  
  return (
    <>
      <h1>Trigger + Decision</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="Trigger"
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default Trigger;