import FundCard from "../components/fund_card";
import NewFundFormCard from "../components/newfundform_card";
import TitleCard from "../components/title_card";

export default function Home({ funds, fund_id_list }) {
    return (
        <>
            <TitleCard />
            <NewFundFormCard />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                { fund_id_list.map((fund_id) => <FundCard fund={funds[fund_id]} fund_id={fund_id}/> ) }
            </div>
        </>
    )          
}

export async function getStaticProps() {
    const res = await fetch('http://127.0.0.1:5000/chain/state')
    const {state} = await res.json()
    const {funds} = state
    const {fund_id_list} = state
    // console.log(fund_id_list)
    // console.log(state)

    return {
      props: {
        state,
        funds,
        fund_id_list
      },
    }
}