import React from 'react'
import { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import useFetch from '../useFetch';
import MultiActionAreaCard from '../components/ImageCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box, Pagination } from '@mui/material';
// import ReactPaginate from 'react-paginate';

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
        <Container className="container" sx={{
          marginX: 5,
          margin: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          <Grid container item sx={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            columnGap: 2
            }}>
            {photos.map((photo, index) => <MultiActionAreaCard photo={photo} key={index}/>)}
          </Grid>
        </Container>
        <Box>
            <Pagination 
            count={10} 
            color="secondary"
            />
        </Box>
      </div>
    </>
    
  )
}
