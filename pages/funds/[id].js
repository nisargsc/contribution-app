import Link from "next/link";
import Donation from "../../components/donation";
import FullpageCard from "../../components/fullpage_card";

export default function FundDetails() {
    return (
        <FullpageCard>
            <div className="flex flex-col">
                <Link href="/"><button className="button w-fit">
                    <a className="flex items-center"> { back_svg } <span className="ml-1"> back </span> </a>
                </button></Link>

                <span className="m-2 mb-4 text-3xl text-center font-medium"> Tittle of the Fund </span>

                <p className="m-responsive text-justify">
                    Description of the fund...... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="m-responsive flex flex-col lg:flex-row border border-gray-300 bg-gray-100 rounded-md shadow-sm">
                    <input type="number" placeholder="Amount" className="input flex-1"></input>
                    <input type="password" placeholder="PAN number" className="input flex-1"></input>
                    <button className="button w-fit"> <a> Donate </a></button>
                </div>
                
                <span className="m-2 text-xl text-center font-medium"> Previous Donations </span>
                <ul className="flex flex-col-reverse min-h-[4rem] max-h-60 overflow-y-auto m-responsive border border-gray-300 bg-gray-100 rounded-md shadow-sm">
                    <Donation i="1" />
                    <Donation i="2"/>
                    <Donation i="3"/>
                    <Donation i="4"/>
                    <Donation i="5"/>
                    <Donation i="6"/>
                </ul>
            </div>
        </FullpageCard>
    )          
}

const back_svg = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711
                    7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 
                    11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 
                    7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 
                    2.95118 6.85355 3.14645Z" fill="black">
                    </path>
                </svg>
