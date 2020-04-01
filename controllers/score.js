const Score = require("../models/score");
const ObjectID = require("mongodb").ObjectID;

exports.updateScore = (req, res) => {
  Score.updateOne(
    {
      ownerEmail: req.session.user["email"],
      exerciseId: ObjectID(res.locals.newScore.exerciseId)
    },
    {
      $set: {
        solved: res.locals.newScore.solved,
        score: res.locals.newScore.score,
        flaws: res.locals.newScore.flaws
      }
    },
    true
  )
    .then(result => {
      return res.json(res.locals.newScore);
    })
    .catch(err => {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Erro ao tentar registrar pontuação do código." });
    });
};
