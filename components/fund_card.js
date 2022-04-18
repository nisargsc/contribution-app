import Link from "next/link";

const FundCard = ({children}) => {
    return (
        <div className="fund-card flex items-center justify-center flex-col">
            <p className="mt-2 text-lg font-medium">Title of the Fund</p>
            <Link href="funds/1"><button className="button"> <a>Donate</a> </button></Link>
        </div>
        )
    }
    
export default FundCard;