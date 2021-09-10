import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import mapbox from "mapbox-gl";

mapbox.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

export const MapLayout = ({children}) => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(30.319814);
    const [lat, setLat] = useState(59.886215);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapbox.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <main className="map-layout">
            {children}
            <div ref={mapContainer} className="map-container"/>
        </main>
    );
};