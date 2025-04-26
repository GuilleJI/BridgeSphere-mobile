/*
File includes:
- The shape of the state (what pieces of info im tracking)
- A reducer (rules for how the state can change)
- The Context itself (the shared brain)
- The Provider (wrapper around the app)
*/
import { createContext, useReducer, useContext } from "react";

// ---- Defining the shape of the State -- //
// Defining State type - Telling TypeScript what the app will keep track of. 
type Role = "client" | "agent" | "brokerage" | null; 

// Full state structure that the app will track
interface State {
    is_authenticated: boolean; 
    role: Role; 
    onboarding_complete: boolean; 
}

// -- Defining how State can change --- //
// Different types of actions the app can dispatch
type Action = 
| { type: "LOGIN"}
| { type: "LOGOUT"}
| { type: "SET_ROLE"; payload: Role}
| { type: "COMPLETE_ONBOARDING"}; 

// Reducer function: handles state transitions based on actions
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
            return state; // fallback to current state if action type is unrecognized
    }
}

// --- Creating the shared Context --- // 
// The app can access this context to read or update the global state
const AppContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>; 
}>({
    state: {
        is_authenticated: false,
        role: null,
        onboarding_complete: false, 
    },
    dispatch: () => null, // placeholder until overridden by Provider

});

// -- Creating the Provider -- //
// This component wraps around the app to provide state access everywhere
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

// -- Creating a custom Hook -- //
// Easy-to-use hook for accessing the app's Context 
export const useAppContext = () => useContext(AppContext); 

