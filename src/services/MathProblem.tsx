import {
  faDivide,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../styles/Calc.module.css"
import type { JSX } from "react"

class MathProblem {
  private _answer: number
  private _expr: JSX.Element
  private _remainder: number

  constructor(type: string | string[]) {
    this._answer = 0
    this._remainder = 0
    this._expr = <p>a</p>
    switch (type) {
      case "add":
        this.genAdd()
        break
      case "sub":
        this.genSub()
        break
      case "mul":
        this.genMul()
        break
      case "div":
        this.genDiv()
        break
      default:
        break
    }
  }

  get answer(): number {
    return this._answer
  }

  get remainder(): number {
    return this._remainder
  }

  get expr(): JSX.Element {
    return this._expr
  }

  public isResultCorrect(inputAnswer: string, inputRemainder: string): boolean {
    if (typeof this.remainder !== "undefined") {
      // わり算のとき、あまりチェック
      if (!this.isReminderCorrect(inputRemainder)) {
        return false
      }
    }
    if (Number(inputAnswer) !== this.answer) {
      return false
    }
    return true
  }

  private isReminderCorrect(inputRemainder: string) {
    if (this.remainder === 0 && inputRemainder === "") {
      return true
    }
    if (Number(inputRemainder) === this.remainder) {
      return true
    }
    return false
  }

  private genNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
  }

  private genAdd(): void {
    const c = this.genNumber(5, 30)
    const b = this.genNumber(1, c)
    const a = c - b

    this._answer = c

    this._expr = (
      <span>
        {a}
        <FontAwesomeIcon icon={faPlus} className={styles.plus} />
        {b}=
      </span>
    )
  }

  private genSub(): void {
    const a = this.genNumber(10, 30)
    const b = this.genNumber(1, a - 1)
    const c = a - b

    this._answer = c

    this._expr = (
      <span>
        {a}
        <FontAwesomeIcon icon={faMinus} className={styles.minus} />
        {b}=
      </span>
    )
  }

  private genMul(): void {
    const c = this.genNumber(2, 81)
    const b = this.genNumber(1, 9)
    const a = Math.floor(c / b)
    const remainder = c % b

    this._answer = c - remainder

    this._expr = (
      <span>
        {a}
        <FontAwesomeIcon icon={faTimes} className={styles.times} />
        {b}=
      </span>
    )
  }

  private genDiv(): void {
    const a = this.genNumber(9, 81)
    const b = this.genNumber(2, 9)
    const c = Math.floor(a / b)

    this._answer = c
    this._remainder = a % b

    this._expr = (
      <span>
        {a}
        <FontAwesomeIcon icon={faDivide} className={styles.divide} />
        {b}=
      </span>
    )
  }
}

export { MathProblem }
