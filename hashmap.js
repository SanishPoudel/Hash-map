function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
} 

class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class Hashmap {
  constructor(load = 0.75, capacity = 16) {
    this.load = load;
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
  }

  set(key, value) {
    // TODO: insert at existing one
    let index = hash(key) % this.capacity;
    if (this.buckets[index] != null) {
      let newNode = new Node(key, value);
      let current = this.buckets[index];
      current.next = newNode;
    } else {
      // creating new one if no existing one is found
      let newNode = new Node(key, value);
      this.buckets[index] = newNode;
    }
  }
}


const test = new Hashmap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test);