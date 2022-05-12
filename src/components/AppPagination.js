import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        zIndex: 200,
        backgroundColor: "lightblue",
        opacity: 0.75,
        padding: "10px 80px",
        color: "primary",
        width: "100%",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
}))



const AppPagination = ({ setCurrentPage, pageNumber }) => {
    const classes = useStyles()

    //handle the current page
    const handleChange = (currentPage) => {
        setCurrentPage(currentPage)
        window.scroll(0 ,0)
    }

  return (
    <div className={classes.container}>
        <div className={classes.root}>
            <Pagination
            onChange={e => handleChange(e.target.textContent)}
            style={{ 
                display: 'flex',
                justifyContent: 'center',
            }} 
            variant="outline" 
            count={pageNumber}/>
        </div>
    </div>
  )
}

export default AppPagination