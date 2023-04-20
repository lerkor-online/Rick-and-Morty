import Form from '../../components/form/form';
import './landing.css'

function LandingPage({login}){
    return (
        <div className='landing-container'>
            <Form login={login}/>
        </div>
    );
}

export default LandingPage;