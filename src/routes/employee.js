const express = require("express");
const Employee = require("../models/employee");

const router = express.Router();

// TODO :: Implement authentication with encrypted password
router.post("/auth", async (req, res) => {
  const { username, password } = req.body;

  try {
    const employee = await Employee.findOne({
      username,
      password,
    });
    if (employee) {
      res.json(employee);
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error authenticating employee." });
  }
});

module.exports = router;
