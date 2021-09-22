import React, { useRef, useEffect,  useState } from 'react';
import './Home.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import GuestNavbar from '../GuestNavbar/GuestNavbar'
import SearchPanel from '../SearchPanel/SearchPanel'
import PostCard from '../PostCard/PostCard'
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ2aW5ob2R6aWMxIiwiYSI6ImNrazJicWF1aTB6bXkydnJyZTk3cTk5OWwifQ.ll0tA2_cIQhh2qrQURfwxw';


function Home() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-70.9);  
    const [lat] = useState(42.35);
    const [zoom] = useState(9);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/ervinhodzic1/ckpprr5md0jj017ldbufi821v',
        center: [lng, lat],
        zoom: zoom
        });
    });
    return (
        <div className="home">
            <GuestNavbar />
            <SearchPanel />
            <div ref={mapContainer} className="map-container" />
            <div className="popular">
                <p className="popular-text">Popular videoz</p>
                <p className="see-all">See all</p>
            </div>
            <div className="posts">
                <PostCard />
            </div>
            
        </div>
    )
}

export default Home
