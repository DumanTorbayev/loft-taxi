import React, {useEffect, useRef, useState} from 'react';
import styles from './map.module.scss';
import mapbox from "!mapbox-gl";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {getCoordinates} from "../../store/selectors";

export const MapContainer = ({children}) => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(30.319814);
    const [lat, setLat] = useState(59.886215);
    const [zoom, setZoom] = useState(9);
    const coordinates = useSelector(state => getCoordinates(state.order))

    const handleDrawRoute = map => {
        map.flyTo({
            center: coordinates[0],
            zoom: 15
        });

        map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": "#ffc617",
                "line-width": 8
            }
        });
    }

    const drawRoute = (map, coordinates) => {
        if (coordinates.length !== 0) {

            map.on('load', () => {
                handleDrawRoute(map)
            })

            if (map.isStyleLoaded()) {
                handleDrawRoute(map)
            }
        } else {
            if (map.getLayer('route')) {
                map.removeLayer('route')
                map.removeSource('route')
                map.flyTo({
                    center: [lng, lat],
                    zoom: 9,
                })
            }
        }
    };

    useEffect(() => {
        mapbox.accessToken = 'pk.eyJ1IjoiZC10b3JiYWV2IiwiYSI6ImNrdGNsMHh5ZDI2ejUydm45NzVubWdpZXIifQ.ZCX_RjdS6DGeZs7UsC54OA'

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

    useEffect(() => {
        drawRoute(map.current, coordinates)
    }, [coordinates])

    return (
        <main className={styles.layout}>
            {children}
            <div ref={mapContainer} className={styles.container}/>
        </main>
    );
};

MapContainer.propTypes = {
    children: PropTypes.node
}