/*
     Developed by the JavaScript team at Fullsail
     Date: 1306

     Nicole Aitchison
     PWA1 1308
     8/15/13
     Goal 5: Form Validation
*/

(function(){

    // this function creates a var for all the input fields
    myform.onsubmit = function(e){

        var username = document.querySelector('#f_username');
        var email = document.querySelector('#f_email');
        var phone = document.querySelector('#f_phone');
        var ssn = document.querySelector('#f_ssn');
        var password = document.querySelector('#f_password');

        // an array that contains all the input vars
        var ids = [username, email, phone, ssn, password];

        // loops through the array and calls the validate function for each input feild
        for(var i = 0, max = ids.length; i < max; i++){

            // calls the validate function and passes the inputname
            validateField(ids[i]);  //id = is the form input field ID

        }

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        // conditionals check to see what type of input it's checking
        // then it sets the patter based on the input type
        if (inputName.name === 'f_username'){

           var pattern = /^[A-Z]+(([\'\,\.\- ][A-Z])?[a-zA-Z]*)*$/;   

        }
        else if (inputName.name === 'f_email'){

            var pattern = /^[a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        }
        else if (inputName.name === 'f_phone'){

            var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}([^0-1]){1}([0-9]){2}[-]([0-9]){4}/;

        }
        else if (inputName.name === 'f_ssn'){

            var pattern = /^\d{3}-\d{2}-\d{4}$/;

        }
        else if (inputName.name === 'f_password'){

            var pattern = /^[a-zA-Z]\w{3,14}$/;

        };

        // check to see if the inputed value matches the pattern
        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        // these conditionals show errors and validation 
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }; 
        
    };

})();  // end wrapper



