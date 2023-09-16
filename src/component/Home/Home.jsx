import { useState } from "react";
import { useEffect } from "react";
import './home.css'
import Cart from "../Cart/Cart";

const Home = () => {

    const [players, setPlayers] = useState([]);
    const [allPlayers, setAllPlayers] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, []);


    const handleAddPlayer = (player) => {
        const isExist = allPlayers.find(item => item.id === player.id);
        let cost = player.salary;

        if (isExist) {
            return alert('This item is already selected')
        }
        else {

            allPlayers.forEach(item => {
                cost += item.salary;
            })

            const newPlayer = ([...allPlayers, player]);
            setTotalCost(cost);
            setAllPlayers(newPlayer);
        }
    }


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
                            players.map(player => (
                                <div key={player.id} className="rounded-2xl shadow-2xl bg-white">
                                    <img className="rounded-t-2xl w-full h-36" src={player.image} alt="" />

                                    <div className="my-5 px-4">
                                        <h2 className="text-xl"><span className=" font-bold">Name:</span> {player.name}</h2>

                                        <p className="text-xl"><span className=" font-bold">Age:</span> {player.age}</p>

                                        <p className="text-xl"><span className=" font-bold">Country:</span> {player.country}</p>

                                        <p className="text-xl"><span className=" font-bold">Salary:</span> {player.salary}</p>
                                    </div>

                                    <div className="px-4 pb-4">
                                        <button onClick={() => handleAddPlayer(player)} className="btn btn-neutral w-full font-extrabold">
                                            Add This Player
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    {/* cart container */}
                    <div className="w-1/3">
                        <Cart allPlayers={allPlayers} totalCost={totalCost}></Cart>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;