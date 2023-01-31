const promises = [...Array(100).keys()].map(i => new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 900) + 100)).then(_ => console.log(i)))

function PromiseQueue(tasks = [], concurrentCount = 1) {
  this.total = tasks.length;
  this.todo = tasks;
  this.running = [];
  this.complete = [];
  this.count = concurrentCount;
}

PromiseQueue.prototype.runNext = function () {
  return ((this.running.length < this.count) && this.todo.length);
}

PromiseQueue.prototype.run = function () {
  while (this.runNext()) {
    const promise = this.todo.shift();
    promise.then(() => {
      this.complete.push(this.running.shift());
      this.run();
    });
    this.running.push(promise);
  }
}

const runConcurrentPromises = (promises, concurrency) => {
  const taskQueue = new PromiseQueue(promises, concurrency); //tasks = an array of aysnc functions, 3 = number of tasks to run in parallel
  taskQueue.run();
}

runConcurrentPromises(promises, 1);