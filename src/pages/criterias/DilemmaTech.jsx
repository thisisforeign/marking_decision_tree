import './DilemmaTech.css'
import CriteriaRating from '../CriteriaRating';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const DilemmaTech = (props) => {
  const params = useParams();
  const location = useLocation();
  const { studentName } = location.state || {studentName: 'NO NAME PROVIDED'};
  const [rated, setRated] = useState(() => {
    const storedDilemmaTech = localStorage.getItem('DilemmaTech');
    return storedDilemmaTech ? true : false;
  })
  
  return (
    <>
      <h1>Dilemma Technique</h1>

      {!params.rating ? (
        <CriteriaRating 
          criteriaName="DilemmaTech"
          studentName={studentName}
        />
      ) : (
        <h1>Changed</h1>
      )}
    </>
  )
}

export default DilemmaTech;