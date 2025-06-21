import { UserStatus } from './discriminated-unions'

type BehaviorMap = Record<UserStatus['status'], () => void>

const behaviorsByStatus: BehaviorMap = {
  // uncomment status 'invited' in UserStatus to see the error
  loading: () => {
    /* action 1 */
  },
  authenticated: () => {
    /* action 2 */
  },
  blocked: () => {
    /* action 3 */
  },
}

const userStatus: UserStatus = {
  status: 'authenticated',
  token: 'foo',
}

behaviorsByStatus[userStatus.status]()

type PartialBehaviorMap = Partial<Record<UserStatus['status'], () => void>>

const partialBehaviorsByStatus: PartialBehaviorMap = {
  loading: () => {
    /* action 1 */
  },
  authenticated: () => {
    /* action 2 */
  },
}
