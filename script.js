function cont(){
var txt1 = window.document.getElementById('txt1')
var txt2 = window.document.getElementById('txt2')
var txt3 = window.document.getElementById('txt3')
var res = window.document.getElementById('res')
var mult = Number(txt3.value)
var contxt0 = Number(txt1.value)
var contxt1 = Number(txt1.value)
var contxt2 = Number(txt2.value) 

if (contxt1 > contxt2 || contxt1 == contxt2 || contxt1 == 0 || contxt2 == 0 || mult == 0 || (mult > contxt2)) {
    window.alert('Dados incorretos. Verifique e tente novamente.')

} else {
    var resultado = ''
    
    do {
        contxt1 += mult
        if (contxt1 <= contxt2) {
        resultado += contxt1 + ' '
        }
    }   while (contxt1 < contxt2)
     
        res.innerHTML = `${contxt0} ${resultado}`
    }

}