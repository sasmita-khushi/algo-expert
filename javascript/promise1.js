function loadUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Sasmita", role: "Student" });
    }, 1500);
  });
}

function loadTodos() {
  return new Promise((resolve, reject) => {
    Math.random() > 0.5
      ? resolve([
          { id: 1, task: "Learn JS" },
          { id: 2, task: "Practice React" },
        ])
      : reject(new Error("Failed to load todos"));
  });
}

function completeTodo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} marked as complete`);
    }, 1000);
  });
}

async function showDashboard() {
  const user = await loadUser();
  console.log(`Welcome ${user.name} (${user.role})`);

  try {
    const todos = await loadTodos();

    todos.forEach((todo) => {
      console.log(`- ${todo.task}`);
    });
    for (const todo of todos) {
      const message = await completeTodo(todo.id);
      console.log(message);
    }
  } catch (err) {
    console.log("Error loading todos", err);
  }
}

showDashboard();
