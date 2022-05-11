import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch((url), {
        headers: {
          Authorization: '563492ad6f91700001000001abdc5d7783dd46c08353dff6aca404b0'
      }})
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsLoading(false);
        setPhotos(data.photos);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsLoading(false);
        setError(err.message);
      })
    }, 1000);
  }, [url])

  return { photos, isLoading, error };
}
 
export default useFetch;