
/*stringCorrompida = ["*Canis %lupus )familiaris", "Felis) silvestris *catus&",
"$Ailuropoda@ melanoleuca!"];*/

function solucao(stringCorrompida) {
    
    let dadoPurificado = '';
    
	for (let letra of stringCorrompida){
        if (letra !== '*' && letra !== '@' && letra !== '#' && letra !== '$' && letra !== '%' && letra !== '&' 
        && letra !== '(' && letra !== ')' && letra !== '!' && letra !== '.'){
            dadoPurificado += letra;
        } else {
            //ignora
        }
    }
    console.log(dadoPurificado);
}


function processData(input) {
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = '';
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});