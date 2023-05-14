export default function validate(user){
    let errors = {};
    if(!user.email){
        errors.email = "Email required";
    }
    if(!user.password){
        errors.password = "Password required";
    }
    //eslint-disable-next-line
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)){
        errors.email = "Invalid email";
    }
    if(user.email.length > 35){
        errors.email = "Email is too long";
    }
    /* //eslint-disable-next-line
    if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(user.password)){
        errors.password = "Password must be contain one number";
    } */

return errors;
}


