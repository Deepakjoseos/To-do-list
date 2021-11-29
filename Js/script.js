function myfunction()
    {
        var x =document.getElementById("password");
        var y =document.getElementById("hide1");
        var z =document.getElementById("hide2");


        if(x.type ==="password"){
            x.type="text";
            y.style.display="block"
            z.style.display="none"
        }
            else{
                x.type="password"; 
                y.style.display="none"
                z.style.display="block"


            }
        }

///form Validation//
        const form = document.getElementById('form');
        const userr = document.getElementById('user');
        const password = document.getElementById('password');
  
  
  
      function validate(){
          var result = "";
          result += validateuserr();
          result += validatepassword();

          if (result =="")
           return true; 
          
              return false;
          

      }
      function validateuserr(){
        const userrValue = userr.value.trim();

        if (userrValue === '') {
          setErrorFor(userr, 'Username cannot be blank');
      } else if (!isUser(userrValue)) {
          setErrorFor(userr, 'Not a valid Username');
      } else  {
          setSuccessFor(userr,'Valid Username');
          return "";
      }
      }
      function validatepassword(){
        const passwordValue = password.value.trim();
        if (passwordValue === '') {
          setErrorFor(password, 'Password cannot be blank');
      }
      
       else if (passwordValue==='12345') {
        setSuccessFor(password,'Valid Password');
        return "";
      }

      else {
          setErrorFor(password, 'Not a valid password');
            }

      }
  
  
  function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
  }
  
  function setSuccessFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control success';
      small.innerText = message;
  }
  
  function isUser(userr) {
      return /admin/.test(userr);
  }