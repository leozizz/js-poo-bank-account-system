//Classe para depósitos

module.exports = class Deposit {
    constructor(value) {
        this.value = value
        this.createdAt = new Date()
    }
}