import React from 'react'
import { useState } from 'react';
import useFetch from '../useFetch';
import MultiActionAreaCard from '../components/ImageCard';
import Grid from '@mui/material/Grid';

export default function Home() {
  const [ term, setTerm ] = useState('');
  const { photos, isLoading, error } = useFetch(`https://api.pexels.com/v1/search?query=${term}`);

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      <form>
        <input 
        className='searchbar-input' 
        type='text' 
        placeholder="Search..."
        onChange={e => setTerm(e.target.value)}
        ></input>
        {/* <button className='btn btn-primary'onClick={e => setTerm(e.target.value)}>Search</button> */}
      </form>
      <hr></hr>
      <Grid container spacing={4}>
      {photos.map((photo, index) => <MultiActionAreaCard photo={photo} key={index}/>)}
      </Grid>
    </div>
  )
}
