export type UserStatus =
  | { status: 'loading' }
  | { status: 'authenticated'; token: string }
  | { status: 'blocked'; reason: string }
// | { status: 'invited'; link: string }

const user: UserStatus = {
  status: 'authenticated',
  token: '12345',
}

user.reason // Error: Property 'reason' does not exist on type '{ status: "authenticated"; token: string; }'.

const user2: UserStatus = {
  status: 'blocked',
  reason: 'Violation of terms',
}

user2.token // Error: Property 'token' does not exist on type '{ status: "blocked"; reason: string; }'.
