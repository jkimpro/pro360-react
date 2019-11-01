import React from 'react';

let RootContext = React.createContext();

let RootProvider = ({children}) =>{
    
    let [item, setItem] = React.useState();
    let context = {item, setItem};
    return (
        <RootContext.Provider value = {context}>
            {children}
        </RootContext.Provider>
    );
}

export default RootProvider;