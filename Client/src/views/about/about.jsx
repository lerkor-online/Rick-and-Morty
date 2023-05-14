import './about.css';
import logo from '../../img/logo.png';

function About(){
    return(
    <div className="div-container">
        <div className="about-container">
            <img src={logo} alt="logo-about" width="300px"/>
        <p className="p-about">¡Hola! Bienvenido a nuestra aplicación dedicada a la popular serie animada "Rick y Morty". Aquí encontrarás todo lo que necesitas saber sobre tus personajes favoritos, aventuras intergalácticas y todo lo relacionado con el universo de Rick y Morty.</p>

        <p className="p-about">Nuestra aplicación está diseñada para ser fácil de usar y navegar. Para asegurarnos de que la experiencia del usuario sea la mejor posible. </p> 
        <p className="p-about">En esta App hemos utilizado las últimas tecnologías como React, Redux, Javascript, HTML y CSS.

Si tienes alguna sugerencia o comentario sobre nuestra aplicación, no dudes en contactarnos a través de nuestro formulario de contacto. Tu opinión es importante para nosotros, y nos ayudará a mejorar y brindarte la mejor experiencia posible.</p>

<p className="p-about">Gracias por usar nuestra aplicación, ¡disfruta explorando el universo de Rick y Morty con nosotros!</p>
</div>
    </div>
    );
}

export default About;