var express =require('express') ;
var app = express();

app.use(express.json());
var todoservice =require('./todo.service.js');


app.get('/todolist', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.get_todos());
})

app.post('/todolist', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.get_todos());
})

app.post('/todoadd', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.add_todo());
})

app.put('/todoupdate', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.update_todos());
})

app.delete('/tododelete', function (req, res) {
  // console.log('API called with GET:' + req.url);
  let todo_service = new todoservice();
  res.json(todo_service.delete_todos());
})


// Add more api calls here for each requirement

// app.listen(3000, function () {
//   // console.log(' app listening on port 3000!')
// })

module.exports = app;
