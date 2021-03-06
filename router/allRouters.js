/* 
https://medium.com/owinteractive/entendendo-o-express-router-e-usando-m%C3%B3dulos-de-forma-simples-24ca6723fe91 */

const router = require('express').Router();

const {
  validateEmail,
  validatePassword,
  getRandomToken,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validatewatchedAt,
  validateRate,
  postTalker,
  putTalker,
  deleteTalker,
  searchTalker,
} = require('../middleware/validations');

router.get('/talker/search', validateToken, searchTalker);

router.post('/login', validateEmail, validatePassword, getRandomToken);
router.post('/talker',
  validateToken, 
  validateName, 
  validateAge, 
  validateTalk,
  validateRate,
  validatewatchedAt, 
  postTalker);

router.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateRate,
  validatewatchedAt,
  putTalker);

router.delete('/talker/:id', validateToken, deleteTalker);

module.exports = router;