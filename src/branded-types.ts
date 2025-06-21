// branded types inspired from https://egghead.io/blog/using-branded-types-in-typescript
declare const __brand: unique symbol
type Brand<B> = { [__brand]: B }
export type Branded<T, B> = T & Brand<B>

// You can also use zod to create branded types cf https://zod.dev/api?id=branded-types

export type DateString = Branded<string, 'DateString'>

function formatDate(date: DateString) {
  return new Intl.DateTimeFormat('en-US').format(new Date(date))
}

formatDate('USD') // typescript complains, because 'USD' is a string, not a DateString
