export default function validate(user){
    let errors = {};
    if(!user.username){
        errors.username = "Email required";
    }
    if(!user.password){
        errors.password = "Password required";
    }
    //eslint-disable-next-line
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username)){
        errors.username = "Invalid email";
    }
    if(user.username.length > 35){
        errors.username = "Email is too long";
    }
    /* //eslint-disable-next-line
    if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(user.password)){
        errors.password = "Password must be contain one number";
    } */

return errors;
}


