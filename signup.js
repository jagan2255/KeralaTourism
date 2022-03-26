var email = document.getElementById("email1");
var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var uname = document.getElementById("username");
var phno = document.getElementById("phonenumber");
var pssd = document.getElementById("password");
var rpssd = document.getElementById("password2");
var check1 = document.getElementById("Check1");
let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let msg3 = document.getElementById("msg3");
let msg4 = document.getElementById("msg4");
let msg5 = document.getElementById("msg5");
let msg6 = document.getElementById("msg6");
let msg7 = document.getElementById("msg7");

let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexpp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regname = /^[A-Za-z\s]+$/;


function validate() {

    if(email.value.trim()=="" || regexp.test(email.value)=== false){
        msg1.innerHTML= "Invalid Email";
        msg1.style.color = "red";
        email.style.border = "2px solid red";
        return false;
    }
    else if(fname.value.trim()==""|| regname.test(fname.value)=== false){
       msg2.innerHTML = "Invalid Firstname";
       msg2.style.color ="red";
       fname.style.border = "2px solid red";
       return false;

    }
    else if(lname.value.trim()==""|| regname.test(lname.value)=== false){
        msg3.innerHTML = "Invalid Lastname";
        msg3.style.color ="red";
        lname.style.border = "2px solid red";
        return false;
 
    }
    else if(uname.value.trim()==""|| regname.test(uname.value)=== false){
        msg4.innerHTML = "Invalid Username";
        msg4.style.color ="red";
        uname.style.border = "2px solid red";
        return false;
 
    }
    else if(phno.value.trim()==""|| phoneno.test(phno.value)=== false){
        msg5.innerHTML = "Invalid PhoneNumber";
        msg5.style.color ="red";
        phno.style.border = "2px solid red";
        return false; 
    }
    else if(pssd.value==""){
        msg6.innerHTML = "Enter your Password";
        pssd.style.border= "red";
        msg6.style.color ="red";
        return false;
    }
    else if(regexpp.test(pssd.value)=== false){
        msg6.innerHTML = "Use Strong Password";
        msg6.style.color ="red";
        pssd.style.border = "2px solid red";
        alert("Password Should Contain at least One Uppercase,One Lowercase,Symbol and Number")
        return false;
    }
    else if(rpssd.value == ""){
        msg7.innerHTML = "Re-enter Password";
        msg7.style.color ="red";
        rpssd.style.border = "2px solid red";
        return false;
    }
    else if(pssd.value != rpssd.value){
        msg7.innerHTML = "Password doesn't match";
        msg7.style.color ="red";
        rpssd.style.border = "2px solid red";
        return false;
    }
    else if(check1.checked == false){
        alert("Accept Terms and Conditions")
        return false;
    }
    else {
        email.style.border = "2px solid green";
        fname.style.border = "2px solid green";
        lname.style.border = "2px solid green";
        uname.style.border = "2px solid green";
        phno.style.border = "2px solid green";
        pssd.style.border = "2px solid green";
        rpssd.style.border = "2px solid green";
        
        return true;

    } 
    }

              //Password Strength Indicator

      function passdstrength() {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{1,}).*", "g");
       
        if (false == enoughRegex.test(pssd.value)) {
            msg6.innerHTML = '<span style="color:red">Invalid Password</span>';
        } else if (strongRegex.test(pssd.value)) {
            msg6.innerHTML = '<span style="color:green">Password Strength: Strong 🔥 </span>';
        } else if (mediumRegex.test(pssd.value)) {
            msg6.innerHTML = '<span style="color:orange">Password Strength: Medium</span>';
        } else {
            msg6.innerHTML = '<span style="color:red">Password Strength: Weak</span>';
        }
       }

            // Function to remove Error Message

      function revalidate(){

      if((email.value!="") || (fname.value!="") || (lname.value!="")(uname.value!="") || 
      (phno.value!="") || (rpssd.value!="")){

        email.style.border = "";
        fname.style.border = "";
        lname.style.border = "";
        uname.style.border = "";
        phno.style.border = "";
        pssd.style.border = "";
        rpssd.style.border = "";
        msg1.innerHTML= "";
        msg2.innerHTML = "";
        msg3.innerHTML = "";
        msg4.innerHTML = "";
        msg5.innerHTML = "";
        msg7.innerHTML = "";

        return;
      }
            
      }
