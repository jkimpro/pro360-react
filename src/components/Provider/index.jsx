import React, { useState } from "react";

const CardContext = React.createContext();


const CardProvider = ({ children }) => {
    const [cardData, setCardData] = useState([]);
    return (
        <CardContext.Provider value={[cardData, setCardData]}>
            {children}
        </CardContext.Provider>
    );
};

export {CardContext,CardProvider};