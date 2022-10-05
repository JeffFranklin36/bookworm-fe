import { createContext, useContext } from 'react';
import { useState } from 'react';


const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('AppContext must be within appContextProvider')
    }
}


const AppContextProvider = ({children}) => {
    const [favorites,setFavorites] = useState([])

    const addToFavorites = () => {

    }

    const removeFromFavorites = (id) => {

    }


    return (
        <AppContextProvider
             value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </AppContextProvider>
    )
}