

function solucao(primeiraLetra, segundaLetra, palavras) {
    let possui =[];
	for (let palavra of palavras){
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra){
            possui.push(palavra);
        }
    } 
    if (possui.length > 0) {
        for (let palavra of possui) {
            console.log(palavra);
        }
    } else {
        console.log("NENHUMA");
    }
}

function processData(input) {
    const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
    solucao(primeiraLetra, segundaLetra, palavras);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});