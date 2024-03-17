class Turma {
    #codigo;
    #nota;

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }

    getCodigo() {
        return this.#codigo;
    }

    getNota() {
        return this.#nota;
    }

    setCodigo(novoCodigo) {
        this.#codigo = novoCodigo;
    }

    setNota(novaNota) {
        this.#nota = novaNota;
    }

    aprovado() {
        return this.getNota() >= 6;
    }
}

module.exports = Turma;
