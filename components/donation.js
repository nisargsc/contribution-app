const Donation = ({i}) => {
    return (
        <li className="m-1 flex border border-gray-400 bg-white rounded-md shadow-sm">
            <span className="m-2"> Amount of {i} added to the fund </span>
        </li>
        )
    }
    
export default Donation;