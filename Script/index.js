//For Sign Up Button
const signUpModal = document.getElementById("signUpModal");
const signUpBtn = document.getElementById("signUp")

signUpBtn.addEventListener("click",SignUp)
function SignUp()
{   
    signUpModal.style.display = "block";   
}
//Close Function
const closeSignUp = document.getElementById("colseSignUpId")
closeSignUp.addEventListener("click",CloseFunc)

function CloseFunc(){
    signUpModal.style.display = "none";
}

// For Sign In Button

const signInModal = document.getElementById("signInModal");
const signInpBtn = document.getElementById("signIn");

signInpBtn.addEventListener("click",SignIn)
function SignIn()
{   
    signInModal.style.display = "block";   
}
//Close Function
const closeSignIn = document.getElementById("colseSignInId")
closeSignIn.addEventListener("click",CloseFunc1)

function CloseFunc1(){
    signInModal.style.display = "none";
}



//For create post

const createModal = document.getElementById("post");
const createBtn = document.getElementById("createPost");


createBtn.addEventListener("click",CreatePost)
function CreatePost()
{   
    createModal.style.display = "block";   
}
//Close Function
const CreatePosta = document.getElementById("closec")
CreatePosta.addEventListener("click", Closecre)

function Closecre(){
    createModal.style.display = "none";
}







