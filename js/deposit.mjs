export function Depositar(id=0,elemento){

    elemento.innerHTML = 
    `
        <h2 id="olaa">Entre com a quantidade do Depósito</h2>
        <input placeholder="Entre com o valor do depósito" autofocus class="inputs"  id ="inputLevantamento" type="number">
        <div class="teclado">
            <button>Depositar</button>
            <button>Voltar</button>
        </div>
    `

    let btns = document.querySelectorAll(".teclado button")

    let input = document.getElementById("inputLevantamento")
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            if(e.target.textContent === "Depositar" ){

                if(!input.value  || input.value <= 0){
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
                                localStorage.setItem("ValorUser",valor+value)
                                alert("sucess!")
                                
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