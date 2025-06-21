function identity<T>(value: T): T {
  return value
}

type User = {
  id: number
  name: string
}

const user: User = { id: 1, name: 'Alice' }

const user2: User = identity(user)
