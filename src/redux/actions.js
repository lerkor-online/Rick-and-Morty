export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"


export function addFavorite(character){
    return{
        type: "ADD_FAVORITE",
        payload: character,
    }
}

export function removeFavorite(id){
    return{
        type: "REMOVE_FAVORITE",
        payload: id,
    }
}