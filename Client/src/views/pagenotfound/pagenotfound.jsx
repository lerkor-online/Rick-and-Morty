import style from './pagenotfound.module.css';

function PageNotFound() {
    return (

        <iframe className={style.pageNotFound} src="https://supermario-game.com/mario-game/mario.html?soundplay=1" title="sm-game"/>
    )

}

export default PageNotFound;