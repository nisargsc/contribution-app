const NewFundFormCard = () => {
    return (
            <div className="card flex flex-col p-2 items-center">
                <span className="m-2 text-center">Information in blockchain is immutable so please verify before submiting</span>
                <input type="text" placeholder="Title" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2"></input>
                <textarea type="text" placeholder="Description" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-[3.5rem] resize-none focus:resize-y overflow-y-auto"></textarea>
                <input type="password" placeholder="PAN number" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2"></input>
                <div className="flex justify-center">
                    <button className="button font-medium"> <a> Create New Fund </a></button>
                </div>
            </div>
        )
    }
    
export default NewFundFormCard;