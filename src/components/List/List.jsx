import React from 'react'
import { useState ,useEffect, createRef} from 'react';
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './style'
function List({places, childClicked , isLoading}) {
  const classes=useStyles();
  const [type,setType]=useState('restuarants')
  const [rating,setRating]=useState('')

  console.log(({childClicked}))

  const [elRefs,setElRefs] = useState([])
  useEffect(()=>{
    const refs = Array(places?.length).fill().map((_,i)=>elRefs[i] || createRef())
    setElRefs(refs)
  },[places])

    return (
      <div className={classes.container}>

        <Typography variant='h5'>Restaurants,Hotels, & Attractions around you</Typography>
        {isLoading?(
        <div>
          <CircularProgress size="5rem"/>
        </div>
        ): (

          <>
        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e)=>setType(e.target.value)}>
            <MenuItem value='restuarants'>Restuarants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>above 3.0</MenuItem>
            <MenuItem value={4}>above 4.0</MenuItem>
            <MenuItem value={4.5}>above 4.5</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3} className={classes.list}>
          {places?.map((place,i)=>(
             <Grid ref={elRefs[i]} item key={i} xs={12}>
                   <PlaceDetails place={place}
                   selected = {Number(childClicked) === i}
                   refProp = {elRefs[i]}
                   />
              </Grid>
          ))}

        </Grid>
        </>
        )}

      </div>
    )
}

export default List;
