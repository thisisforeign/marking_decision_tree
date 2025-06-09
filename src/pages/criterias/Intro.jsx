import './Intro.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Intro = (props) => {
  const params = useParams();
  const location = useLocation();
  const { studentName } = location.state || {studentName: 'NO NAME PROVIDED'};
  const [rated, setRated] = useState(() => {
    const storedIntro = localStorage.getItem('Intro');
    return storedIntro ? true : false;
  })
  
  return (
    <>
      <h1>Introduction</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="Intro"
          studentName={studentName}
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default Intro;