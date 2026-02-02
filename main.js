'use strict' //torna o código mais restrito, por isso precisa da tipagem 
//para funcionar.

const botaoTrocarCor = document. getElementById('trocar-cor')
//trocarCor.innerHTML = "Sthefany Correia" (Ele foi no objt e pegou oq estava lá)

function trocarCor () {
    const cor = document.getElementById('cor').value
    console.log (cor)
   document.documentElement.style.setProperty('--cor-bg', cor)

}

//escute o evento e o que ele vai fazer()
botaoTrocarCor.addEventListener('click', trocarCor)

