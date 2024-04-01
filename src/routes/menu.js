const express = require("express");
const Menu = require("../models/menu");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find({ deleted: { $ne: true } });
    res.json(menu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving menu item." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const menuItem = await Menu.findById({ _id: id, deleted: { $ne: true } });
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving menu item." });
  }
});

router.post("/", async (req, res) => {
  const { name, price, type } = req.body;

  try {
    const menuItem = new Menu({ name, price, type });
    await menuItem.save();
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating menu item." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, type } = req.body;

  try {
    const menuItem = await Menu.findByIdAndUpdate(
      id,
      { name, price, type },
      { new: true }
    );
    res.json(menuItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating menu item." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Menu.findByIdAndUpdate(id, { deleted: true });
    res.json({ message: "Menu item deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting menu item." });
  }
});

module.exports = router;
