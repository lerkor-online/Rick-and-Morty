import {useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

//Si es la version 5.0 en vez de  Routes ocupo Switch


import './App.css';
import Nav from './components/Nav/nav';
import Home from './views/home/home';
import Detail from './views/detail/detail';
import About from './views/about/about';
import PageNotFound from './views/pagenotfound/pagenotfound'
import LandingPage from './views/landing/landing';
import Favorites from './views/favorites/favorites';


function App() {


  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([])

  const location = useLocation();

  //Login

const navigate = useNavigate();
const [access, setAccess] = useState(false);
/* const username = 'ejemplo@gmail.com';
const password = '1password'; */

/* function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
} */

/* async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
     const { access } = data;
     setAccess(access);
  });
  setAccess(true);
     !access && navigate('/home');
} */

const login = async (userData) => {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  let response = await axios(URL + `?email=${email}&password=${password}`);
  try {
    const { access } = response.data;
     setAccess(access);
     if (!access) alert('AccessDenied');
     access && navigate('/home');
  } catch (error) {
    console.log('AXIIOS ERROR', error);
  }
};

function logout() {
      setAccess(false);
      navigate('/');
}

//App.js
useEffect(() => {
!access && navigate('/');
}, [access]);


  function changeHandler(evento) {
    evento.preventDefault();
    let inputValue = evento.target.value;
    setInput(inputValue);
  }

  async function searchHandler(evento) {
try {
  let found = characters.find(
    (ele) => ele.id === Number(input)
    )
  if (!found) {
    let response = (
      await axios.get(`http://localhost:3001/rickandmorty/character/${input}`)
    ).data;
    if(response.name){
      setCharacters([...characters, response])
    
    /* fetch(`http://localhost:3001/rickandmorty/character/${input}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }) */
  } else {
    alert("Esa carta ya fue agregada")
  }
  }  
} catch (error) {
  alert(error)
}

}

    //BUSQUEDA POR NOMBRE
    /* evento.preventDefault(); //prevent default es un metodo que nos ayuda a q los imput no nos recargue la pagina
    const result = chars.filter(elemento => 
      elemento.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      );

      setCharacters(result); */
  

  function closeHandler(id){
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter(character => character.id !== found.id);
    setCharacters(deleted);
  }

  function randomHandler(){
    let haveIt = [];

    let ranNum = (Math.random() * 826).toFixed(); //tofixed para tomar solo numeros enteros

    ranNum = Number(ranNum); //Number lo convierte en numero, porque podria ser un string

    if(!haveIt.includes(ranNum)) {
      haveIt.push(ranNum);
      fetch(`https://rickandmortyapi.com/api/character/${ranNum}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    } else {
      alert("Ya se han agregado todos los personales");
    }
  }



  return (
    <div>
      {location.pathname !== "/" && (
        <Nav
          onSearch={searchHandler}
          onChange={changeHandler}
          random={randomHandler}
          logout={logout}
        />)}

      <Routes>
        <Route exact path="/" element={<LandingPage login={login}/>} />
        <Route path="/home" element={<Home characters={characters} onClose={closeHandler} />} />
        {/* Route path="/home" component={Home} sintax v5.0 */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
