const { Router } = require("express");
const { Student } = require("../models/student");
const router = Router();

router.get("/", (req, res) => {
  res.redirect("LandingPage");
});

router.get("/Login", (req, res) => {
  res.redirect("Login");
});

router.get("/Register", (req, res) => {
  res.redirect("Register");
});

router.post("/Register", async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const student = await Student.create({
      name,
      password,
      email,
    });
    res.redirect("/");
    console.log(student);
  } catch (error) {
    res.status(500).send("Error registering student");
  }
});

router.post("/Login", (req, res) => {
  const { email, password } = req.body;
  const student = Student.findOne({ email, password });
  if (!student) {
    res.redirect("/Login");
  }
  res.redirect("/");
});

module.exports = router;
