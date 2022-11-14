export class Element {
  constructor(value) {
   this._value = value;
   this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
  }
}

export class List {
  constructor(elements) {
    this._head = null;

    if (Array.isArray(elements)) {
      elements.forEach(element => {
        this.add(new Element(element))
      });
    }
  }

  add(element) {
    element.next = this.head;
    this._head = element;
  }

  get length() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let current = this.head;
    let myarray = [];

    while (current !== null) {
      myarray.push(current.value);
      current = current.next;
    }

    return myarray;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next = this.head;

    while (current !== null) {
      next = next.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this._head = previous;

    return this;
  }
}
