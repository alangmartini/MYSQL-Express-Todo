const app = require('./app');

const port = 3301;

app.listen(port, async () => {
  console.log(`Tasks Manager API está sendo executada na porta ${port}`);
});
