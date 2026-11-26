let todos = [
  {
    id: 1,
    title: "Learn Express",
    completed: false,
  },
  {
    id: 2,
    title: "Do homework",
    completed: true,
  },
  {
    id: 3,
    title: "Learn React",
    completed: false,
  },
];

export const getTodos = (req, res) => {
  res.json(todos);
};

export const getTodoById = (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find((todo) => todo.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};