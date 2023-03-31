

const {
  Register,
  GetAllUsers,
  Login,
  GetConnectedUser,
} = require('../controllers/user.controllers');

module.exports = (app) => {
  app.post('/api/newuser', Register);
  app.post('/api/login', Login);
  app.get('/api/users', GetAllUsers);
  app.get('/api/user', GetConnectedUser);
};
