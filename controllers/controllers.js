const { v4 } = require("uuid");
const Todo = require("../models/todoModel");
const { exists } = require("../models/userModel");

const getItem = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

const addItem = async (req, res) => {
  console.log(req, res);
  const item = req.body;
  console.log(item);
  const user = await Todo.create({ ...item });
  res.send(item);
};

const getItemId = (req, res) => {
  const { id } = req.params;
  const itemFound = Todo.findOne((item) => item.id === id);
  console.log(itemFound);
  res.send(itemFound);
};

const deleteItem = async (req, res) => {
  console.log("reqq", req.params);
  const { id } = req.params;
  const existingTodo = await Todo.findOne({ id });
  console.log("exist", existingTodo);

  if (existingTodo) {
    await Todo.deleteOne(existingTodo);
    res.json({
      deletedTodo: existingTodo,
      message: `Deleted ${existingTodo.id}`,
    });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const item = Todo.findOne((item) => item.id === id);

  // if (name) item.name = name;
  // if (toppings) item.toppings = toppings;
  // if (price) item.price = price;

  res.send(
    `Item with id ${id} and name ${item.name} has been updated successfully`
  );
};

module.exports = { getItem, addItem, getItemId, deleteItem, updateItem };
