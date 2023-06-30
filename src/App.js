import './App.css';
import { useState } from 'react';
import { Songs } from './Context';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing/Playing';
import dataSongs from './data/songs.json';

function App() {
    const [song, setSong] = useState(dataSongs[0]);
    const handleSetSong = (songId) => {
        const song = dataSongs.find((song) => song.id === songId);
        if (!song) return;
        setSong(song);
    };

    return (
        <div className="App">
            <Songs.Provider value={{ dataSongs, song, handleSetSong }}>
                <Navbar />
                <div className="grid grid-cols-3" style={{ height: 'calc(100vh - 6rem - 6rem)' }}>
                    <DetailSong />
                    <ListSong />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}

export default App;
