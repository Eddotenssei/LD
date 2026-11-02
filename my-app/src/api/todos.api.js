export const GetTodos = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.status}`);
  }

  return response.json();
};

export const GetTodo = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }

  return response.json();
};

export const UpdateTodo = async ({ id, todo }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update todo");
  }

  return response.json();
};