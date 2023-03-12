const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});


const emailId = document.getElementById("email");
const pass =  document.getElementById("password");

btn.addEventListener("mouseover",(button)=>{
  let email=emailId.value;
  let password = pass.value;
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let validateEmail = mailformat.test(email) && passwordformat.test(password)
  if(!validateEmail){
    button.target.classList.toggle("move");
    document.querySelector("#btn").style.background="red";
  }
  else{
    button.target.classList.add("stop");
    document.querySelector("#btn").style.background="green";
    alert("Already Sign in.")
  }
})