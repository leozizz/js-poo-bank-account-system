# js-poo-bank-account-system

As verificações de usuário são todas realizadas através do email  e não pelo nome*

Essa aplicação em javascript simula o funcionamento de um banco, com as funcionalidades de depósito, transferência e empréstimos em uma conta bancária. 

Foi utilizado o CommonJS para exportar, importar e testar as classes no terminal

Para isso, crie as seguintes classes:

- Deposit:
    - Possui um atributo para o valor e um atributo para a data de criação.

- Transfer:
    - Possui atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.

- Loan:
    - Possui um atributo estático privado para a taxa de juros e que possui um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de juros a partir de uma porcentagem.
    - Possui os atributos para o valor do empréstimo e para a data de criação.
    - Possui um atributo para as parcelas do empréstimo, sendo que o construtor tem como parâmetro o número de parcelas e então calcula as parcelas (instâncias de Installments) e as armazena nesse atributo.

- Installment:
    - Possui atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente)

- Account:
    - Possui atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, todas as transferências e para o dono da conta.
    - O atributo do saldo é privado e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências.
    - Possui um método para fazer um novo depósito, onde o valor do deposito é acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos.
    - Possui um método para fazer um novo empréstimo, que irá acrescentar o valor do empréstimo ao saldo e salva a instância de Loan no atributo array de empréstimos.
    - Possui um método de fazer uma transferência, onde é verificado se a transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da conta, o valor dela é acrescentado ao saldo. Se feito pelo dono da conta para outro usuário, o valor dela é descontado do saldo. Além disso, a transferência é salva no atributo array de transferências.

- User:
    - Possui atributos para nome completo, email e conta.

- App:
    - Possui um atributo estático privado para a lista dos usuários do app.
    - Possui um método estático para criar um novo usuário que só permite criar um usuário por email, ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.
    - Possui um método estático para encontrar um usuário a partir do seu email.
    - Possui métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas tem como parâmetro as informações necessárias, como o email do usuário que está realizando a operação e o valor.
    - Possui um método para alterar a taxa dos empréstimos.