var setadireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setadireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:150px"
    
    }
    function RolarEsquerda(){
leonardo.style = "display: felx"
Bruna.style = "display: none"
setadireita.style = "display:flex; margin-top:150px"
setaEsquerda.style = "dispaly:none"

    }
