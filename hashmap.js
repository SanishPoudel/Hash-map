function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }

  return hashCode;
} 

class Hashmap {
  constructor(load = 0.75, capacity = 16) {
    this.buckets = new Array(capacity).fill(null);
  }
}
