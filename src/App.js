import {useState, useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
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
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
}

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

  function searchHandler(evento) {

    let found = characters.find(
      (character) => character.id === Number(input)
    )
    if (!found) {
      fetch(`https://rickandmortyapi.com/api/character/${input}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    } else {
      alert("El personaje ya fue agregado");
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
