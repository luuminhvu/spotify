import React, { useContext } from 'react';
import { Songs } from '../../Context';
function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className="col-span-1 p-3 bg-slate-700">
            <div className="flex flex-col items-center">
                <div className="text-[#3cbf6c] font-bold">
                    <p>Now Playing</p>
                </div>
                <div className="text-2xl text-white text-center">
                    <p>{song.name}</p>
                </div>
            </div>
            <div className="mt-16">
                <img className="w-[250px] h-[250px] m-auto" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="pt-6 flex justify-center items-center">
                <img className="rounded-full w-[50px] h-[50px] mr-6" src={song.links.images[1].url} alt="avatar" />
                <span className="text-2xl text-white leading-normal">{song.author}</span>
            </div>
        </div>
    );
}

export default DetailSong;
