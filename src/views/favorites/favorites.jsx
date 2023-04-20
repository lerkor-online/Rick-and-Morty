import { connect } from "react-redux";
import Cards from '../../components/Cards/Cards.jsx'


function Favorites({myFavorites}){
    return (
        <div>
            <Cards characters={myFavorites}/>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites);