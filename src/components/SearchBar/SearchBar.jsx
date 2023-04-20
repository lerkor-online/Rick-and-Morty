import styles from './SearchBar.module.css'
import lupa from '../../img/lupa.svg'

export default function SearchBar({onSearch, onChange}) {
   return (
      <div className={styles.DivSearch}>
         <input className={styles.Input} placeholder="Search" type='search' onChange={onChange}/>
      <button className={styles.Button} >
         <img src={lupa} className={styles.lupa} alt="lupa" onClick={onSearch}/>
         </button>
      </div>
   );
}
