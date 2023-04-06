// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
     // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
         form.classList.add('was-validated')
      }, false)
    })
  })()


/*function checkUsername() {

  var usern = /^.{6,20}$/;

  let inputUser = document.querySelector("#userName").value;

  console.log(inputUser);

  if (inputUser.match(usern)) {
      document.querySelector("#feedbackUserN").innerHTML = `Valid Password format`;
      
  }
  else {
    document.querySelector("#feedbackUserN").innerHTML = `Invalid Password format`
      
  }
}


  function checkPassword() {

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let inputPassword = document.querySelector("#passWord").value;

    console.log(inputPassword);

    if (inputPassword.match(passw)) {
        document.querySelector("#feedbackPassW").innerHTML = `Valid Password format`;
        
    }
    else {
      document.querySelector("#feedbackPassW").innerHTML = `Invalid Password format`
        
    }
}

function linkItemForm(){

   $(document).ready(function()
      {
        $("#itemForm").load("itemforms.html");
})
}

*/