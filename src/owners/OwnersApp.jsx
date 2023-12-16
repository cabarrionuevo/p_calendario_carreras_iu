import React, { useState } from 'react'
import { SearchCategory } from './components/SearchCategory'
import { OwnersGrid } from './components/OwnersGrid'



const OwnersApp = () => {

  const [ownerToSearch, setOwnerToSearch] = useState('')
  
  const onAddOwner = (value)=>{
    console.log(value);
    setOwnerToSearch(value);
  }

  return (
    <>      
      <SearchCategory 
        onAddOwner = {onAddOwner}/>
      <OwnersGrid/>
    </>
  )
}
export default OwnersApp
