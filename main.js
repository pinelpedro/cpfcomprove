//705.484.450-52
const campo = document.querySelector(".cpf")
const botao = document.querySelector(".botao")
const corpo = document.querySelector(".inter")
const a = document.querySelector(".respostaA")
const r = document.querySelector(".resposta")



 //==========================================================================================
 //CONTROLE DE CONTEUDO INSERIDO
campo.addEventListener("keypress",()=>{

    
    if (campo.value.length == 3 || campo.value.length == 7){campo.value+="."} 
    if (campo.value.length == 11){campo.value+="-"}
    
})
//-------------------------------------------------------------------------------------------

//===========================================================================================

function divide(){

    let result = campo.value.split("-",2)
    result[0] = result[0].replaceAll(".","")
    const f = result[1]
    const r = result[0]
    const nr = r.split("")
    const arrayfoda = [f , nr]
    
    return arrayfoda
}

function faz(){

    let d = divide()
    
    let arraytop = [10,9,8,7,6,5,4,3,2]
    let newrei = []
    for(let i=0;i<9;i++){
        newrei.push(arraytop[i] * d[1][i])
    }
    let c= 0
    for(i=0;i<9;i++){
        c = c + newrei[i]
    }
    let primeiroN = 11 - (c % 11)
    console.log(primeiroN)
    if(primeiroN>=10){primeiroN = 0}
    d[1].push(primeiroN)
    return d[1]
}

function fazConfirma(c){

    arraybrabo = [11,10,9,8,7,6,5,4,3,2]
    arrayvazio = []
    let count= 0
    for(let i=0;i<10;i++){
        arrayvazio.push(arraybrabo[i] * c[i])
    }
    for(i=0;i<10;i++){
    count = count + arrayvazio[i]

    }
    let segundoN = 11 - (count % 11)
    if(segundoN>=10){segundoN = 0}


    

    return segundoN
}
function compara(alvo){

    let comparacao = campo.value.split("")
    comparacao.splice(3,1)
    comparacao.splice(6,1)
    comparacao.splice(9,1)
    
    for(let i=0;i<9;i++){
        if(alvo[i] == comparacao[i]){r.innerHTML = "valido" ; console.log(alvo)}
        else{r.innerHTML = "invalido"}
    }
}

function mostra(){

    r.innerHTML = "valido"
}

botao.addEventListener('click',()=>{

    const resul = faz()
    const N2 = fazConfirma(resul)
    console.log(typeof(resul))
    resul.push(N2)
    compara(resul)    
    

})
