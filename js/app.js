//*js
let password = document.querySelector(`.password`)
let btn = document.querySelector(`.showpass`)

function showPassword(){
    if(password.type=`password`){
        password.type=`text`
        btn.innerHTML=`<i class="bi bi-eye-slash"></i>`
    }else{
        password.type=`password`
        btn.innerHTML=`<i class="bi bi-eye"></i>`  
    }
}
btn.addEventListener(`click`,showPassword)