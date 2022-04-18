const TittleCard = () => {
    return (
        <div className="tittle-card flex items-center flex-col">
            <p className="m-4 text-center text-3xl">
                <span>This is anonymous contributions application.</span>
            </p>
            <p className="m-2 text-center text-xl">
                <span>
                    Here you can create a fund and raise money while staying anonymous.
                    We use "zero knowledge proof" (ZKP) to verify your identity while keeping it hidden even from us.
                    ZKP is used on your PAN number to verify your identity.
                </span>
            </p>
            <p className="m-2 text-center text-xl">
                <span>You can donate to existing funds by clicking on donate button in respective card.</span>
                <span className="block">You can also create a new fund by using the form below.</span>
            </p>
        </div>
        )
    }
    
export default TittleCard;