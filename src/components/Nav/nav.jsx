import SearchBar from "../SearchBar/SearchBar"
import './nav.css'
import { Link } from 'react-router-dom';
import logo from  '../../img/tt.png';

export default function Nav({onSearch, onChange, random, logout} ){// Nav nos envia la prop para poder usarla en Searchbar

    return(
        <div>
        <div className="navcontainer">
            <img src={logo} alt="" width="8%" />  
                <div className="menu-container">            
                <Link to='/home'><button className="buttonRoute">Home</button></Link>
                <Link to='/about'><button className="buttonRoute">About</button></Link>
                <Link to='/favorites'><button className="buttonRoute">Favorites</button></Link>
                </div>
            <SearchBar onSearch={onSearch} onChange={onChange}/>
            <button className="buttonRandom" onClick={()=>random()}>Add Random</button>
            <button className="buttonLogout" onClick={()=>logout()}>Logout</button>
        </div>
        </div>
    );
}