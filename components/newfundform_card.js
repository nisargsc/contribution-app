const NewFundFormCard = () => {
    return (
            <div className="newfundform-card flex flex-col pt-2">
                <input type="text" placeholder="Title" className="input"></input>
                <textarea type="text" placeholder="Description" className="input min-h-[3.5rem] resize-none focus:resize-y overflow-y-auto"></textarea>
                <input type="password" placeholder="PAN number" className="input"></input>
                <div className="flex justify-center">
                    <button className="button font-medium"> <a> Create New Fund </a></button>
                </div>
            </div>
        )
    }
    
export default NewFundFormCard;