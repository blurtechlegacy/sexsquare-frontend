import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Map from './Map/Map';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Map center={{lat: 54.9862013,
                lng: 82.9154884}} zoom={17}/>
        </div>
    );
};

export default App;
