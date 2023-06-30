import React, { useContext, useState, useEffect } from 'react';
import { Songs } from '../../Context';

function ListSong() {
    const { dataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);

    const handlePlaySong = (songId) => {
        setIdSong(songId);
        handleSetSong(songId);
    };
    useEffect(() => {
        setIdSong(song.id);
    }, [song]);

    return (
        <div className="col-span-2 bg-slate-700 overflow-y-scroll">
            <table className="table-auto w-full relative">
                <thead className="sticky top-0 z-10 bg-slate-700 text-white h-12 text-xl">
                    <tr>
                        <th className="w-[10%]">ID</th>
                        <th className="text-left">Title</th>
                        <th className="w-[20%]">Artist</th>
                        <th>
                            <i className="w-[15%] fa fa-download"></i>
                        </th>
                    </tr>
                </thead>
                <tbody className="mt-4 h-full bg-[#24894c] text-xl">
                    {dataSongs.map((song, index) => {
                        return (
                            <tr
                                onClick={() => handlePlaySong(song.id)}
                                key={index}
                                className={`h-12 text-gray-800 hover:bg-[#1e7e34] ${
                                    idSong === song.id ? 'text-gray-800 bg-[#1e7e34]' : ''
                                }`}
                            >
                                <td className="text-center">{song.id}</td>
                                <td className="text-left">{song.name}</td>
                                <td className="text-center w-[20%]">{song.author}</td>
                                <td className="text-center w-[15%]">
                                    <a href="#" rel="noreferrer">
                                        <i className="fa fa-download"></i>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
