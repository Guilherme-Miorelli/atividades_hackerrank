    let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
    let maiorValor = 0;
    let menorValor = 999;
    let somaNotasTotal = 0;
    let media = 0;
    let descarte = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotasTotal += notas[i];
        if (notas[i] > maiorValor) {
            maiorValor = notas[i];
        }

        if (notas[i] < menorValor) {
            menorValor = notas[i];
        }
    }
    descarte = maiorValor + menorValor;
    media = (somaNotasTotal - descarte)/(notas.length-2);
    console.log(media);