/* import { connect } from "react-redux"; */
import Cards from '../../components/Cards/Cards.jsx';
import { useDispatch, useSelector } from "react-redux";
import { filterCards, sort, reset } from '../../redux/actions.js';


export default function Favorites(props){

const dispatch = useDispatch();
const favorites = useSelector(state => state.myFavorites);

function handleSort(e){
    dispatch(sort(e.target.value));
}

function handleFilter(e){
    dispatch(filterCards(e.target.value));
}

function handleReset(){
    dispatch(reset());
}

    return (
        <div>
            <select name="Order" onChange={handleSort}>
                <option value="" disabled selected hidden>Order</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select placeholder="Gender" onChange={handleFilter}>
            <option value="" disabled selected hidden>Gender</option>
                {["Male", "Female", "unknown", "Genderless"].map((gender) => (
                    <option value={gender}>{gender}</option>
                ))}
            </select>
            <button value="Reset" onClick={handleReset}>Reset</button>

            <Cards characters={favorites}/>
        </div>
    );
}

/* const mapStateToProps = (state)=>{
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites); */