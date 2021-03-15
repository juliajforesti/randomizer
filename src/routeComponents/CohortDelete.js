import React from 'react';
import { useEffect } from 'react';
import api from '../apis/cohortApi';

const CohortDelete = (props) => {
  const {id} = props.match.params

  useEffect(() => {
    (async function(){
      try{
        await api.delete(`cohort/${id}`)
        props.history.push('/')
      }catch(err){
        console.error(err)
      }
    })()
  }, [id, props.history]);
  return (  
    <div>
      <p className="text-light">Deleting...</p>
    </div>
  );
}
 
export default CohortDelete;