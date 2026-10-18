const express = require("express");
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: "לקנות חלב", done: false },
  { id: 2, title: "ללמוד Express", done: true },
  { id: 3, title: "לסיים את הפרויקט", done: false },
];
let nextId = 4;

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.get("/todos", (req, res) => {
  if (req.query.done !== undefined) {
    const done = req.query.done === "true";
    const filtered = todos.filter((t) => t.done === done);
    return res.json(filtered);
  }
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

app.post("/todos", (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTodo = {
    id: nextId++,
    title: req.body.title,
    done: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (req.body.title !== undefined) {
    todo.title = req.body.title;
  }
  if (req.body.done !== undefined) {
    todo.done = req.body.done;
  }

  res.json(todo);
});
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
