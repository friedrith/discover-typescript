function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person = getProperty({ name: 'Alice', age: 30 }, 'name')

const person2 = getProperty({ name: 'Alice', age: 30 }, 'foo') // <-- typescript will complain here
