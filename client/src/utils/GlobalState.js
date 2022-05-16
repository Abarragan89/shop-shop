// 'createContext is like the container to hold our global state
// 'useContext' allows us to use the data in global state
import React, { createContext, useContext } from 'react';
import { useProductReducer  } from './reducers';

// instantiate the global state
const StoreContext = createContext();
// every Context Object comes with a Provider and a Consumer
const { Provider } = StoreContext;


const StoreProvider = ({ value = [], ...props }) => {
    // returns up-to-date state and a method to update our state 'dispatch'.
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works
    console.log(state);
    // The provider has access to up-to-date state and the method to change state. Provider component will wrap the whole App.
    return<Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };