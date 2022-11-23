// 联合类型
let myPhone: string | number = '090909090'

// myPhone = true
console.log(myPhone)

// 数组和元组

const numberOfArrs: number[] = [1, 3, 4]

const tupleOfArrs: [string, number] = ['', 3]
// 元组会不能阻止数组越界添加元素，但可以将元素限制为联合类型
// tupleOfArrs.push({})
