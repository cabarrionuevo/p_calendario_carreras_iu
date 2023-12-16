import React, { useEffect, useState } from 'react'
import { getOwners } from '../helpers/getOwners';

export const useFetchOwners = ( ownerName ) => {
  
    const [owner, setOwner] = useState({});    
    
    useEffect(() => {
      getOwners(ownerName).then(owner =>{
        setOwner(owner)
      })          
    },[])
    

  return (
    owner
  )
}
