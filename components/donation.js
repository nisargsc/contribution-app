const Donation = ({i}) => {
    return (
        <div className="m-1 flex border border-gray-400 bg-white rounded-md shadow-sm">
            <span className="m-2"> Amount of {i} added to the fund </span>
        </div>
        )
    }
    
export default Donation;