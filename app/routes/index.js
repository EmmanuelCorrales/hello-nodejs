const questionRoutes = require('./question_routes');

module.exports = (app, db) => {
  questionRoutes(app, db);
}
