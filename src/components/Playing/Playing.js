import { useContext } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../../Context';
import './Playing.css';
function Playing() {
    const { song, handleSetSong } = useContext(Songs);
    const handleClickNext = () => {
        const songId = song.id + 1;
        handleSetSong(songId);
    };
    const handleClickPrev = () => {
        const songId = song.id - 1;
        handleSetSong(songId);
    };
    const handleEnd = () => {
        const songId = song.id + 1;
        handleSetSong(songId);
    };
    return (
        <AudioPlayer
            className="music-player"
            src={song.url}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
            onEnded={handleEnd}
        />
    );
}

export default Playing;
