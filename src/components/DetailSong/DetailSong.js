function DetailSong() {
    return (
        <div className="col-span-1 p-3 bg-slate-700">
            <div className="flex flex-col items-center">
                <div className="text-[#3cbf6c] font-bold">
                    <p>Now Playing</p>
                </div>
                <div className="text-2xl text-white">
                    <p>Making My Way</p>
                </div>
            </div>

            <div>
                <img
                    className="w-[250px] h-[250px] m-auto"
                    src="https://i.scdn.co/image/ab67616d0000b2730b303433c40b65a63dec0a04"
                    alt="avatar"
                />
            </div>
            <div className="pt-6 flex justify-center items-center">
                <img
                    className="rounded-full w-[50px] h-[50px] mr-2"
                    src="https://i.scdn.co/image/ab67616d0000b2730b303433c40b65a63dec0a04"
                    alt="avatar"
                />
                <span className="text-2xl text-white leading-normal">Son Tung M-TP</span>
            </div>
        </div>
    );
}

export default DetailSong;
