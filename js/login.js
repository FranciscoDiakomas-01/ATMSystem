let  codInput = document.getElementById("cod")
let  senhaInput = document.getElementById("pass")
let  btnEntrar = document.getElementById("entrar")
btnEntrar.addEventListener("click",(e)=>{
    e.preventDefault()
    
    if(!codInput.value || !senhaInput.value){
        alert("Informe asenha e o nome")
    }else{

        if(codInput.value == 1234 && senhaInput.value == "francisco"){
            localStorage.setItem("IdUser", 1)
            localStorage.setItem("codUser", codInput.value)
            localStorage.setItem("senhauser", senhaInput.value )
            window.location.href = "../html/index.html"
            return
        }else{
            alert("Senha ou Código esta errado")
            codInput.value = ""
            senhaInput.value = ""
            codInput.focus()
            return
        }
        
    }
})