//Classe para a Conta Bancária

module.exports = class Account {
    #balance

    constructor(user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance () {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
      }

      addLoan(loan) {
        this.#balance =+ loan.value
        this.loans.push(loan)
      }

    //Verifica o email do usuario que recebeu ou efetuou a transferencia para determinar se é uma transferência de saída ou entrada
    addTransfer(transfer) {
        if (transfer.toUser.email === this.owner.email) {
          this.#balance += transfer.value
          this.transfers.push(transfer)
        } else if (transfer.fromUser.email === this.owner.email) {
          this.#balance -= transfer.value
          this.transfers.push(transfer)
        }
    }
}