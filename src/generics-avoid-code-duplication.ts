function mergeArrays<T>(a: T[], b: T[]): T[] {
  return [...a, ...b]
}

const numbers: number[] = mergeArrays([1, 2, 3], [4, 5, 6])

const strings: string[] = mergeArrays(['a', 'b'], ['c', 'd'])
