require('./styles/index.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';


jquery(()=>{
    console.log('Hello jQuery + bootstrap 4!');
    function submitEmail() {
        let email = document.getElementById('email_field').value
        let data = {
          "email_address" : email,
          "status": "subscribed",
            "status_if_new": "subscribed"
            }
    
        // let headers = new Headers()
        // headers.set('Authorization', 'Basic amtpbm1hbjo1N2MxYWM0NTNkYzAwZjkxNDRmZDU1NzRkNDRhY2ZhMi11czIw');
        console.log(email)
        fetch( './sendemail.php?email='+email )
          document.getElementById('email_field').value = ""
    
    
       }
});

