const Donation = ({donation}) => {
    return (
        <li className="m-1 p-1 flex flex-col lg:flex-row items-center border border-gray-400 bg-white rounded-md shadow-sm">
            <span className="m-1"> Amount of {donation.amount} added to the fund </span>
            <span className="lg:ml-auto text-sm font-light"> Timestamp: {donation.timestamp} </span>
        </li>
        )
    }
    
export default Donation;