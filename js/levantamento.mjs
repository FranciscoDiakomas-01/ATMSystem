export function Levantamento(id=0,elemento){

    elemento.innerHTML = 
    `
        <h2 id="olaa">Entre com a quantidade do levantamento</h2>
        <input placeholder="Entre com o valor do saque" autofocus class="inputs"  id ="inputLevantamento" type="number">
        <div class="teclado">
            <button>Levantar</button>
            <button>Voltar</button>
        </div>
    `

    let btns = document.querySelectorAll(".teclado button")
    

    let input = document.getElementById("inputLevantamento")
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            if(e.target.textContent === "Levantar" ){

                if(!input.value ){
                    return
                }
                else{
                    let value
                    try{
                            value = Number(input.value)
                            if(!value){
                                return
                            }
                            else{
                                let valor = localStorage.getItem("ValorUser")

                                if(valor < value || valor == value){
                                    alert("Não é possível efectuar o saque")
                                    return

                                }
                                localStorage.setItem("ValorUser",valor-value)
                                alert("Sucesso!")
                            }
                    }catch(err){
                        alert(err)
                    }

                }
                return
            }
            else{
                location.reload()
                return
            }
            
        })
    })

}