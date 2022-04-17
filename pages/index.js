import DonationCard from "../components/donation_card";
import TittleCard from "../components/tittle_card";

export default function Home() {
    return (
        <>
            <TittleCard />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
                <DonationCard />
            </div>
        </>
    )          
}