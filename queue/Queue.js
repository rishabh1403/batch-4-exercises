
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(data) {
    this.linkedList.push(data);
  }

  toString(stringifier) {
    if (!stringifier) {
      return this.linkedList.toString();
    }
    return this.linkedList.reduce((acc, el) => `${acc}${stringifier(el)},`, '').slice(0, -1);
  }

  peek() {
    return this.linkedList[0] ? this.linkedList[0] : null;
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  dequeue() {
    const [head, ...tail] = this.linkedList;
    this.linkedList = tail;
    return head === undefined ? null : head;
  }
}

export {
  Queue,
};
