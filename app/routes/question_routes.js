module.exports = (app, db) => {
  app.get('/questions/:id', (req, res) => {
  });

  app.post('/questions', (req, res) => {
    res.send('Create questions');
  });
};
