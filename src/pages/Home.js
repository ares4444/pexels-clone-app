import React from 'react'
import { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import useFetch from '../useFetch';
import MultiActionAreaCard from '../components/ImageCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function Home() {
  const [ term, setTerm ] = useState('');
  const { photos, isLoading, error } = useFetch(`https://api.pexels.com/v1/search?query=${term}`);

  return (
    <>
      <div className="home">
        <Container sx={{marginY: 5}}>
          { error && <div>{ error }</div> }
          { isLoading && <div>Loading...</div> }
        <form>
          <DebounceInput 
          className='searchbar-input' 
          type='text' 
          placeholder="Search..."
          minLength={2}
          debounceTimeout={1000}
          onChange={e => setTerm(e.target.value)}
          ></DebounceInput>
        </form>
          <Grid container spacing={4}>
            {photos.map((photo, index) => <MultiActionAreaCard photo={photo} key={index}/>)}
          </Grid>
        </Container>
      </div>
    </>
    
  )
}
