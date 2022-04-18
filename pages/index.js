import Link from "next/link";
import FundCard from "../components/fund_card";
import NewFundFormCard from "../components/newfundform_card";
import TittleCard from "../components/tittle_card";

export default function Home() {
    return (
        <>
            <TittleCard />
            <NewFundFormCard />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <FundCard />
                <FundCard />
                <FundCard />
                <FundCard />
                <FundCard />
                <FundCard />
                <FundCard />
            </div>
        </>
    )          
}