export class TaskQueue {
  private tasks: Array<() => Promise<any>> = [];
  private isProcessing = false;

  async add(task: () => Promise<any>) {
    this.tasks.push(task);
    await this.process();
  }

  private async process() {
    if (this.isProcessing || this.tasks.length === 0) return;

    this.isProcessing = true;
    while (this.tasks.length > 0) {
      const task = this.tasks.shift();
      if (task) {
        try {
          await task();
        } catch (error) {
          console.error('Task error:', error);
        }
      }
    }
    this.isProcessing = false;
  }
}

export default new TaskQueue();
