const TittleCard = ({children}) => {
    return (
        <div className="tittle-card flex items-center  flex-col">
            <p className="m-4 text-center text-3xl">
                <span>This is anonymous contributions application.</span>
            </p>
            <p className="m-2 text-center text-xl">
                <span>
                    Here you can create a fund and raise money while staying anonymous.
                    We use zero knowledge proof to verify your identity while keeping it hidden even from us.
                </span>
            </p>
            <p className="m-2 text-center text-xl">
                <span>Click the button bellow to create new fund.</span>
                <span className="block">You can also donate to existing funds by clicking on donate button in respective card.</span>
            </p>
            <a className="mt-auto"><button className="button font-medium">Create New Fund!!</button></a>
        </div>
        )
    }
    
export default TittleCard;