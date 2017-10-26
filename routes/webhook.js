var express = require('express');
var router = express.Router();
var chatservice = require('../server/chatService');
/* GET hello world page. */
router.get('/', function(req, res, next) {
  if (chatservice.authenticate){
    return res.status(200).send(req.query['hub.challenge']);
  } else {
    return res.sendStatus(403);
  }
});

module.exports = router;
