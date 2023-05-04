//Classe principal da aplicação

const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
    static #users = []

    //Faz a busca por um usuario pelo seu email, onde se o email do usuario existir em #users e for igual ao email informado, irá retornar este email
    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }
    
    static createUser(email, fullname) {
        const userExists = App.findUser(email)
        //se o usuario não existir na aplicação, ele será criado e inserido em #users
        if (!userExists) {
            this.#users.push(new User(email, fullname))
        }
    }

    //Método estático que irá buscar o usuário e caso ele exista irá criar um novo depósito e adiciona-lo na conta do usuário.
    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    //Método que faz a busca dos usuarios pelos emails de quem envia e quem recebe a transferencia
    //Caso AMBOS sejam encontrados, uma nova transferencia será criada e o método addTransfer fará a adição ou subtração das contas
    static transfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    //Método que verifica o usuario que está fazendo um empréstimo e caso ele exista, cria um novo empréstimo passando o valor e o número de parcelas
    //addLoan irá adicionar o empréstimo na conta do usuário
    static takeLoan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }


    //Utiliza o setter fee para definir a nova taxa de juros. O cálculo é feito internamente de acordo com as regras definidas no setter
    static changeLoanFee(newFeePercentage) {
        Loan.fee = newFeePercentage
    }
}