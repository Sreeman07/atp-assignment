import { validateDueDate, validatePriority, validateTitle } from "./validator.js";

const tasks = [];

function addTask(title, priority, dueDate) {
  if (validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)) {
    tasks.push({
      title,
      priority,
      dueDate,
      completed: false
    });
     console.log("Task added successfully");
  } else {
    console.log("Invalid task data");
  }
}

function getAllTasks() {
  return tasks;
}

// ✅ Complete task using title
function completeTask(title) {
  let task = tasks.find(t => t.title === title);

  if (task) {
    task.completed = true;
    return "Task completed";
  }
  return "Task not found";
}

export { addTask, getAllTasks, completeTask };