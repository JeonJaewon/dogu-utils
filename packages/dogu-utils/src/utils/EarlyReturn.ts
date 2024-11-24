type Callback<T> = (...params: unknown[]) => T

export class EarlyReturn<T> {
  returnValue: T | undefined

  case(condition: boolean, func: Callback<T>): EarlyReturn<T> {
    if (this.isAlreadyReturned(this.returnValue)) {
      return this
    }

    if (condition) {
      this.returnValue = func()
      return this
    }

    return this
  }

  default(func: Callback<T>): T {
    if (this.isAlreadyReturned(this.returnValue)) {
      return this.returnValue
    }
    return func()
  }

  isAlreadyReturned<T>(returnValue: T | undefined) {
    return returnValue !== undefined
  }
}
