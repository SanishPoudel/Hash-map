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

    let index = hash(key) % this.capacity;
    let current = this.buckets[index];
    let previous = null;
    
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      previous = current;
      current = current.next;
    }

    let newNode = new Node(key, value);

    if (previous) {
      previous.next = newNode;
    } else {
      this.buckets[index] = newNode;
    }
  }

  get(key) {
    let index = hash(key) % this.capacity;
    let current = this.buckets[index];

    while(current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return null;
  }

  has(key) {
    let result = this.get(key);
    if (result === null) {
      return false;
    }
    return true;
  }

  remove(key) {

    let index = hash(key) % this.capacity;
    let current = this.buckets[index];
    let previous = null;

    if (current.key === key) {
      current = current.next;
      this.buckets[index] = current;
      return true;
    }

    while (current) {
      if (current.key === key) {
        previous.next = current.next;
        return true;
      }
      previous = current;
      current = current.next;
    }
    
    return false;
  }

  length() {
    let count = 0
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i];
      while (current) {
        if (current.key != null) {
          count ++;
        }
        current = current.next;
      }
    }
    return count;
  }

  clear() {
    this.buckets.fill(null);
  }

  keys() {
  let result = []
  for (let i = 0; i < this.buckets.length; i++) {
    let current = this.buckets[i];
    while (current) {
      if (current.key != null) {
        result.push(current.key);
      }
      current = current.next;
    }
  }
  return result;
  }

  values() {
  let result = []
  for (let i = 0; i < this.buckets.length; i++) {
    let current = this.buckets[i];
    while (current) {
      if (current.key != null) {
        result.push(current.value);
      }
      current = current.next;
    }
  }
  return result;
  }

  entries() {
    let result = []
    for (let i = 0; i < this.buckets.length; i++) {
      let current = this.buckets[i];
      while (current) {
        if (current.key != null) {
          let entry = [current.key, current.value];
          result.push(entry);
        }
        current = current.next;
      }
    }
    return result;
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
console.log(test.has("lion"));
console.log(test.length());
console.log(test.entries());