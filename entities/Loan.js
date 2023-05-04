//Classe para empréstimos

const Installment = require("./Installment")

module.exports = class Loan {
    //Taxa fixa do empréstimo - 1.05 = 5%
    static #fee = 1.05

    constructor(value, installments) {
        this.value = value

        //Para cada parcela será instanciada uma "Installment"
        this.installments = []
        for (let i = 1; i <= installments; i++) {
                                //valor da parcela (valorTotal * taxa / total de parcelas), número da parcela em questão
            this.installments.push(new Installment( (value * Loan.#fee) / installments, i) )
        }

        this.createdAt = new Date()
        
    }

    static get fee() {
        return Loan.#fee
    }

    //Define uma nova taxa
    static set fee(newFeePercentage) {
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}