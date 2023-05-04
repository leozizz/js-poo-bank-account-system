//Classe para as parcelas do empréstimo

module.exports = class Installment {
    constructor(value, number) {
      this.value = value
      this.number = number
      this.status = 'pending'
    }
  }