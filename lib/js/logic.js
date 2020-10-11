document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
var loginForm = document.getElementById("LOGIN-form");
var loginButton = document.getElementById("LOGIN-form-submit");
var loginErrorMsg = document.getElementById("LOGIN-error-msg");
String.prototype.hashCode = function() 
{
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  // https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault(); // prevent the form from submitting
    var username = loginForm.username.value;
    var passwordHash = loginForm.password.value.hashCode();
    var authenticated = false;
  
    if (username === "CarlWinslow" && passwordHash == 160752902) 
    {
        authenticated = true;
    } else if (username === "PattonsToast" && passwordHash == -524688007) 
    {
        authenticated = true;
    } else if (username === "firesidePRAT" && passwordHash == -1438247426) 
    {
        authenticated = true;
    }  else if (username === "BLArneyPWN" && passwordHash == -824609226) 
    {
        authenticated = true;
    } else if (username === "set_phasers_to_fun" && passwordHash == 1427497418) 
    {
        authenticated = true;
    } else if (username === "GenmaSaotome" && passwordHash == 1035496758) 
    {
        authenticated = true;
    } else if (username === "ShaiLeBeef" && passwordHash == 1623153453) 
    {
        authenticated = true;
    } else if (username === "weishenme" && passwordHash == -1932652345) 
    {
        authenticated = true;
    }

    if (authenticated)
    {
        /*
          Save data to sessionStorage
          https://stackoverflow.com/questions/49042651/how-do-i-pass-form-data-from-one-html-page-to-another-html-page-using-only-javas
        */
        sessionStorage.setItem('username', username);
        alert("Congratulations!");
        location.replace("./dashboard.html");
    } else 
    {
        alert("improper credentials");
    }
})