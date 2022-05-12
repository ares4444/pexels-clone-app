import React from 'react'
import { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import useFetch from '../useFetch';
import MultiActionAreaCard from '../components/ImageCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Home() {
  const [ term, setTerm ] = useState('');
  const { photos, isLoading, error } = useFetch(`https://api.pexels.com/v1/search?query=${term}`);

  return (
    <>
      <div className="home">
        <h1>Go on, Click me!</h1>
        { error && console.log(error) }
        { isLoading && <div>Loading...</div> }
        <Box>
          <form action="" className="search-bar">
          <DebounceInput 
          className='input'
          type="search" 
          name="search" 
          pattern=".*\S.*" required 
          autoComplete='off'
          placeholder="What are you looking for?"
          minLength={2}
          debounceTimeout={1000}
          onChange={e => setTerm(e.target.value)}
          ></DebounceInput>
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
        </Box>
        <Container sx={{
          marginX: 5,
          margin: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          <Grid container sx={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 4fr)',
            gap: 1,
            columnGap: 2
            }}>
            {photos.map((photo, index) => <MultiActionAreaCard photo={photo} key={index}/>)}
          </Grid>
        </Container>
      </div>
    </>
    
  )
}
