class LazyMan {
  name = '';
  tasks = []; //任务列表;
  constructor(name) {
    this.name = name;
    setTimeout(() => {
      this.next();
    });
  }
  next () {
    const task = this.tasks.shift();
    if (task) {
      task();
    }
  }

  eat (food) {
    const task = () => {
      console.log(`${this.name} eat  ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
  sleep (seconds) {
    const task = () => {
      setTimeout(() => {
        console.log(`${this.name} sleep  ${seconds}s`);
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);
    return this;
  }
};

const me = new LazyMan('lly');
me.eat('apple').eat('banana').sleep(2).eat('egg');