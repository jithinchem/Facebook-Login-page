$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                
                required: true ,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                  required:true,
                  minlength:6,
                  checklower: true,
                  checkupper: true,
                  checkdigit: true
                  
                },
                repassword:{
                    required: true,
                    minlength: 5,
                    equalTo: "#password"

                },
            
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"AT least 4 characters"
                },
                email:{
                    required:"Enter Valid Email",
                },
                repasswor:{
                    equalTo:"please enter the same password"
                }

        }
    

    })
})