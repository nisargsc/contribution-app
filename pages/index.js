import Link from "next/link";
import DonationCard from "../components/donation_card";
import TittleCard from "../components/tittle_card";

export default function Home() {
    return (
        <>
            <TittleCard />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <DonationCard>
                    <Link href="contributions/1"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/2"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/3"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/4"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/5"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/6"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>

                <DonationCard>
                    <Link href="contributions/7"><a><button className="m-2 p-2 bg-teal-400 rounded hover:bg-teal-100">fullpageCard</button></a></Link>
                </DonationCard>
            </div>
        </>
    )          
}