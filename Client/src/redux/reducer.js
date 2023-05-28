import {ADD_FAV, REMOVE_FAVORITE, FILTER, SORT, RESET} from './actions';

const initialState = {myFavorites : [], allCharacters:[]} //allCharacters es una copia de favorites

function rootReducer(state = initialState, {type, payload}){
    
    switch (type){
        
        case ADD_FAV:
            /* const added = [...state.myFavorites, action.payload]
            return{
                ...state, 
                myFavorites: [...added],
                allcharacters: [...added],
            } */
            return { ...state,
                 myFavorites: payload,
                  allCharacters: payload };


        case REMOVE_FAVORITE:
            /* const remove = state.myFavorites.filter(
                (character) => character.id !== action.payload)
            return{
                ...state,
                myFavorites: [...remove],
                allcharacters: [...remove],
            } */
            return { ...state,
                 myFavorites: payload,
                allCharacters: payload, };

        case FILTER:
            /* let filter;
            filter = state.allCharacters.filter( 
                (character) => character.gender === payload)
            return{
                ...state,
                myFavorites : [...filter]
            } */
            return{
                ...state,
                myFavorites: state.allCharacters.filter((chr)=>chr.gender === payload)
            };

        case SORT:
            let sorted;

            if(payload === "Ascendente"){
                sorted = state.myFavorites.sort((a , b) => a.id > b.id ? 1 : -1)
            } else if (payload === "Descendente"){
                sorted = state.myFavorites.sort((a , b) => a.id < b.id ? 1 : -1)
            }

            return{
                ...state,
                myFavorites : [...sorted],
            
            }

        case RESET:
            return{
                ...state, 
                myFavorites: state.allCharacters,
            }



        default: 
            return state
    }
}



export default rootReducer;