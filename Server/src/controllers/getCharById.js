const axios = require('axios');


const URL = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req , res){

    const {id} = req.params;

    try{
        const response = (await axios.get(`${URL}${id}`)).data;

        const character = {
            id: response.id, 
            name: response.name, 
            image: response.image, 
            gender: response.gender, 
            species: response.species, 
            origin: response.origin, 
            status: response.status
        };

        res.status(200).json(character);
    } catch (error){
        res.status(500).jason({message: error.message})
    }
}

    /* axios
    .get(`${URL}${id}`)
    .then((response)=>{
        const {id, name, gender, species, origin, image, status} = response.data;
        const character = {id, name, gender, species, origin, image, status};

    character.name 
        ? res.status(200).json(character) 
        : res.status(404).send('No existe el personaje');
    }).catch((error)=>{
        res.status(500).json({message: error.message})
    }) */

        /* res.writeHead(200, {"Content-Type":"application/json"})
        .end(JSON.stringify({id, name, gender, species, origin, image, status}))
    }).catch(()=>{
        res.writeHead(500, {"Content-Type":"text/plane"})
        .end(error.message)
    }); */
    

module.exports =  getCharById ;