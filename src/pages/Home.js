import React from 'react'
import { useState } from 'react';
import {DebounceInput} from 'react-debounce-input';
import useFetch from '../useFetch';
import MultiActionAreaCard from '../components/ImageCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
// import Pagination from '@material-ui/lab/Pagination'
import AppPagination from '../components/AppPagination';


export default function Home() {
  const [ term, setTerm ] = useState('');
  // const [ totalResults, setTotalResults ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const { photos, isLoading, error, resultsPerPage } = useFetch(`https://api.pexels.com/v1/search/?page=${currentPage}&query=${term}`);

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

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
          onChange={handleChange}
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
      </div>
      <AppPagination setCurrentPage={setCurrentPage} pageNumber={resultsPerPage}/>
    </>
    
  )
}
