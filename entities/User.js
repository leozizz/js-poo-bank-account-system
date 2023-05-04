//Cria um novo usuario

const Account = require("./Accounts")

module.exports = class User {
    constructor(email, fullname) {
        this.email = email
        this.fullname = fullname
        //Cria uma conta para o usuario onde this representa o usuario em questão
        this.account = new Account(this)
    }
}