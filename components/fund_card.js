import Link from "next/link";;

const FundCard = ({fund, fund_id}) => {
    const path = "funds/"+fund_id
    return (
        <div className="fund-card flex items-center justify-center flex-col">
            <p className="mt-2 text-lg font-medium">{fund.title}</p>
            <Link href={path}><button className="button"> <a>Donate</a> </button></Link>
        </div>
        )
    }
    
export default FundCard;