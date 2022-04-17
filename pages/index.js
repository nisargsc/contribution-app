import Link from "next/link";
import FundCard from "../components/fund_card";
import TittleCard from "../components/tittle_card";

export default function Home() {
    return (
        <>
            <TittleCard />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <FundCard>
                    <Link href="funds/1"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/2"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/3"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/4"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/5"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/6"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>

                <FundCard>
                    <Link href="funds/7"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </FundCard>
            </div>
        </>
    )          
}