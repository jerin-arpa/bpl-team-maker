import PropTypes from 'prop-types';

const Cart = ({ allPlayers, totalCost }) => {

    return (
        <div>
            <div className="bg-white rounded-2xl text-center text-2xl font-bold py-5">
                <h1>Player Added: {allPlayers.length}</h1>
                <hr className="my-4 mx-4" />
                <p>Total Cost: {totalCost}</p>
            </div>

            <div className="bg-white rounded-2xl py-5 pb-10 mt-5">
                <h2 className="text-center text-2xl font-bold">Added Players Name</h2>

                <div className='mt-5'>
                    {
                        allPlayers.map((player, idx) => (
                            <div key={idx} className='ml-10 text-lg font-bold'>
                                <li>{player.name}</li>
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