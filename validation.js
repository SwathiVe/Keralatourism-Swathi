let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let name = document.getElementById("name");
let dob = document.getElementById("dob");
let phone = document.getElementById("phone");
let ml = document.getElementById("ml");
let fl = document.getElementById("fl");
let other = document.getElementById("other");

function fvalidate()
{
    
    let regexp=/^([A-Za-z0-9/.-]+)@([A-Za-z0-9/-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let num=/^([0-9]{10,10})$/;
    
    

    if((regexp.test(email.value)) && (num.test(phone.value)))
    {
        return validate();
    }
    else{
        alert("invalid email or phone number or password");
        return false;
    }
}



function validate(){
    
    
    if (email.value.trim()==""||pwd.value.trim()==""||name.value.trim()==""||dob.value.trim()==""||phone.value.trim()=="")
    {
        alert("all columns are mandatory");
        return false;

    }
    else if ((ml.checked==false) && (fl.checked==false) && (other.checked==false))
    {
        alert("please select gender");
        return false;

    }
    
    
    
    else
    {

        return true;
    }
}

    // timeout before a callback is called

    let timeout;

    // traversing the DOM and getting the input and span using their IDs

    // let password = document.getElementById('PassEntry')
    let strengthBadge = document.getElementById('StrengthDisp')

    // The strong and weak password Regex pattern checker

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{8,}))')
    
    function StrengthChecker(PasswordParameter){
        // We then change the badge's color and text based on the password strength

        if(strongPassword.test(PasswordParameter)) {
            strengthBadge.style.backgroundColor = "green"
            strengthBadge.textContent = 'Strong'
        } else if(mediumPassword.test(PasswordParameter)){
            strengthBadge.style.backgroundColor = 'blue'
            strengthBadge.textContent = 'Medium'
        } else{
            strengthBadge.style.backgroundColor = 'red'
            strengthBadge.textContent = 'Weak'
        }
    }

    // Adding an input event listener when a user types to the  password input 

    pwd.addEventListener("input", () => {

        //The badge is hidden by default, so we show it

        strengthBadge.style.display= 'block'
        clearTimeout(timeout);

        //We then call the StrengChecker function as a callback then pass the typed password to it

        timeout = setTimeout(() => StrengthChecker(pwd.value), 500);

        //Incase a user clears the text, the badge is hidden again

        if(pwd.value.length !== 0){
            strengthBadge.style.display != 'block'
        } else{
            strengthBadge.style.display = 'none'
        }
    });


