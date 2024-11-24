import { describe, it, expect } from "vitest"
import { EarlyReturn } from "./EarlyReturn"

describe("EarlyReturn", () => {
  it("should return value when condition is true", () => {
    const earlyReturn = new EarlyReturn<number>()
    const result = earlyReturn.case(true, () => 42).default(() => 0)
    expect(result).toBe(42)
  })

  it("should not override return value if already set", () => {
    const earlyReturn = new EarlyReturn<number>()
    const result = earlyReturn
      .case(true, () => 42)
      .case(true, () => 24)
      .default(() => 0)
    expect(result).toBe(42)
  })

  it("should return default value if no case matches", () => {
    const earlyReturn = new EarlyReturn<number>()
    const result = earlyReturn
      .case(false, () => 42)
      .case(false, () => 24)
      .default(() => 0)
    expect(result).toBe(0)
  })

  it("should return undefined if no case matches and no default is provided", () => {
    const earlyReturn = new EarlyReturn<number>()
    const result = earlyReturn
      .case(false, () => 42)
      .case(false, () => 24).returnValue
    expect(result).toBeUndefined()
  })
})
