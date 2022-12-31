/*  let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let login =document.getElementsByClassName('login');
    let email_pattern=/@\w.\w/;
    let password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    
    if( username.length<3 || username.length>25){
        document.getElementById('username_alert').innerHTML="Entrez un username valide entre 3 et 25 caracteres";
    }
    else if(!email_pattern.test(email)){
        document.getElementById('email_alert').innerHTML="entez une adresse Email valide";
    }
    else if (password.length<8 || !email_pattern.test(email)){
        document.getElementById('password_alert').innerHTML="Entrez un password valide";
    }
    else if(password!=confirmPassword){
        document.getElementById('reenter_password_alert').innerHTML="Les deux mot de passes ne sont pas identiques";
    
    }*/
function checkPassword(form){
       let password = (document.getElementById('password').value);
    let confirmPassword = (document.getElementById('confirm-password').value);
    if(password!=confirmPassword){
        document.getElementById('reenter_password_alert').innerHTML="Les deux mot de passes ne sont pas identiques";
        return false;}
        else{
            return true;
    }
        
    
    
    
}

