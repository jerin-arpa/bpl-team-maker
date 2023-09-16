import PropTypes from 'prop-types';

const Cart = ({ allPlayers, totalCost }) => {

    return (
        <div className=' sticky top-0'>
            <div className="bg-white rounded-2xl text-center text-2xl font-bold py-10">
                <h1>Player Added: {allPlayers.length}</h1>
                <hr className="my-4 mx-4" />
                <p>Total Cost: {totalCost}</p>
            </div>

            <div className="bg-white rounded-2xl py-5 pb-10 mt-5">
                <h2 className="text-center text-2xl font-bold">Added Players Name</h2>

                <div className='mt-5'>
                    {
                        allPlayers.map((player, idx) => (
                            <div key={idx} className=' text-lg font-bold flex flex-col items-center'>
                                <div className='bg-gray-100 mb-3 h-20 w-3/4 rounded-2xl flex justify-between'>
                                    <p className='h-20 rounded-2xl pl-4 flex items-center'>{player.name}</p>
                                    <div className='flex items-center'>
                                        <img className='w-28 rounded-xl mr-2' src={player.image} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


Cart.propTypes = {
    allPlayers: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
}

export default Cart;