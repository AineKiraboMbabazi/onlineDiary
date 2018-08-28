

function ViewPage(){
          window.location='./viewentry.html';
        
      }
      function logout(){
        window.location='./index.html';
      
    }
    function login(){
        window.location='./index1.html';
      
    }
    function after_login(){
        window.location='./entries.html';
      
    }
    
      function EditPage(){
          window.location='./editentry.html';
        
      }
      function Deletion_alert(){
          alert("your record has been deleted");
      }
      function Save_alert(){
        alert("your record has been saved");
      }
      function Set_alert(){
        alert("your reminder has been set");
    }
    function validateForm(){
        
        if (document.forms["signup"]["Password"].value !=document.forms["signup"]["confirmPassword"].value) {
            alert("your password doesnot match, please enter the password again");
            return false;
    }else{
        alert("your account was created");
        window.location='./addentry.html';
    }
}