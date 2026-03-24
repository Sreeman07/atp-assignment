function validateTitle(title) {
  if (!title || title.length <= 3) {
    return false;
  }
  return true;
}

// Validate priority
function validatePriority(priority) {
  return ["low", "medium", "high"].includes(priority);
}

// Validate future date
function validateDueDate(date) {
  let dueDate = new Date(date);
  let today = new Date();
  return dueDate > today;
}

export { validateTitle, validatePriority, validateDueDate };


