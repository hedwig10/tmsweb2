import React from "react";
import {GoogleMap, withScriptjs, Marker, withGoogleMap} from 'react-google-maps';


import '../gomaps.css';




function Map() {
  return(<GoogleMap  defaultZoom={10} 
  defaultCenter={{lat: 30.4903508, lng: -97.6840255}} />

  );
  
}


const WrappedMap =  withScriptjs(withGoogleMap(Map));

export default function () {
return( 
<div style={{width: 'vw' ,height: '10vh', padding: '75px 200px', position: 'middle'}}>
  <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{ height: `50%` }} />}
    containerElement={ <div style={{ height: `400px` }} />}
    mapElement= {<div style={{ height: `60%` }} />}
    
  />
</div>
);
}