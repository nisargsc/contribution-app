import Link from "next/link";
import Donation from "../../components/donation";
import FullpageCard from "../../components/fullpage_card";
import React from 'react';
import Router from 'next/router'
import zkp from "../../utils/zkp";

export default function FundDetails({ fund, fund_id }) {
    
    let amountRef = React.createRef();
    let panRef = React.createRef();

    return (
        <FullpageCard>
            <div className="flex flex-col">
                <Link href="/"><button className="button w-fit">
                    <a className="flex items-center"> { back_svg } <span> back </span> </a>
                </button></Link>

                <span className="m-2 mb-4 text-3xl text-center font-medium"> {fund.title} </span>

                <p className="m-responsive text-justify">
                    {fund.description}
                </p>

                <div className="m-responsive w-fit self-center flex flex-col items-center bg-gray-100 bg-opacity-20 rounded-md shadow-md">
                    <input ref={amountRef} type="number" min="0" placeholder="Amount" className="input flex-1"></input>
                    <input ref={panRef} type="password" placeholder="PAN number" className="input flex-1"></input>
                    <button className="button w-fit"onClick={
                        () => {
                            // zkp(panRef.current.value)
                            updateState(amountRef.current.value, fund_id)
                        }}> 
                        <a> Donate </a>
                    </button>
                </div>
                
                <span className="m-2 text-xl text-center font-medium"> Previous Donations </span>
                <ul className="p-2 flex flex-col-reverse min-h-[4rem] max-h-60 overflow-y-auto m-responsive bg-gray-100 bg-opacity-20 rounded-md shadow-md">
                    { fund.donations.map((donation) => <Donation donation={donation} /> ) }
                </ul>
            </div>
        </FullpageCard>
    )          
}

async function updateState(amount, fund_id){
    const body = JSON.stringify({
        amount: parseInt(amount)
    })
    console.log(body)
    try{
        console.log(fund_id)
        const res = await fetch('http://127.0.0.1:5000/donations/new?' + new URLSearchParams({
            fund_id: fund_id
        }),{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body})
        // console.log(res.url)
        // const {state} = await res.json()
        // console.log(state)
        Router.reload(window.location.pathname)
    }catch(e){
        console.log(e)
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:5000/funds?' + new URLSearchParams({
        id: id
    }))
    const {fund} = await res.json()
    // console.log(fund_id_list)
    // console.log(state)

    return {
      props: {
        fund,
        fund_id: id
      },
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:5000/chain/state')
    const {state} = await res.json()
    const {fund_id_list} = state

    const paths = fund_id_list.map(fund_id =>  { return { params : { id : fund_id } } })

    return {
      paths,
      fallback: false
    };
  }

const back_svg = <svg className="m-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711
                    7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 
                    11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 
                    7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 
                    2.95118 6.85355 3.14645Z" fill="black">
                    </path>
                </svg>