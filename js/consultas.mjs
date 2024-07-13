export function Consultar(id=0,elemento){

    elemento.innerHTML = 
    `
            <section>
                <h2>Nome</h2>
                <span>Francisco</span>
                <h2>Conta</h2>
                <span id="conta"></span>
                <h2>Senha</h2>
                <span id="pass"></span>
                <h2>Valor</h2>
                <span id="valor"></span>
                <button id="voltar">Voltar</button>
            </section>
    `
    let pass =document.getElementById("pass").textContent = localStorage.getItem("senha")
    let conta = document.getElementById("conta").textContent = localStorage.getItem("codUser")
    let Valoresuser = localStorage.getItem("ValorUser")
    let valor = document.getElementById("valor").textContent = Number(Valoresuser).toLocaleString("pt",{
        style:"currency",
        currency:"AOA"
    })


    let btns = document.querySelector("#voltar")
    btns.addEventListener("click",()=>{
            location.reload()
        })

}