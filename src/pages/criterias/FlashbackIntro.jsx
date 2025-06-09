import './FlashBackIntro.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const FlashBackIntro = (props) => {
  const params = useParams();
  console.log(params.rating);
  const [rated, setRated] = useState(() => {
    const storedFlashBackIntro = localStorage.getItem('FlashBackIntro');
    return storedFlashBackIntro ? true : false;
  })
  
  return (
    <>
      <h1>Flashback Introduction</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="FlashBackIntro"
          studentName={props.studentName}
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default FlashBackIntro;