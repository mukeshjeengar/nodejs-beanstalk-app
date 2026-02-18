const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello from AWS Elastic Beanstalk! v2 (CI/CD)');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK (Deployment Verified) 1');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
