import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

interface MapProps {}

const Map: React.FC<MapProps> = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const handleViewportChange = (newViewport: any) => {
    setViewport(newViewport);
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''}
      onViewportChange={(newViewport: any) => setViewport(newViewport)}
    >
      <Marker latitude={37.7577} longitude={-122.4376}>
        <div>Your Marker Component</div>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
