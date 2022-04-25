import React, { useContext, useState } from 'react';

export const StateContext = React.createContext()
export const StateUpdateContext = React.createContext()

export function useChainState() {
    return useContext(StateContext)
}

export function useChainStateUpdate() {
    return useContext(StateUpdateContext)
}

export function StateProvider({ children, state }) {
    const [chainState, setChainState] = useState(state);
    
    return (
        <StateContext.Provider value= { chainState }>
            <StateUpdateContext.Provider value= { setChainState }>
                { children }
            </StateUpdateContext.Provider>
        </StateContext.Provider>
    )
}
