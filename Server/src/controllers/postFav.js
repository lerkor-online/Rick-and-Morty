const { Favorite } = require("../DB_Connection");

const postFav = async (req, res) => {
  let { id, name, status, image, species, gender } = req.body;
  try {
    if (name && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: {id, name, status, image, species, gender },
        
      });
      const favs = await Favorite.findAll();
      //cuando tengan muchos usuarios tiene que relacion el favorito a un usuario
      //User.addFavorite(favs)
      console.log(await Favorite.findAll())
      return res.status(201).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = postFav;