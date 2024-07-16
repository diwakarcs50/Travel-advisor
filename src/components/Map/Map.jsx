import React from 'react'
import GoogleReactMap from 'google-map-react'
import { Paper,Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import useSyles from './style'
import Rating from '@material-ui/lab/Rating';
function Map({setCoordinates,setBounds,coordinates,places,setChildClicked}) {

    const classes=useSyles()
    const isDesktop=useMediaQuery('(min-width:600px)')
    // const [childClicked , setChildClicked] = useState(null)


    return (
        <div className={classes.mapContainer}>
          <GoogleReactMap
          // AIzaSyC7POdQv0NkAXvhm5xkr_UvxAV_xCTMvT0'
          bootstrapURLKeys={{key:'AIzaSyC7POdQv0NkAXvhm5xkr_UvxAV_xCTMvT0'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChildClick = {(child) => setChildClicked(child)}
          onChange={(e)=>{
            console.log(e);
             setCoordinates({lat:e.center.lat,lng:e.center.lng})
             setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
          }
        }
         
          >
         {places?.map((place,i)=>(
          <div className={classes.markerContainer}
          lat = {Number(place.latitude)}
          lng = {Number(place.longitude)}
          key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large'/>
              ):(
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.Typography} variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img className={classes.pointer}
                   src={place.photo ? place.photo.images.large.url : 'https://images.alphacoders.com/438/thumb-1920-438979.jpg'}
                   alt={place.name}
                  />
                  <Rating size='small' value={Number(place.rating)} readOnly/>
                  

                </Paper>
              )
            }

          </div>
         ))}
       </GoogleReactMap>
      </div>
       
    )
}

export default Map;
