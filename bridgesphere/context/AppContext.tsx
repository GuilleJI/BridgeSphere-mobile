/*
File will contian:
- The shape of the state (what pieces of info im tracking)
- A reducer (rules for how the state can change)
- The Context itself (the shared brain)
- The Provider (wrapper around the app)
*/
import { createContext, useReducer, useContext } from "react";


// Defining State type - Telling TypeScript what the app will keep track of. 
type Role = "client" | "agent" | "brokerage" | null; 

interface State {
    is_authenticated: boolean; 
    role: Role; 
    onboarding_complete: boolean; 
}

// Create a reducer - describing how the app can change its memory
type Action = 
| { type: "LOGIN"}
| { type: "LOGOUT"}
| { type: "SET_ROLE"; payload: Role}
| { type: "COMPLETE_ONBOARDING"}; 

function reducer(state: State, action: Action): State {
    switch(action.type){
        case "LOGIN":
            return {...state, is_authenticated: true}; 
        case "LOGOUT":
            return { is_authenticated: false, role: null, onboarding_complete: false};
        case "SET_ROLE":
            return {...state,role:action.payload}; 
        case "COMPLETE_ONBOARDING": 
            return{...state, onboarding_complete:true};
        default: 
            return state; 
    }
}

// Creating Context - this is the shared object that the app will use everywhere
const AppContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>; 
}>({
    state: {
        is_authenticated: false,
        role: null,
        onboarding_complete: false, 
    },
    dispatch: () => null,

});

// Creating the Provider - This makes the memory available to the whole app.
export const AppProvider = ({ children }: {children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, {
        is_authenticated: false, 
        role: null, 
        onboarding_complete: false,
    });

    return (
        <AppContext.Provider value={{ state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

// Creating a Custom Hook - making it easy to use in app's screens
export const useAppContext = () => useContext(AppContext); 

