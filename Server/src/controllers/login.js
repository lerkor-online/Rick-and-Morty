const data = require('../utils/users');


const login = (req, res) =>{
    const {email, password} = req.query;
    console.log({email, password});
/* 
    const found = data.find((user)=>{ //.find devuelve la primera coincidencia
        user.username === username && user.password === password;
    });

    found */
  if(email === data[0].email && password === data[0].password){ 
        res.status(200).json({access : true})
    }else{
        res.status(200).json({access : false});
    }
 
};

module.exports = login ;