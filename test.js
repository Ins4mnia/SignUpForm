const SignUpWindow = document.querySelector('div.bodyInnerSignUpWindow')
const signUpForm = document.forms.signUp
const UsernameForm = signUpForm.elements.Username
const EmailForm = signUpForm.elements.Email
const PasswordForm = signUpForm.elements.Password
const RepeatPasswordForm = signUpForm.elements.RepeatPassword

const CheckArray = [0,0,0,0]
function FinalCheck(){
  if (CheckArray.reduce((sum, current) => sum + current, 0) == 4){
    if (!document.querySelector('div.submitDivButton'))
    SignUpWindow.insertAdjacentHTML('afterend','<div class="submitDivButton"><a href="https://github.com" class="submitButton" target="_blank">continue</a></div>')
  }else if (CheckArray.reduce((sum, current) => sum + current, 0) != 4){
    if (document.querySelector('div.submitDivButton')){document.querySelector('div.submitDivButton').remove()}
  }
}

function Upositive(){
  if (document.getElementById('Unegative')) {document.getElementById('Unegative').remove()}
  if (document.getElementById('Uneutral')) {document.getElementById('Uneutral').remove()}
  if (!document.getElementById('Upositive')){UsernameForm.insertAdjacentHTML('afterend','<span id="Upositive">&#9733;</span>')}
}

function Unegative(){
  if (document.getElementById('Upositive')) {document.getElementById('Upositive').remove()}
  if (document.getElementById('Uneutral')) {document.getElementById('Uneutral').remove()}
  if (!document.getElementById('Unegative')){UsernameForm.insertAdjacentHTML('afterend','<span id="Unegative">&#9733;</span>')}
}

function Uneutral(){
  if (document.getElementById('Unegative')) {document.getElementById('Unegative').remove()}
  if (document.getElementById('Upositive')) {document.getElementById('Upositive').remove()}
}

function Usernamecheck(){
  if (UsernameForm.value.length > 3 && UsernameForm.value.length <= 14){
    Upositive(UsernameForm)
    CheckArray[0] = 1
  }else if (UsernameForm.value.length > 0 && UsernameForm.value.length <= 3){
    Unegative(UsernameForm)
    CheckArray[0] = 0
  }else if (UsernameForm.value.length == 0){
    Uneutral(UsernameForm)
    CheckArray[0] = 0
  }
}
UsernameForm.addEventListener('blur',Usernamecheck)
UsernameForm.addEventListener('blur',FinalCheck)

function Epositive(){
  if (document.getElementById('Enegative')) {document.getElementById('Enegative').remove()}
  if (document.getElementById('Eneutral')) {document.getElementById('Eneutral').remove()}
  if (!document.getElementById('Epositive')){EmailForm.insertAdjacentHTML('afterend','<span id="Epositive">&#9733;</span>')}
}

function Enegative(){
  if (document.getElementById('Epositive')) {document.getElementById('Epositive').remove()}
  if (document.getElementById('Eneutral')) {document.getElementById('Eneutral').remove()}
  if (!document.getElementById('Enegative')){EmailForm.insertAdjacentHTML('afterend','<span id="Enegative">&#9733;</span>')}
}

function Eneutral(){
  if (document.getElementById('Enegative')) {document.getElementById('Enegative').remove()}
  if (document.getElementById('Epositive')) {document.getElementById('Epositive').remove()}
}

function Emailcheck(){
  if (EmailForm.value.includes('@')){
    Epositive(EmailForm)
    CheckArray[1] = 1
  }else if (!EmailForm.value.includes('@') && EmailForm.value.length > 0){
    Enegative(EmailForm)
    CheckArray[1] = 0
  }else if (EmailForm.value.length == 0){
    Eneutral(EmailForm)
    CheckArray[1] = 0
  }
}
EmailForm.addEventListener('blur',Emailcheck)
EmailForm.addEventListener('blur',FinalCheck)

function Ppositive(){
  if (document.getElementById('Pnegative')) {document.getElementById('Pnegative').remove()}
  if (document.getElementById('Pneutral')) {document.getElementById('Pneutral').remove()}
  if (!document.getElementById('Ppositive')){PasswordForm.insertAdjacentHTML('afterend','<span id="Ppositive">&#9733;</span>')}
}

function Pnegative(){
  if (document.getElementById('Ppositive')) {document.getElementById('Ppositive').remove()}
  if (document.getElementById('Pneutral')) {document.getElementById('Pneutral').remove()}
  if (!document.getElementById('Pnegative')){PasswordForm.insertAdjacentHTML('afterend','<span id="Pnegative">&#9733;</span>')}
}

function Pneutral(){
  if (document.getElementById('Pnegative')) {document.getElementById('Pnegative').remove()}
  if (document.getElementById('Ppositive')) {document.getElementById('Ppositive').remove()}
}

function Passwordcheck(){
  if (PasswordForm.value.length > 3 && PasswordForm.value.length <= 14){
    Ppositive(PasswordForm)
    CheckArray[2] = 1
  }else if (PasswordForm.value.length > 0 && PasswordForm.value.length <= 3){
    Pnegative(PasswordForm)
    CheckArray[2] = 0
  }else if (PasswordForm.value.length == 0){
    Pneutral(PasswordForm)
    CheckArray[2] = 0
  }
}
PasswordForm.addEventListener('blur',Passwordcheck)
PasswordForm.addEventListener('blur',FinalCheck)

function RPpositive(){
  if (document.getElementById('RPnegative')) {document.getElementById('RPnegative').remove()}
  if (document.getElementById('RPneutral')) {document.getElementById('RPneutral').remove()}
  if (!document.getElementById('RPpositive')){RepeatPasswordForm.insertAdjacentHTML('afterend','<span id="RPpositive">&#9733;</span>')}
}

function RPnegative(){
  if (document.getElementById('RPpositive')) {document.getElementById('RPpositive').remove()}
  if (document.getElementById('RPneutral')) {document.getElementById('RPneutral').remove()}
  if (!document.getElementById('RPnegative')){RepeatPasswordForm.insertAdjacentHTML('afterend','<span id="RPnegative">&#9733;</span>')}
}

function RPneutral(){
  if (document.getElementById('RPnegative')) {document.getElementById('RPnegative').remove()}
  if (document.getElementById('RPpositive')) {document.getElementById('RPpositive').remove()}
}

function RepeatPasswordcheck(){
  if (RepeatPasswordForm.value == PasswordForm.value){
    RPpositive(RepeatPasswordForm)
    CheckArray[3] = 1
  }else if (RepeatPasswordForm.value != PasswordForm.value && RepeatPasswordForm.value.length > 0){
    RPnegative(RepeatPasswordForm)
    CheckArray[3] = 0
  }else if (RepeatPasswordForm.value.length == 0){
    RPneutral(RepeatPasswordForm)
    CheckArray[3] = 0
  }
}
RepeatPasswordForm.addEventListener('blur',RepeatPasswordcheck)
RepeatPasswordForm.addEventListener('blur',FinalCheck)