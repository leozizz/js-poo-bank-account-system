const App = require("./App")

App.createUser("joao.silva@teste.com", "João Silva")
App.createUser("maria.santos@teste.com", "Maria Silva")
App.createUser("carlos.oliveira@teste.com", "Carlos Olveira")
App.createUser("ana.pereira@teste.com", "Ana Pereira")

//Realiza um depósito informando o usuario (email) e o valor do mesmo
App.deposit("joao.silva@teste.com", 100)

//Realiza uma transferencia informando o usuario (email) e o valor do mesmo
App.transfer("joao.silva@teste.com", "ana.pereira@teste.com", 20)

//Muda a taxa de juros dos empréstimos
App.changeLoanFee(10)

//Realiza um empréstimo informando o usuario (email), o valor e as parcelas do mesmo
App.takeLoan("maria.santos@teste.com", 2000, 24)

//Exibe o usuário e sua conta em seguida
console.log(App.findUser("joao.silva@teste.com"))
console.log(App.findUser("joao.silva@teste.com").account)

console.log(App.findUser("carlos.oliveira@teste.com"))
console.log(App.findUser("carlos.oliveira@teste.com").account)

console.log(App.findUser("ana.pereira@teste.com"))
console.log(App.findUser("ana.pereira@teste.com").account)

console.log(App.findUser("maria.santos@teste.com"))
console.log(App.findUser("maria.santos@teste.com").account)

//Através do usuário, acessa o array de empréstimos em sua conta e exibe as parcelas do mesmo
console.log(App.findUser("maria.santos@teste.com").account.loans[0].installments)