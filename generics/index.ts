// 基础使用
function echo<T>(arg: T): T {
  return arg
}
// 交换元组
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 约束泛型
interface WithLength {
  length: number
}
function withEchoLength<T extends WithLength>(args: T): T {
  return args
}

// 接口泛型
interface Iplus<T> {
  (a: T, b: T) : T
}
function plus(a: number, b: number) {
  return a + b
}
const a: Iplus<number> = plus
