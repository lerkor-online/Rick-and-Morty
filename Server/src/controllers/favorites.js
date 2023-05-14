let myFavorites = [];

function postFav(req, res){
    console.log(req.body);
    const {character} = req.body;

    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

function deleteFav(req, res){
    /* console.log(req.params.id) */
    const {id} = req.params;

    myFavorites  = myFavorites.filter(character => character.id !== Number(id))

    res.status(200).json(myFavorites);
}

module.exports = {
    postFav ,
    deleteFav ,
}