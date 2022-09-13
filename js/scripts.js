function List()  {
  this.tasks = {}
}

List.prototype.addTask = function(task) {
  this.tasks[task.entry] = task
}

function Task(entry) {
  this.entry = entry;
}