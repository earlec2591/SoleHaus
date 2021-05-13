const SneakerController = require('../controller/sneaker.controllers')

module.exports = function(app) {
  app.get('/api/sneakers', SneakerController.getAll)
  app.post('/api/sneakers', SneakerController.create)
  app.get('/api/sneakers/:id', SneakerController.getOne)
  app.put('/api/sneakers/:id', SneakerController.update)
  app.delete('/api/sneakers/:id', SneakerController.delete)
}