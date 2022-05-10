import React, { Fragment, useEffect,useState } from "react";

import ProfileItem from "./ProfileItem";


const SearchForm =() => {
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);


 useEffect(() => {
   getData()

}, []);

const getData= async () => {
  const  data = await fetch("/api/profile")
  const profile = await data.json();
  setAllData(profile);
  setFilteredData(profile);
  
    
     }
   const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.name.search(value) != -1;
    });
    setFilteredData(result);
    }
  
  return (
 
      <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and connect with
            developers
          </p>
          <input type="text" onChange={(event) =>handleSearch(event)} />

        
    <div className=' large '>
         {
            
            filteredData.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          }
        </div>
      
  
  </Fragment>

  );
};




export default  SearchForm
