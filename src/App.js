import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="grid grid-cols-3">
                <DetailSong />
                <ListSong />
            </div>
        </div>
    );
}

export default App;
