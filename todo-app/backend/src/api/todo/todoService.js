const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// retorna o registro atualizado
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo
