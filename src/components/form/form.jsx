import './form.css';
import logo from  '../../img/logo.png';
import { useState } from 'react';
import validate from '../../utils/validations/validations';

function Form({login}) {

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const [usererror, setUsererror] = useState({
        username:"",
        password:""
    })

    function handleChange(e){
        e.preventDefault();
        setUser({
            ...user, 
            [e.target.name]:e.target.value,
        })

        setUsererror(
            validate({
            ...user, 
            [e.target.name]:e.target.value,
        })
        )
    };

    //Login
function handleSubmit(e){
    e.preventDefault();
    login(user);
}

    return (
        <div className="container">
            <div className='img'>
            <img src={logo} alt="" width="250px"/>
            </div>
            
            <div className="formTitle">
                <h2>Login</h2>

            </div>
            <form className="form" type="submit" autocomplete="off">
                <div className="input-div">
                    <h5>Username</h5>
                    <input 
                    className="input" 
                    type="email"
                    placeholder="user@example.com" 
                    name="username"
                    value={user.username}
                    onChange={handleChange} />
                </div>
                {usererror.username ? <span className="msgError">{usererror.username}</span> : null}
                <div className="input-div">
                    <h5>Password</h5>
                    <input 
                    className="input" 
                    type="password" 
                    name="password"
                    value={user.password}
                    onChange={handleChange}/>                 
                </div>
                    {usererror.password ? <span className="msgError">{usererror.password}</span> : null}
                <button className="submitBtn" onClick={handleSubmit}>LOGIN</button>
            </form>
        </div>
    );
}

export default Form;
