import { useState } from "react";
import { useEffect } from "react";
import './home.css'

const Home = () => {

    const [player, setPlayer] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlayer(data))
    }, []);


    return (
        <div>
            <header className="text-white">
                <h1 className="text-center text-4xl font-bold">Bangladesh Premier League</h1>
                <h2 className="text-center font bold text-xl mt-3">This player are available for your team</h2>
            </header>

            <main className="my-10">
                {/* container */}
                <div className="flex gap-5">
                    {/* card container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-2/3">
                        {/* card */}
                        {
                            player.map(player => (
                                <div key={player.id} className="rounded-2xl shadow-2xl bg-white">
                                    <img className="rounded-t-2xl w-full h-36" src={player.image} alt="" />

                                    <div className="my-5 px-4">
                                        <h2 className="text-xl"><span className=" font-bold">Name:</span> {player.name}</h2>

                                        <p className="text-xl"><span className=" font-bold">Age:</span> {player.age}</p>

                                        <p className="text-xl"><span className=" font-bold">Country:</span> {player.country}</p>

                                        <p className="text-xl"><span className=" font-bold">Salary:</span> {player.salary}</p>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <button className="btn btn-neutral w-full font-extrabold">
                                            Add This Player
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    {/* cart container */}
                    <div className="w-1/3">
                        <div className="bg-white rounded-2xl py-5">
                            <h2 className="text-center text-2xl font-bold">Added Players Name</h2>
                        </div>
                        <div className="bg-white rounded-2xl text-center text-2xl font-bold py-5  mt-5">
                            <h1>Player Added: 0</h1>
                            <hr className="my-4 mx-4" />
                            <p>Total Cost: 0</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;