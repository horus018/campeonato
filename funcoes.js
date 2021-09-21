function jogadoresMenor18() {
    if (idade < 18) {
        menor18 = menor18 + 1
    }
}

function somaIdades() {
    somaIdadesTime = somaIdadesTime + idade
}

function mediaIdadesDoTime() {
    mediaIdadesTime = somaIdadesTime / j
}

function zerarSomasIdades() {
    somaIdadesTime = 0
}

function somarAlturas() {
    somaAlturas = somaAlturas + altura
}

function mediaAlturas() {
    mediaAlturasCamp = somaAlturas / j
}

function somarPesos() {
    if (peso > 80) {
        somaPesos = somaPesos + 1
    }
}

function somarJogadores() {
    jogadores = jogadores + 1
}

function porcPesoAcima80() {
    if (somaPesos >= 1) {
        percentual80kg = (somaPesos * 100) / jogadores
    } else {
        document.write('Não tem jogadores com mais de 80kg<br>')
    }

}