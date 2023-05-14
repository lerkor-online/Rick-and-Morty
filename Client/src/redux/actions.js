import axios from 'axios';

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const SORT = "SORT";
export const RESET = "RESET";


/* export function addFavorite(character){ */
    /* return{
        type: "ADD_FAVORITE",
        payload: character,
    } */
/*     const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(( data ) => {
          return dispatch({
             type: "ADD_FAVORITE",
             payload: data,
          });
       });
    };
} */

/* export function removeFavorite(id){ */
   /*  return{
        type: "REMOVE_FAVORITE",
        payload: id,
    } */
/*     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: "REMOVE_FAVORITE",
            payload: data,
      });
      });
   };
} */

export function filterCards(gender){ //filtra las cards
    return{
        type: "FILTER",
        payload: gender,
    }
}

export function sort(order){
    return{
        type: "SORT",
        payload: order,
    }
}

export function reset(){
    return{
        type: "RESET",
        
    }
}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
        const response = await axios.post(endpoint, character)
          return dispatch({
             type: 'ADD_FAV',
             payload: response.data,
          });
        }catch(error){
            throw Error(error.message);
        }
        };
    /* const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    }; */
 };
 
    // return {
    //     type: 'ADD_FAVORITE',
    //     payload: character
    // }


export const removeFav = id => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try{
        const response = (await axios.delete(endpoint)).data
            return dispatch ({
                type: 'REMOVE_FAVORITE',
                payload: response,
            }) 
        }catch(error){
            throw Error(error.message);
        }       
    } 
    /* const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({data})=>{
            return dispatch ({
                type: 'REMOVE_FAVORITE',
                payload: data,
            })
        })
    }  */ 
}
