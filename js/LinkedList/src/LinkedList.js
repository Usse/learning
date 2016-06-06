export default class LinkedList {
  constructor() {
    this.version = 0.1;
    this.list = [];
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  // Appends the specified element to the end of this list.
  addLast(elem) {
    let el = {
      value: elem,
      next: null
    };

    if (this.isEmpty()) {
      this.head = el;
      this.tail = el;
    } else {
      this.tail.next = el;
      this.tail = el;
    }

    this.list.push(el);
  }

  // Appends the specified element to the end of this list.
  addFirst(elem) {
    let el = {
      value: elem,
      next: this.head
    };

    this.head = el;
    if (this.isEmpty()) {
      this.tail = el;
    }

    this.list.push(el);
  }

  // Returns true is the list is empty
  isEmpty() {
    return this.list.length === 0;
  }

  // Returns the number of elements in the list.
  length() {
    return this.list.length;
  }

  // Returns an array containing all of the elements in this list in proper
  // sequence (from first to last element).
  toArray() {
    let arr = new Array();
    if (this.isEmpty()) {
      arr = [];
    } else {
      let curr = this.head;
      while (curr.next) {
        arr.push(curr.value);
        curr = curr.next;
      }

      arr.push(this.tail.value);
    }

    return arr;
  }
}










/*
void	clear()
          Removes all of the elements from this list.
 E	getFirst()
          Returns the first element in this list.
 E	getLast()
          Returns the last element in this list.
 E	removeFirst()
          Retrieves and removes the head (first element) of this list.
 E	removeLast(int index)
          Removes the element at the specified position in this list.
*/
