const express = require("express");
const router = express.Router();
const subjectsController = require("../controllers/subjects");
const exercisesController = require("../controllers/exercises");
const scoresController = require("../controllers/scores");

router.get("/", (req, res) => {
  return res.render("student", { layout: false });
});

router.get("/subjects", subjectsController.getStudentSubjects);

router.get("/exercises/:subjectId", exercisesController.getSubjectExercises);

router.get(
  "/exercises/solve/:exerciseId",
  exercisesController.getExerciseToSolve
);

router.post(
  "/exercises/solve/:exerciseId",
  exercisesController.solveExercise,
  scoresController.updateScore
);

module.exports = router;
