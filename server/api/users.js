const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    if (user.admin){
      const users = await User.findAll();
      res.json(users);
    }
    else{
      res.send({})
    }
  } catch (err) {
    next(err);
  }
});
