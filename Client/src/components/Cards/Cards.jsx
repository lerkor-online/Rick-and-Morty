import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props; 


   return (
   <div className={styles.DivCards}>
      {characters.map(character => (
         <Card 
         id={character.id}
               key={character.id}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
               origin={character.origin?.name}
               status={character.status}
         /* id={character.id} character={character} onClose={onClose} origin={character.origin?.name} *//>))}
   </div>
   );
}
