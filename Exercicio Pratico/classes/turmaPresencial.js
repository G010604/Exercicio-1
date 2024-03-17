const Turma = require('./turma');

class TurmaPresencial extends Turma {
    #frequencia;

    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.#frequencia = frequencia;
    }

    getFrequencia() {
        return this.#frequencia;
    }

    setFrequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }

    aprovado() {
        return super.aprovado() && this.getFrequencia() >= 75; 
    }
}

module.exports = TurmaPresencial;