// import { createContext, useContext } from 'react';
// import { useState } from 'react';


// const AppContext = createContext(null);

// export const useAppContext = () => {
//     const context = useContext(AppContext);

//     if(context === undefined){
//         throw new Error('AppContext must be within appContextProvider')
//     }

//     return context;
// }


// const AppContextProvider = ({children}) => {
//     const [favorites,setFavorites] = useState([])

//     const addToFavorites = (book) => {
//         const oldFavorites = [...favorites];

//         const newFavorites = oldFavorites.concat(book);

//         setFavorites(newFavorites);
//     }

//     const removeFromFavorites = (id) => {

//         const oldFavorites = [...favorites];
//         const newFavorites = oldFavorites.filter((book) => book.id !== id);

//         setFavorites(newFavorites);
//     }


//     return (
//         <AppContextProvider
//              value={{ favorites, addToFavorites, removeFromFavorites }}>
//             {children}
//         </AppContextProvider>
//     )
// };


// export default AppContextProvider;