import { addTask, completeTask, getAllTasks } from "./task.js";

addTask("reading", "high", "2026-03-15");
addTask("playing", "high", "2026-03-20");

console.log(getAllTasks());

console.log(completeTask("reading"));

console.log(getAllTasks());