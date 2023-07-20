

function solucao(resultados) {
	let pontuacao = 0;
    
    for (let partida of resultados){
        if (partida === "V"){
            pontuacao += 3;
        } else if (partida === "E"){
            pontuacao += 1;
        } else {
            pontuacao += 0;
        }
    }
    console.log(pontuacao);

}

function processData(input) {
    const resultados = JSON.parse(input);
    solucao(resultados);
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