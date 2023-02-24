const signUpForm = document.forms.signUp
const UsernameForm = signUpForm.elements.Username
const EmailForm = signUpForm.elements.Email
const PasswordForm = signUpForm.elements.Password
const RepeatPasswordForm = signUpForm.elements.RepeatPassword
function check(){
  if (UsernameForm.value.length >= 3 && UsernameForm.value.length <= 14){
    if (!document.getElementById('positive')){
    UsernameForm.insertAdjacentHTML('afterend','<span id="positive">&#10004;</span>')
    if (document.getElementById('negative')) 
    {document.getElementById('negative').remove()}}
  }else{
    if (!document.getElementById('negative')){
    UsernameForm.insertAdjacentHTML('afterend','<span id="negative">&#10006;</span>')
    if (document.getElementById('positive')) document.getElementById('positive').remove()}
  }
}
UsernameForm.addEventListener('blur',check)
