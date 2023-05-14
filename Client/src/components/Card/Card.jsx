import styles from './Card.module.css'
import { useNavigate } from 'react-router-dom';
import { addFav, removeFav  } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card(props) {
   const navigate = useNavigate();
   const { character, onClose, addFav, removeFav, myFavorites} = props;
   const [closeBtn, setCloseBtn] = useState(true);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      if(!onClose){
         setCloseBtn(false);
      }
   }, []);



   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   function navigateHandler() {
      navigate(`/detail/${character.id}`)
   }

   const handleFavorite = () => {
      isFav ? removeFav(character.id) : addFav(props);
      setIsFav(!isFav);
      }


   return (
      <div className={styles.DivCard}>
         {closeBtn ? (
         <button className={styles.Button} onClick={() => onClose(character.id)}>X</button>) :null}
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <h2 className={styles.h2} >{character.name}</h2>
         <div className={styles.DivProps2}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>
         <img
            className={styles.Img}
            src={character.image}
            alt=""
            onClick={() => navigateHandler()} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => { // esta manera se ultiliza para componentes de clase, sirve para poder ulilizar esta funciones como props
   return {
      addFav: (character) => {
       dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}   
   };
};

const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites,
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card); //connect nos ayuda a conectar las prop q quiero utilizar y en que componente las quiero utilizar, 1arg estado, 2arg mapdispatchtoprops

//este nuevo export exporta connect y card

