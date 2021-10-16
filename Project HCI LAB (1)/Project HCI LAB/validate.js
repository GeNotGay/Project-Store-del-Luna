function validate(){
    var user = document.registration.usernameid;
    var pass = document.registration.passid;
    var cpass = document.registration.confpass;
    var full = document.registration.fullnameid;
    var msex = document.registration.m;
    var fsex = document.registration.f;
    var email = document.registration.emailid;
    var age = document.registration.ageid;
    var term = document.registration.agree;
    
    if(usernameid_validate(user,5,20)){
        if(passid_validate(pass,6,12))
        {
            if(confpass_validate(cpass, 6,12)){
                if(allLetter(full)){
                    if(emailid_validate(email){
                        if(sex_validate(msex,fsex)){
                            if(age_validate(age)){
                                if(term_validate(term)){
                                    
                                }
                            }

                        }

                    }
                }
            }
            
        }
    }
    
    return false;
}