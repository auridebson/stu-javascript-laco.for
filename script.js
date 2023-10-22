function contagem() {
    let res1 = document.querySelector('#resContagem1')
    let res2 = document.querySelector('#resContagem2')
    let txarea = document.querySelector('#txArea')    

    let numInicio = document.querySelector('#txNumInicio')
    let numFim = document.querySelector('#txNumFim')
    let numPasso = document.querySelector('#txNumPasso')
    let emogi = '1F600'

    if (numInicio.value.length == 0 || numFim.value.length == 0 || numPasso.value <= 0) {
        alert('ERRO: Defina os valores para prosseguir')
    } else {
        res1.innerHTML = 'Contando:<br>'
        let i = Number(numInicio.value)
        let f = Number(numFim.value)
        let p = Number(numPasso.value)
        
        if (i>f) {
            for (let c = i; c >= f; c -= p) {
                res1.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c <= f; c += p) {
                res1.innerHTML += `${c} \u{1F449}`
            }
        }
        res1.innerHTML += '\u{1F3C1}'

    }
}

function tabuada() {
    let num = document.querySelector('#txNumero')
    let tab = document.querySelector('#txSelect')
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    if (num.value > 0) {
        for (let i = c; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    } else {
        window.alert('ERRO: Digite um valor válido para a Tabuada')
    }


}