/*
Sample Input 0

100 500 100 200 50
Sample Output 0

900
Sample Input 1

100 100 100 50
Sample Output 1

350

*/



function solucao(precos) {
    
    
    let menor = precos[0];
    let soma = 0;
    for (let item of precos){
        soma += item;
        
        if (item < menor) {
                menor = item;
            }
    }
    
    let qtdDeProdutos = precos.length ;
    
    if (qtdDeProdutos >= 5) {
        console.log(soma - menor);
    } else {
        console.log(soma);
    }
}

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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