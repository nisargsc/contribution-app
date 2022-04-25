import React from 'react';
import { useChainStateUpdate } from './appcontext';

async function updateState(title, description){
    const body = JSON.stringify({
        title: title, 
        description: description
    })
    console.log(body)
    try{
        const res = await fetch('http://127.0.0.1:5000/funds/new',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: body})
        console.log(res.status)
        const {state} = await res.json()
        // console.log(state)
        return state
    }catch(e){
        console.log(e)
    }
}

const NewFundFormCard = () => {
    const setChainState = useChainStateUpdate()
    
    let titleRef = React.createRef();
    let descRef = React.createRef();
    let panRef = React.createRef();

    return (
            <div className="card flex flex-col p-2 items-center">
                <span className="m-2 text-center">Information in blockchain is immutable so please verify before submiting</span>
                <input ref={titleRef} type="text" placeholder="Title" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2"></input>
                <textarea ref={descRef} type="text" placeholder="Description" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-[3.5rem] resize-none focus:resize-y overflow-y-auto"></textarea>
                <input ref={panRef} type="password" placeholder="PAN number" className="input w-full sm:w-3/4 md:w-2/3 lg:w-1/2"></input>
                <div className="flex justify-center">
                    <button className="button font-medium" onClick={
                        () => {
                            // setChainState({})
                            setChainState(updateState(titleRef.current.value, descRef.current.value))
                            titleRef.current.value="";
                            descRef.current.value="";
                            panRef.current.value=""
                        }}> 
                        <a> Create New Fund </a>
                    </button>
                </div>
            </div>
        )
    }
    
export default NewFundFormCard;