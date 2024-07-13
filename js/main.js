
//pegando os btns
import { Levantamento } from "./levantamento.mjs"
import { Depositar } from "./deposit.mjs"
import { Consultar } from "./consultas.mjs"

const btns = document.querySelectorAll("#bnts button")
const MainWindow = document.querySelector("main")


//pegando os dados o usuario
let IdUser = localStorage.getItem("IdUser")
let codUser = localStorage.getItem("codUser")
let senhauser = localStorage.getItem("senhauser")
let Valoresuser  = localStorage.getItem("ValorUser")
import { Logout } from "./sair.mjs"

if(!senhauser || !codUser || !IdUser){
    window.location.href = "../html/login.html"
}else{
    let valores = document.getElementById("valores")
    valores.textContent = Number(Valoresuser).toLocaleString("pt",{
        style:"currency",
        currency:"AOA"
    })
    let UserName = document.getElementById("UserName")
    UserName.textContent = "Francisco"
    
    let UserCount = document.getElementById("CountCod")
    UserCount.textContent = codUser

    btns.forEach(btn=>{

        btn.addEventListener("click",(e)=>{


            e.preventDefault()
            let btnClicado = e.target.textContent

            switch(btnClicado){

                case "Levantamento":
                    Levantamento(0,MainWindow)
                    break;
                case "Depósito":
                    Depositar(0,MainWindow)
                    break;
                case "Consulta":
                    Consultar(0,MainWindow)
                    break;
                default:
                    Logout()
                    break;

            }
        })
    })
}

